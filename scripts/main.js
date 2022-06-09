$(function () {
  $('.header__icon-link').on('click', function () {
    $('.header__icon-item').removeClass('header__icon-item--active')
    $(this).closest('.header__icon-item').addClass('header__icon-item--active');
  });
  $('.main__sidebar-cat-item').on('click', function privet() {
    $('.main__sidebar-cat-item').removeClass('main-sidebar--active');
    $(this).addClass('main-sidebar--active');
  });
  $('.main__body-pub-linkEvent').on('click', function (e) {
    e.preventDefault();
    $('.main__body-pub-popup').toggleClass('main__body-pub-popup-active')
  });
  $('.main__sidebar-after-item-itemi').on('click', function (e) {
    e.preventDefault();
    $('.main__sidebar-after-item-itemi').removeClass('main__sidebar-after-item-itemi-active')
    $(this).addClass('main__sidebar-after-item-itemi-active')
  });
  $('.burger').on('click', function (e) {
    e.preventDefault();
    $('.header').toggleClass('header--open')
  })
});
