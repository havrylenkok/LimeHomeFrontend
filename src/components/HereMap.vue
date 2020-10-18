<template>
    <div id="map">
        <div id="mapContainer" ref="hereMap"></div>
        <div class="propertiesContainer">
            <Property v-for="(place, i) in visiblePlaces" :key="i" :place="place"></Property>
        </div>
    </div>
</template>

<script>
  import Property from '@/components/Property'

  export default {
    name: 'HereMap',
    components: {
      Property
    },
    props: {
      center: Object,
    },
    data () {
      return {
        ui: null,
        platform: null,
        map: null,
        markerGroup: null,
        apikey: '',
        places: [],
        visiblePlaces: []
      }
    },
    async created() {
      this.apikey = process.env.VUE_APP_HERE_JS_API_KEY
    },
    async mounted () {
      // Initialize the platform object:
      this.platform = new window.H.service.Platform({
        apikey: this.apikey
      })
      this.initializeHereMap()
      await this.loadProperties()
      this.addMarkersToMap()
    },
    methods: {
      initializeHereMap () {
        const mapContainer = this.$refs.hereMap
        const H = window.H
        // Obtain the default map types from the platform object
        var maptypes = this.platform.createDefaultLayers()
        // Instantiate (and display) a map object:
        this.map = new H.Map(mapContainer, maptypes.vector.normal.map, {
          zoom: 12,
          center: this.center
        })
        addEventListener('resize', () => this.map.getViewPort().resize())
        // add behavior control
        new H.mapevents.Behavior(new H.mapevents.MapEvents(this.map))
        // add UI
        this.ui = H.ui.UI.createDefault(this.map, maptypes)
        this.ui.getControl('zoom').setAlignment('top-right')
        this.ui.getControl('scalebar').setVisibility(false)
        this.ui.getControl('mapsettings').setDisabled(true)
        this.ui.getControl('mapsettings').setVisibility(false)

        this.markerGroup = new H.map.Group()
        this.map.addObject(this.markerGroup)
        this.markerGroup.addEventListener('tap', (event) => {
          // todo: replace with changing icon to home-active and scrolling cards to relevant
          var bubble = new H.ui.InfoBubble(event.target.getGeometry(), {content: event.target.getData()})
          this.ui.addBubble(bubble)
        }, false)
      },
      async loadProperties () {
        this.places = await this.$axios.get('/properties/', {
          crossdomain: true,
          params: {
            at: `${this.center.lat},${this.center.lng}`
          }
        }).then(res => res.data)
        this.visiblePlaces = this.places.slice(0, 3)
        console.log('vp', this.visiblePlaces)
      },
      addMarkersToMap () {
        const H = window.H
        const icon = new H.map.Icon('') // todo: home icon from assets
        console.log('vp', this.visiblePlaces)
        this.visiblePlaces.forEach(place => {
          var marker = new H.map.Marker({lat: place.position[0], lng: place.position[1], icon: icon})
          marker.setData(place.title)
          this.markerGroup.addObject(marker)
        })
      }
    }
  }
</script>

<style scoped>
    #map {
        width: 100%;
        height: calc(100vh - 60px);
        background-color: #ccc;
    }

    #mapContainer {
        height: 100%;
        width: 100%;
    }

    .propertiesContainer {
        position: absolute;
        bottom: 0;
        height: 220px;
        width: 100%;
        overflow-x: auto;
        overflow-y: hidden;
        display: flex;
        flex-wrap: nowrap;
        margin-bottom: 10px;
        z-index: 1;
    }
</style>
