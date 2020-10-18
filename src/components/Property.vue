<template>
    <div class="propertyContainer">
        <div class="details">
            <div class="preview"><img alt="Property photo"></div>
            <div class="description">
                <div class="title">{{place.title}}</div>
                <div class="distance">{{place.distance}} meters from the city center</div>
                <div class="price">£99</div>
                <div class="notice">Designs may vary</div>
            </div>
        </div>
        <div class="book">
            <a class="bookButton">Book</a>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'Property',
    props: {
      place: Object,
    },
  }
</script>

<style scoped>
    .propertyContainer {
        height: 225px;
        width: 270px;
        min-width: 270px;
        background: #fff;
        margin-right: 10px;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        overflow: hidden;
    }

    .propertyContainer:first-of-type {
        margin-left: 10px;
    }

    .details {
        padding: 15px;
        display: flex;
        flex-wrap: nowrap;
    }

    .preview {
        height: 140px;
        width: 100px;
        background: silver;
        margin-right: 15px;
    }

    .description {
        height: 100%;
        width: 125px;
        font-size: 0.8rem;
        font-family: system-ui, serif;
        text-align: left;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
    }

    .book {
        height: 40px;
        line-height: 40px;
        margin: auto 15px 15px;
    }

    .bookButton {
        display: inline-block;
        background: #F6941C;
        color: #fff;
        text-align: center;
        width: 100%;
        height: 100%;
        font-weight: bold;
    }

    .title {
        font-weight: bold;
        margin-bottom: 10px;
    }

    .distance, .notice {
        color: #B8BDC0;
        font-weight: 600;
    }

    .price {
        margin-top: auto;
        font-size: 1.3rem;
        font-weight: 700;
    }
</style>
