<template>
    <div id='navbar'>
        <div class="uk-selection" data-uk-sticky>
            <nav class="uk-container uk-container-large" style="z-index:50;">
                <ul class="menu name uk-flex uk-padding-remove">
                    <li class="uk-flex-1">
                        <router-link to="/faculty/home"> 
                            <i class="fa fa-home" aria-hidden="true"></i>
                        </router-link>
                        
                    </li>
                    <li class="uk-flex-1">
                        <!-- <a href="#">Lead Study Abroad</a>
                        <ul class="sub-menu uk-subnav-divider">
                            <li> -->
                                <router-link to="/faculty/programleader"> 
                                    Program Leader
                                </router-link>
                            <!-- </li>
                        </ul> -->
                    </li>
                    <li class="uk-flex-2">
                        <router-link to="/faculty/internationalizing"> 
                            Internationalizing the Curriculum
                        </router-link>
                    </li>
                    <li class="uk-flex-2">
                        <a href="#">Professional Development</a>
                        <ul class="sub-menu uk-subnav-divider uk-flex-center" style="display: flex;">
                            <li>
                                <router-link to="/faculty/conferences"> 
                                Conferences
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/faculty/facultyexchange"> 
                                    Faculty Exchange
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/faculty/fulbright"> 
                                    Fulbright
                                </router-link>
                            </a>
                            </li>
                        </ul>
                    </li>
                    <li class="uk-flex-1">
                        <router-link to="/faculty/travelreg"> 
                            Registration
                        </router-link>

                    </li>
                    <li class="uk-flex-1">
                        <router-link to="/faculty/safety"> 
                            Travel Safety
                        </router-link>
                    </li>
                    <li class="uk-flex-1">
                        <router-link to="*"> 
                            Students
                        </router-link>
                    </li>
                </ul>
            </nav>
        </div>

        <!--Banner picture-->
        <div class="main-pic widget" id="nav-pic">
            <img :src="'../assets/img/' + image + '.jpg'" alt="" width="100%" :style="myStyle">
            <div class="blur-container">
                <div class="blur-image" :style="'background-image: url(../assets/img/' + image + '.jpg);'"></div>
            </div>

            <div class="title-text">
                <h1 class="uk-text-uppercase uk-text-bold uk-margin-remove">{{title}}</h1>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    props: ['title', 'image', 'myStyle'],
    name: 'nav-bar',
    data: {
        title: 'FACULTY AND STAFF',
        
    },
    data: () => {
        return {
            
        }
    }
}
</script>

<style scoped>


</style>