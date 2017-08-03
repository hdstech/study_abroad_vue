<template>
  <div id="app">
      <div class="uk-container main-container uk-container-large uk-card-default uk-padding-remove">
          <div class="uk-container uk-container-large uk-section uk-padding-remove-vertical uk-margin-top" style="background-color: #FFF;">
              <span>
                  <img src="./assets/img/valencia-college-logo.svg" alt="Valencia College logo" width="250" class="uk-margin-bottom">
                  <span class="uk-align-right nav-login">
                      <a href=""><i class="fa fa-sign-in" aria-hidden="true"></i>
                      ATLAS LOGIN
                      </a>
                  </span>
              </span>
              <span class="valencia-top-nav">
                  <ul class="uk-flex uk-flex-between uk-padding-remove-horizontal">
                      <li class="uk-float-left uk-padding-small top-nav">Future Students</li>
                      <li class="uk-float-left uk-padding-small top-nav">|</li>
                      <li class="uk-float-left uk-padding-small top-nav">Current Students</li>
                      <li class="uk-float-left uk-padding-small top-nav">|</li>
                      <li class="uk-float-left uk-padding-small top-nav">Faculty & Staff</li>
                      <li class="uk-float-left uk-padding-small top-nav">|</li>
                      <li class="uk-float-left uk-padding-small top-nav">Visitors & Friends</li>
                      <li class="uk-float-left uk-padding-small top-nav">|</li>
                      <li class="uk-float-left uk-padding-right top-nav nav-input">
                          <button class="uk-button uk-button-default" type="button">Quick Links</button>
                          <div uk-dropdown class="uk-padding-remove">
                              <ul class="uk-nav uk-dropdown-nav quick-links">
                                  <li><a href="#">Academic Calendar</a></li>
                                  <li><a href="#">Admissions</a></li>
                                  <li><a href="#">Blackboard Learn</a></li>
                                  <li><a href="#">Business Offices</a></li>
                                  <li><a href="#">Campuses</a></li>
                                  <li><a href="#">Calendars</a></li>
                                  <li><a href="#">Catalog</a></li>
                                  <li><a href="#">Class Schedule</a></li>
                                  <li><a href="#">Continuing Education</a></li>
                                  <li><a href="#">Degree & Career Programs</a></li>
                                  <li><a href="#">Economic Development</a></li>
                                  <li><a href="#">Employment</a></li>
                                  <li><a href="#">Financial Aid Servies</a></li>
                                  <li><a href="#">International</a></li>
                                  <li><a href="#">Libraries</a></li>
                                  <li><a href="#">Locations</a></li>
                                  <li><a href="#">Phone Directory</a></li>
                                  <li><a href="#">Records/Transcripts</a></li>
                                  <li><a href="#">Security/Parking</a></li>
                                  <li><a href="#">Support</a></li>
                                  <li><a href="#">Valencia Events</a></li>
                              </ul>
                          </div>
                      </li>
                      <li class="uk-float-left uk-padding-small top-nav">|</li>
                      <li class="uk-float-left uk-padding-none nav-input">
                          <span>
                              <input type="text" placeholder="Search">
                              <i class="fa fa-search" aria-hidden="true"></i>
                          </span>
                      </li>
                  </ul>
              </span>
          </div>

      <!-- Content area -->
      <router-view></router-view>

      <!-- Footer -->
        <footer class="uk-container uk-padding uk-width uk-margin-large-top" style="background-color: #EEE;">
          <span class="footer-span">
              <span class="uk-float-left uk-width-3-4">
          <table class="uk-table uk-table-small">
              <thead>
                  <tr>
                      <th>About</th>
                      <th>Your Valencia</th>
                      <th>Academics</th>
                      <th>Support</th>
                      
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>Awards & Recognition</td>
                      <td>Current Students</td>
                      <td>Academic Calendar</td>
                      <td>Contact</td>
                  </tr>
                  <tr>
                      <td>Board of Trustees</td>
                      <td>Faculty & Staff</td>
                      <td>Admissions</td>
                      <td>Employment</td>
                  </tr>
                  <tr>
                      <td>Events</td>
                      <td>Future Students</td>
                      <td>Class Schedule</td>
                      <td>Getting Help</td>
                  </tr>
                  <tr>
                      <td>Financial Aid</td>
                      <td>Visitors & Friends</td>
                      <td>Continuing Education</td>
                      <td>Records</td>
                  </tr>
                  <tr>
                      <td>History</td>
                      <td></td>
                      <td>Degrees & Programs</td>
                      <td>Safety & Security</td>
                  </tr>
                  <tr>
                      <td>News</td>
                      <td></td>
                      <td>Departments</td>
                      <td>Search</td>
                  </tr>
                  <tr>
                      <td>Office of the President</td>
                      <td></td>
                      <td>Libraries</td>
                      <td></td>
                  </tr>
                  <tr>
                      <td>Policy Manual</td>
                      <td></td>
                      <td>Records & Transcripts</td>
                      <td></td>
                  </tr>
                  <tr>
                      <td>Sustainability</td>
                      <td></td>
                      <td></td>
                      <td></td>
                  </tr>
              </tbody>
          </table>
          </span>
              <span class="uk-float-right">
                  <img src="./assets/img/50th_anniversary.png" alt="">
              </span>
          </span>
      
          <span class="uk-container uk-width uk-display-block uk-align-right uk-text-center">
              <p>
                  PRIVACY | CONSUMER INFORMATION | SOCIAL SECURITY NUMBER USAGE | CUSTODIAN OF PUBLIC RECORDS | COPYRIGHT © 2017 VALENCIA COLLEGE | P.O. BOX 3028 - ORLANDO, FLORIDA 32802 407-299-5000 
              </p>
              <p>
                  Valencia College provides equal opportunity for educational opportunities and employment to all. Contact the Office of Organizational Development and Human Resources for information.
              </p>
              <p>
                  Under Florida law, e-mail addresses are public records. If you do not want your e-mail address released in response to a public records request, do not send electronic mail to this entity.
              </p>
              <p>
                  nstead, contact the appropriate office by phone or in writing.
              </p>
          </span>
        </footer>
      </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>

</style>
