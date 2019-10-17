document.addEventListener("DOMContentLoaded", function () {
  var milkAdd = document.getElementById('milk-add')
  var actions = document.getElementById('purchase-actions')
  var purchaseList = document.getElementById('purchase-list')

  milkAdd.onclick = function () {
    actions.style.display = 'none'
    purchaseList.style.display = 'block'
  }

  var headerMenu = document.querySelector('.header-menu')
  document.querySelector('.header-menu__switcher')
    .addEventListener('click', function () {
      headerMenu.classList.toggle('header-menu_active')
    })
}, !1);
