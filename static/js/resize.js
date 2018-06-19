function htmlResize () {
  var devierWidth = document.documentElement.clientWidth
  document.documentElement.style.fontSize = (devierWidth * devicePixelRatio) / 7.5 + 'px'
  addEventListener('resize', htmlResize)
}

htmlResize()
