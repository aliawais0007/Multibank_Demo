// $('.input-phone').intlInputPhone();

$(document).ready(function() {
  


  var firstDropdown = $(".dropdown-main-container1");
  var secondDropdown = $(".dropdown-main-container2");
  var thirdDropdown = $(".dropdown-main-container3");
  var fourthDropdown = $(".dropdown-main-container4");
  var fifthDropdown = $(".dropdown-main-container5");
  var dropdownArray = [
    firstDropdown,
    secondDropdown,
    thirdDropdown,
    fourthDropdown,
    fourthDropdown,
    fifthDropdown
  ];
  $(".dropdown-trigger1").click(function(e) {
    // Kill click event:
    e.stopPropagation();
    dropdownArray.map((item, index) => {
      if (index !== 0) {
        item.css("display", "none");
      }
    });
    // Toggle dropdown if not already visible:
    if (!$(".dropdown-main-container1").is(":visible")) {
      $(".dropdown-main-container1").css("display", "flex");
    } else {
      $(".dropdown-main-container1").css("display", "none");
    }
  });

  $(".dropdown-trigger2").click(function(e) {
    // Kill click event:
    e.stopPropagation();
    dropdownArray.map((item, index) => {
      if (index !== 1) {
        item.css("display", "none");
      }
    });
    // Toggle dropdown if not already visible:
    if (!$(".dropdown-main-container2").is(":visible")) {
      $(".dropdown-main-container2").css("display", "flex");
    } else {
      $(".dropdown-main-container2").css("display", "none");
    }
  });

  $(".dropdown-trigger3").click(function(e) {
    // Kill click event:
    e.stopPropagation();
    dropdownArray.map((item, index) => {
      if (index !== 2) {
        item.css("display", "none");
      }
    });
    // Toggle dropdown if not already visible:
    if (!$(".dropdown-main-container3").is(":visible")) {
      $(".dropdown-main-container3").css("display", "flex");
    } else {
      $(".dropdown-main-container3").css("display", "none");
    }
  });

  $(".dropdown-trigger4").click(function(e) {
    // Kill click event:
    e.stopPropagation();
    dropdownArray.map((item, index) => {
      if (index !== 3) {
        item.css("display", "none");
      }
    });
    // Toggle dropdown if not already visible:
    if (!$(".dropdown-main-container4").is(":visible")) {
      $(".dropdown-main-container4").css("display", "flex");
    } else {
      $(".dropdown-main-container4").css("display", "none");
    }
  });

  $(".dropdown-trigger5").click(function(e) {
    // Kill click event:
    e.stopPropagation();
    dropdownArray.map((item, index) => {
      if (index !== 4) {
        item.css("display", "none");
      }
    });
    // Toggle dropdown if not already visible:
    if (!$(".dropdown-main-container5").is(":visible")) {
      $(".dropdown-main-container5").css("display", "flex");
    } else {
      $(".dropdown-main-container5").css("display", "none");
    }
  });
});
