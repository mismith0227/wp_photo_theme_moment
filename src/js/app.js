import Zooming from 'zooming'
import { cursor } from './cursor'
import { toggle as toggleSidebar } from './sidebar'
const $ = window.jQuery
require('slick-carousel')

$(() => {
  const ua = navigator.userAgent
  const isPC =
    ua.indexOf('iPhone') === -1 &&
    (ua.indexOf('Android') === -1) & (ua.indexOf('Mobile') === -1) &&
    ua.indexOf('iPad') === -1

  if (isPC) {
    cursor()
  }

  // menu
  $('body').append('<div class="sidebar-back">')

  const menuIcon = $('#menuicon')
  const sidebarBack = $('.sidebar-back')
  menuIcon.on('click', () => {
    toggleSidebar()
  })

  sidebarBack.on('click', () => {
    toggleSidebar()
  })

  // slick
  $('#slick-slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    fade: isPC,
    speed: isPC ? 1000 : 300,
    dots: true
  })

  // zooming
  const zooming = new Zooming({
    bgColor: 'rgba(0, 0, 0)',
    bgOpacity: 0.7,
    scaleBase: isPC ? 0.5 : 0.9,
    onBeforeOpen: target => {
      target.classList.add('is-zooming')
    },
    onClose: target => {
      target.classList.remove('is-zooming')
    }
  })

  zooming.listen('.c-gallery img')
})
