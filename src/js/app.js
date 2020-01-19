import Zooming from 'zooming'
import { cursor } from './cursor'
const $ = window.jQuery
require('slick-carousel')

$(() => {
  const ua = navigator.userAgent

  if (
    ua.indexOf('iPhone') === -1 &&
    (ua.indexOf('Android') === -1) & (ua.indexOf('Mobile') === -1) &&
    ua.indexOf('iPad') === -1
  ) {
    cursor()
  }

  // slick
  $('#slick-slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    fade: true,
    speed: 1000,
    dots: true
  })

  // zooming
  const zooming = new Zooming({
    bgColor: 'rgba(0, 0, 0)',
    bgOpacity: 0.7,
    scaleBase: 0.5,
    onBeforeOpen: target => {
      target.classList.add('is-zooming')
    },
    onClose: target => {
      target.classList.remove('is-zooming')
    }
  })

  zooming.listen('.c-gallery img')
})
