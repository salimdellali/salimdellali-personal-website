import $ from 'jquery'
window.$ = window.jQuery = $

import 'jquery.easing'
import 'bootstrap'
import '../js/freelancer.js'

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

document.querySelector('#thisYear').innerHTML = new Date().getFullYear().toString()
