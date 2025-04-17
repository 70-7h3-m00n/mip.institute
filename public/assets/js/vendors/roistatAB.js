window.onRoistatModuleLoaded = function () {
  window.roistat.registerAbTestCallback(6, function (variant) {
    switch (variant) {
      case 'main_old':
        localStorage.setItem('AB', 'old')
        break
      case 'main_new':
        localStorage.setItem('AB', 'new')
        break
    }
  })
}
