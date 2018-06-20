(function htmlResize () {
  var devierWidth = document.documentElement.clientWidth
  var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  document.documentElement.style.fontSize = devierWidth / 3.75 + 'px'
  addEventListener(resizeEvt, htmlResize)
  document.addEventListener('DOMContentLoaded', resizeEvt, false)
})()
