const $ = window.jQuery

export let isSidebarOpen = false

export const toggle = () => {
  if (isSidebarOpen) {
    $('.p-sidebar').removeClass('open')
    $('.sidebar-back').removeClass('open')
    $('.site').removeClass('blur')
    $('#menuicon').removeClass('open')
    isSidebarOpen = !isSidebarOpen
  } else {
    $('.p-sidebar').addClass('open')
    $('.sidebar-back').addClass('open')
    $('.site').addClass('blur')
    $('#menuicon').addClass('open')
    isSidebarOpen = !isSidebarOpen
  }
}
