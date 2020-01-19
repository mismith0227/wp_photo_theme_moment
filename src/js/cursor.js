import TweenMax from 'gsap'
const $ = window.jQuery

export const cursor = () => {
  let mouseX = 0
  let mouseY = 0

  const delay = 10
  let posX = 0
  let posY = 0

  $('body').append('<div id="follower">')

  const follower = $('#follower')

  TweenMax.to({}, 0.01, {
    repeat: -1,
    onRepeat: () => {
      posX += (mouseX - posX) / delay
      posY += (mouseY - posY) / delay

      TweenMax.set(follower, {
        css: {
          left: posX,
          top: posY
        }
      })
    }
  })

  $(document).on('mousemove', e => {
    mouseX = e.pageX
    mouseY = e.pageY
  })

  $('a, button, .c-gallery img').on({
    mouseenter: e => {
      follower.addClass('is-active')
    },
    mouseleave: () => {
      follower.removeClass('is-active')
    }
  })
}
