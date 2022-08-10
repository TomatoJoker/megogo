"use strict";

$('.js__pagescroll').fullpage({
  //options here
  autoScrolling: true,
  sectionSelector: '.js__section',
  responsiveWidth: false,
  scrollBar: true,
  normalScrollElements: '.normal-scrolling',
  fitToSection: false,
  verticalCentered: false // fixedElements: '.header',

});
$('.js__btn').on('click', function () {
  $.fn.fullpage.moveTo(2);
});