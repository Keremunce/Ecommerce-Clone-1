//------ SLIDE 
  var slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
    
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
    switch(n){
      case 1:
        $(".background").css("background","linear-gradient(0deg, #FDB417, #FDE959, #FEF5BB)");
        $(".sliderbtn").css("color","#484848");

        break;
      case 2:
        $(".background").css("background","linear-gradient(30deg, #8BA8F0, #E15CF0, #6307EC)");
        $(".sliderbtn").css("color","white");
        $(".sliderbtn").focus(function(){
          $(this).css("color","#484848")
        });
        $(".sliderbtn").focusout(function(){
          $(this).css("color","#484848")
        });

        break;

      case 3:
        $(".background").css("background","linear-gradient(30deg, #FE9018, #FE6507, #E54401)");
        $(".sliderbtn").css("color","white");
        break;

      case 4:
        $(".background").css("background","linear-gradient(30deg, #590ce7, #9013d7)");
        $(".sliderbtn").css("color","white");
        break;

      case 5:
        $(".background").css("background","linear-gradient(30deg, #bd3232, #871809)");
        $(".sliderbtn").css("color","white");
        $(".sliderbtn").focus(function(){
          $(this).css("color","#484848")
        });
        break;

      case 6:
        $(".background").css("background","linear-gradient(30deg, #B0ACFD, #DBD3DC, #EBE0BC)");
        $(".sliderbtn").css("color","white");
        break;

      case 7:
        $(".background").css("background","linear-gradient(0deg, #651ACE, #434CE8, #255ED8)");
        $(".sliderbtn").css("color","white");
        break;

      case 8:
        $(".background").css("background","linear-gradient(0deg, #050C1A, #0A0C19, #090A13)");
        $(".sliderbtn").css("color","white");
        break;

      case 9:
        $(".background").css("background","linear-gradient(30deg, #B5C9F9, #A9AFF8, #918DE1)");
        $(".sliderbtn").css("color","white");
        break;

      case 10:
        $(".background").css("background","linear-gradient(30deg, #CBFDCF, #BFE8E8, #A9C8EB)");
        $(".sliderbtn").css("color","white");
        break;

      case 11:
        $(".background").css("background","#00d7ff");
        $(".sliderbtn").css("color","white");
        $(".sliderbtn").focus(function(){
          $(this).css("color","#484848")
        });
        break;

      case 12:
        $(".background").css("background","linear-gradient(0deg, #90E0EC, #96E1EE, #96E1EE)");
        $(".sliderbtn").css("color","#484848");
        break;

      case 13:
        $(".background").css("background","linear-gradient(30deg, #E256DE, #EF9DBD, #FBD6A0)");
        $(".sliderbtn").css("color","white");
        break;

      case 14:
        $(".background").css("background","linear-gradient(0deg, #48DFCE, #48DFCE)");
        $(".sliderbtn").css("color","#484848");
        break;
    }
  }

  function showSlides(n) {
    switch(n){
        case 1:
          $(".background").css("background","linear-gradient(0deg, #FDB417, #FDE959, #FEF5BB)");
          $(".sliderbtn").css("color","#484848");

          break;
        case 2:
          $(".background").css("background","linear-gradient(30deg, #8BA8F0, #E15CF0, #6307EC)");
          $(".sliderbtn").css("color","white");
          $(".sliderbtn").focus(function(){
            $(this).css("color","#484848")
          });
          $(".sliderbtn").focusout(function(){
            $(this).css("color","#484848")
          });

          break;

        case 3:
          $(".background").css("background","linear-gradient(30deg, #FE9018, #FE6507, #E54401)");
          $(".sliderbtn").css("color","white");
          break;

        case 4:
          $(".background").css("background","linear-gradient(30deg, #590ce7, #9013d7)");
          $(".sliderbtn").css("color","white");
          break;

        case 5:
          $(".background").css("background","linear-gradient(30deg, #bd3232, #871809)");
          $(".sliderbtn").css("color","white");
          $(".sliderbtn").focus(function(){
            $(this).css("color","#484848")
          });
          break;

        case 6:
          $(".background").css("background","linear-gradient(30deg, #B0ACFD, #DBD3DC, #EBE0BC)");
          $(".sliderbtn").css("color","white");
          break;

        case 7:
          $(".background").css("background","linear-gradient(0deg, #651ACE, #434CE8, #255ED8)");
          $(".sliderbtn").css("color","white");
          break;

        case 8:
          $(".background").css("background","linear-gradient(0deg, #050C1A, #0A0C19, #090A13)");
          $(".sliderbtn").css("color","white");
          break;

        case 9:
          $(".background").css("background","linear-gradient(30deg, #B5C9F9, #A9AFF8, #918DE1)");
          $(".sliderbtn").css("color","white");
          break;

        case 10:
          $(".background").css("background","linear-gradient(30deg, #CBFDCF, #BFE8E8, #A9C8EB)");
          $(".sliderbtn").css("color","white");
          break;

        case 11:
          $(".background").css("background","#00d7ff");
          $(".sliderbtn").css("color","white");
          $(".sliderbtn").focus(function(){
            $(this).css("color","#484848")
          });
          break;

        case 12:
          $(".background").css("background","linear-gradient(0deg, #90E0EC, #96E1EE, #96E1EE)");
          $(".sliderbtn").css("color","#484848");
          break;

        case 13:
          $(".background").css("background","linear-gradient(30deg, #E256DE, #EF9DBD, #FBD6A0)");
          $(".sliderbtn").css("color","white");
          break;

        case 14:
          $(".background").css("background","linear-gradient(0deg, #48DFCE, #48DFCE)");
          $(".sliderbtn").css("color","#484848");
          break;
      }  var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      if (n > slides.length) 
        {slideIndex = 1}

      if (n < 1) 
        {slideIndex = slides.length}


      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";  
      }
      // for (i = 0; i < dots.length; i++) {
      //     dots[i].className = dots[i].className.replace("active", "");
      // }
      slides[slideIndex-1].style.display = "block"; 

  }


  // SLIDER RESPONSIVE--------------------------
    var container = document.getElementById("sliderId");
    function myFunction(x) {
      if (x.matches) { // If media query matches
          var element = document.getElementById("sliderId");
          element.classList.remove("container");
          element.classList.add("w-100");
        }else{
          var element = document.getElementById("sliderId");
          element.classList.add("container");
          element.classList.remove("w-100");
        }
    }

    var x = window.matchMedia("(max-width: 990px)")
    myFunction(x) 
    x.addListener(myFunction) 
  // SLIDER RESPONSIVE--------------------------

//END SLIDE 

// SEARCHBAR---------------------
  $(".searchTerm").focus(function(){
    $(".searchButton").css("background","#FF6000");
    $(".searchButton").css("border","1px solid #FF6000");

  });
  $(".searchTerm").focusout(function(){
    $(".searchButton").css("background","#919191");
    $(".searchButton").css("border","1px solid #919191");

  });
// ENDSEARCHBAR-------------------


// STICKYNAVBAR------------------
$(".nav-btn").click(function() {
  $(".menuli").toggle(function() {
      $(this).css("transition", "all 0.4s");
  });
})
