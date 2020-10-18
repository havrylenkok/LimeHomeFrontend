<template>
    <div id="header">
        <div class="nav">
            <a><img src="@/assets/logo.svg" alt="logo"/></a>
            <a class="menu"><img src="@/assets/burger.svg" alt="menu"></a>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'LimeHeader',
  }
</script>

<style scoped>

    #header {
        background: #EBEAE5;
        width: 100%;
        height: 60px;
    }

    .nav {
        display: flex;
        flex-wrap: nowrap;
        padding: 20px 20px;
    }

    .menu {
        margin-left: auto;
    }

</style>
