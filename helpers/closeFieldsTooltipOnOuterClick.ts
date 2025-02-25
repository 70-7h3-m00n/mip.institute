const closeFieldsTooltipOnOuterClick = func => {
  document.addEventListener('click', e => {
    const target: any = e.target
    const btnFieldsContainer = document.getElementById('btnFieldsContainer')
    if (target !== btnFieldsContainer && !btnFieldsContainer?.contains(target)) {
      func()
    }
  })
}

export default closeFieldsTooltipOnOuterClick
