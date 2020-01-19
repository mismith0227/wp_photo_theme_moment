const $ = window.jQuery

export let isSidebarOpen = false

export const toggle = () => {
  if (isSidebarOpen) {
    $('.p-sidebar').removeClass('open')
    $('.sidebar-back').removeClass('open')
    $('.site').removeClass('blur')
    isSidebarOpen = !isSidebarOpen
  } else {
    $('.p-sidebar').addClass('open')
    $('.sidebar-back').addClass('open')
    $('.site').addClass('blur')
    isSidebarOpen = !isSidebarOpen
  }
}
