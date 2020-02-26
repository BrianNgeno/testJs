$(document).ready(function() {
  // functions to add each item to cart
  $("#item1").click(function() {
    $("#data").prepend("<td>Rose Watch</td><td>Ksh 400</td> ");
    $(".inc1").toggle();
    alert("Rose watch added to cart");
  });
  $("#item2").click(function() {
    $("#data2").prepend("<td>Golden Watch</td><td>Ksh 800</td>");
    $(".inc2").toggle();
    alert("Golden watch added to cart");
  });
  $("#item3").click(function() {
    $("#data3").prepend("<td>Golden Ring</td><td>Ksh 700</td>");
    $(".inc3").toggle();
    alert("Golden Ring added to cart");
  });
  $("#item4").click(function() {
    $("#data4").prepend("<td>Rose Watch(m)</td><td>Ksh 500</td>");
    $(".inc4").toggle();
    alert("Rose watch(m) added to cart");
  });

  // functions to remove items from cart
  $('#del1').click(function() {
    $('tr#data').remove();
  });
  $('#del2').click(function() {
    $('tr#data2').remove();
  });
  $('#del3').click(function() {
    $('tr#data3').remove();
  });
  $('#del4').click(function() {
    $('tr#data4').remove();
  });

  // increment functions
  $('.add1').click(function() {
    var num = parseInt($('.count1').text());
    $('.count1').text(num+1);
  });
   $('.sub1').click(function() {
    var num = parseInt($('.count1').text());
    $('.count1').text(num-1);
  });
  $('.add2').click(function() {
    var num = parseInt($('.count2').text());
    $('.count2').text(num+1);
  });
   $('.sub2').click(function() {
    var num = parseInt($('.count2').text());
    $('.count2').text(num-1);
  });
  $('.add3').click(function() {
    var num = parseInt($('.count3').text());
    $('.count3').text(num+1);
  });
   $('.sub3').click(function() {
    var num = parseInt($('.count3').text());
    $('.count3').text(num-1);
  });
  $('.add4').click(function() {
    var num = parseInt($('.count4').text());
    $('.count4').text(num+1);
  });
   $('.sub4').click(function() {
    var num = parseInt($('.count4').text());
    $('.count4').text(num-1);
  });
});
