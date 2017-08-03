// import FontAwesome from 'font-awesome/css'
import jQuery from 'jquery'
import 'uikit'
import NavBar from '@/components/NavBar'
import SocialIcons from '@/components/SocialIcons'

import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Conferences from '@/components/faculty/Conferences'
import Contact from '@/components/faculty/ContactUs'
import FacultyExchange from '@/components/faculty/FacultyExchange'
import Fulbright from '@/components/faculty/Fulbright'
import Home from '@/components/faculty/Home'
import Internationalizing from '@/components/faculty/Internationalizing'
import ProgramLeader from '@/components/faculty/ProgramLeader'
import SafetyAbroad from '@/components/faculty/SafetyAbroad'
import StudyAbroad from '@/components/faculty/StudyAbroad'
import TravelRegistration from '@/components/faculty/TravelRegistration'
import PageNotFound from '@/components/PageNotFound'

Vue.use(Router)
Vue.use(jQuery)

Vue.component('nav-bar', NavBar)
Vue.component('social-icons', SocialIcons)
// Vue.use(UiKit)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Hello', component: Hello },
    { path: '/faculty/conferences', name: 'Conferences', component: Conferences },
    { path: '/faculty/contact', name: 'Contact', component: Contact },
    { path: '/faculty/facultyexchange', name: 'FacultyExchange', component: FacultyExchange },
    { path: '/faculty/fulbright', name: 'Fulbright', component: Fulbright },
    { path: '/faculty/home', name: 'Home', component: Home },
    { path: '/faculty/internationalizing', name: 'Internationalizing', component: Internationalizing },
    { path: '/faculty/programleader', name: 'ProgramLeader', component: ProgramLeader },
    { path: '/faculty/safety', name: 'SafetyAbroad', component: SafetyAbroad },
    { path: '/faculty/studyabroad', name: 'StudyAbroad', component: StudyAbroad },
    { path: '/faculty/travelreg', name: 'TravelRegistration', component: TravelRegistration },
    { path: '*', name: 'PageNotFound', component: PageNotFound },
  ]
})
