<template>
    <div id='page-not-found'>
        <div class="uk-container">
        <div class="uk-section uk-section-large uk-section-muted uk-padding">
            <h1 style="font-size: 10em; color: #BF311A">
                <i class="fa fa-frown-o" aria-hidden="true"></i>
                Oops!</h1>
            <h4>Looks like the page you're searching for doesn't exist. Check the url or go to the
                <router-link to="/" class="uk-link">home page</router-link>
            </h4>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'page-not-found'

}
</script>

<style scoped>

</style>