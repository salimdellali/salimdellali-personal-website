import $ from 'jquery'
window.$ = window.jQuery = $

import 'jquery.easing'
import 'bootstrap'

import './components/main-nav.js'
import './components/site-masthead.js'
import './components/about-me.js'
import './components/my-stack.js'
import './components/contact-section.js'
import './components/site-footer.js'
import './components/copyright-section.js'
import './components/scroll-to-top.js'

import '../js/freelancer.js'

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
