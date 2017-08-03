<template>
  <div class="hello">
    <nav class="uk-navbar-container" uk-navbar>
      <div class="uk-navbar-right center-nav">
  
  <ul class="uk-navbar-nav d-flex">
      
      <li>
          <a href="#" class='uk-text-bold text-white'>Student</a>
          <div class="uk-navbar-dropdown">
              <ul class="uk-nav uk-navbar-dropdown-nav">
                  <li class="uk-nav-header"><a href="#">Active</a></li>
                  <li class="uk-nav-header"><a href="#">Item</a></li>
                  <li class="uk-nav-header"><a href="#">Item</a></li>
                  <li class="uk-nav-header"><a href="#">Item</a></li>
                  <li class="uk-nav-header"><a href="#">Item</a></li>
              </ul>
          </div>
      </li>
      <li>
         <router-link to="/faculty/home" class='uk-text-bold text-white'> 
          Faculty
         </router-link> 
          <div class="uk-navbar-dropdown">
              <ul class="uk-nav uk-navbar-dropdown-nav">
                  <li class="uk-nav-header"><a href="#">Lead Study Abroad</a></li>
                  <li class="uk-nav-header"><a href="#">Internationalizing the Curriculum</a></li>
                  <li class="uk-nav-header"><a href="#">Professional Development</a></li>
                  <li class="uk-nav-header"><a href="#">Travel Registration</a></li>
                  <li class="uk-nav-header"><a href="#">Travel Safety</a></li>
                  
              </ul>
          </div>
      </li>
  </ul>
</div>
<div class="uk-navbar-right"><ul class="uk-navbar-nav">
      <li>  </li>
  </ul>
</div>
</nav>
<div class="social">
<ul>
  <li><a href="https://twitter.com/gian_michelle">Twitter <i class="fa fa-twitter"></i></a></li>
  <li><a href="https://facebook.com/gian.michelle">Facebook <i class="fa fa-facebook"></i></a></li>
  <li><a href="http://dribbble.com/gian_michelle">Dribbble <i class="fa fa-dribbble"></i></a></li>
  <li><a href="http://behance.net">Behance <i class="fa fa-behance"></i></a></li>
  
</ul>
</div>
  
<!--Banner picture-->
<div class="uk-inline">
  <img src="../assets/img/study_abroad.png" alt="">
  <div class="uk-overlay uk-position-top">
      <h1 class="uk-text-bold">The World Awaits You</h1>
      <a href="#" class="uk-button uk-button-large uk-button-default">SIGN UP</a>
  </div>
</div>
  <div class="uk-width-1-1 notification-bar">
      <div class="uk-container uk-text-center">
          
              <span style="line-height: 3em;">
                  <span><a href=""><i class="fa fa-angle-left" aria-hidden="true"></i></a></span>
                  <span class="notification">  Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                      <a href="">more details...</a>
                  </span>
                  <span><a href=""><i class="fa fa-angle-right" aria-hidden="true"></i></a></span>
              </span>
          
      </div>
</div>

  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .uk-flex > li {
    align-self: center;
    justify-content: center;
  }
  ul.uk-flex {
    height: 3.5em;
  }
  .uk-navbar-nav > li > a {
    max-height: 3.5em;
    font-size: 16pt;
    font-weight: 500;
    align-self: center;
  }
  .uk-navbar ul li {
    padding-left: 3em;
    padding-right: 3em;
    display: flex;
    max-height: 3.5em;
  }
  .uk-navbar-dropdown {
    padding: 0;
    width: 250px;
  }
  [class*='uk-navbar-dropdown-bottom'] {
    margin-top: 0;
  }

</style>
