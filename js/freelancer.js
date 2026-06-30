import * as bootstrap from 'bootstrap'

'use strict'

// Smooth scrolling
document.querySelectorAll('a.js-scroll-trigger[href*="#"]:not([href="#"])').forEach(el => {
  el.addEventListener('click', function (e) {
    if (
      location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') &&
      location.hostname === this.hostname
    ) {
      const target = document.querySelector(this.hash)
      if (target) {
        e.preventDefault()
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY - 71,
          behavior: 'smooth',
        })
      }
    }
  })
})

// Scroll to top button appear
const scrollToTopEl = document.querySelector('.scroll-to-top')
document.addEventListener('scroll', () => {
  if (scrollToTopEl) {
    scrollToTopEl.style.display = window.scrollY > 100 ? 'block' : 'none'
  }
})

// Close responsive menu when a scroll trigger link is clicked
document.querySelectorAll('.js-scroll-trigger').forEach(el => {
  el.addEventListener('click', () => {
    const navbarCollapse = document.querySelector('#navbarResponsive')
    if (navbarCollapse) {
      bootstrap.Collapse.getOrCreateInstance(navbarCollapse, { toggle: false }).hide()
    }
  })
})

// Activate scrollspy
new bootstrap.ScrollSpy(document.body, { target: '#mainNav' })

// Navbar shrink on scroll
const mainNav = document.querySelector('#mainNav')
const navbarShrink = () => {
  if (!mainNav) return
  mainNav.classList.toggle('navbar-shrink', window.scrollY > 100)
}
navbarShrink()
window.addEventListener('scroll', navbarShrink)

// Floating label headings for the contact form
document.body.addEventListener('input', e => {
  const group = e.target.closest('.floating-label-form-group')
  if (group) group.classList.toggle('floating-label-form-group-with-value', !!e.target.value)
})
document.body.addEventListener('focusin', e => {
  const group = e.target.closest('.floating-label-form-group')
  if (group) group.classList.add('floating-label-form-group-with-focus')
})
document.body.addEventListener('focusout', e => {
  const group = e.target.closest('.floating-label-form-group')
  if (group) group.classList.remove('floating-label-form-group-with-focus')
})

// Tooltips
document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(el => new bootstrap.Tooltip(el))
