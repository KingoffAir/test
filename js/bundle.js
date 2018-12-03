(function($) {
  
  // фиксированая навигация

  $(document).ready(function() {
    $(window).scroll(function() {
      if($(this).scrollTop() > 50) {
        $(".header").addClass("header-fixed");
      } else {
        $(".header").removeClass("header-fixed");
      }
    });
  });
    
  //  активная навигация

  $(document).ready(function() {
    $(".nav-link").on("click", function() {
      $(this).addClass("active").siblings().removeClass("active");
    });
    $(".nav-link_mobile").on("click", function() {
      $(this).addClass("active-mobile").siblings().removeClass("active-mobile");
    });
  });
    
  // мобильная навигация
  $(document).ready(function() {
    $(".menu_btn").on("click", function() {
      $(".modal_nav").css("display", "block");
    });

    $(".nav-link_mobile").on("click", function() {
      $(".modal_nav").css("display", "none");
    });

    $(".modal_nav-close").on("click", function() {
      $(".modal_nav").css("display", "none");
    });
  });
    
  // заказать звонок
  $(document).ready(function() {
    $(".contact-call").on("click", function() {
      $(".modal_request").css("display", "block");
    });

    $(".want").on("click", function() {
      $(".modal_request").css("display", "block");
    });

    $(".modal_request-close").on("click", function() {
      $(".modal_request").css("display", "none");
    });
  });
    
  // плюс-минус
  $(document).ready(function() {
    var $quantityArrowMinus = $(".minus");
    var $quantityArrowPlus = $(".plus");
    var $quantityNum = $(".input-square");

    $quantityArrowMinus.click(quantityMinus);
    $quantityArrowPlus.click(quantityPlus);

    function quantityMinus() {
      if ($quantityNum.val() > 1) {
        $quantityNum.val((+$quantityNum.val() - 0.1).toFixed(1));
      }
    }

    function quantityPlus() {
      $quantityNum.val((+$quantityNum.val() + 0.1).toFixed(1));
    }
  });
    
  // доп товары
  $(document).ready(function() {
    $(document).ready(function() {
      $(".main_products-item--title").on("click", function() {
        $(this).parent().toggleClass("open")
      });
    });
  })
    
  // карусель отзывы
  $(document).ready(function() {
    var min_max = [-1100, 0];
    var cont = $(".main_reviews-carousel");

    $(".main_reviews-slider").slider({
      range: "min",
      min: min_max[0],
      max: min_max[1],
      value: -320,
      slide: function( event, ui ) {
        cont.css("left", ui.value+"px");
      }
    });        
  });
    
  // развернуть отзыв
  $(document).ready(function() {
    $(".main_reviews-grad_wrap").on("click", function() {
      $(".main_reviews-carousel_wrap").toggleClass("open_rev")
    });
  });

  // валидация
  $(document).ready(function() {
    $("input[type='tel']").mask("+7(999)999-99-99");

    

    var regTel = /^\+[7]\([0-6,9]\d{2}\)\d{3}-\d{2}-\d{2}$/;
    var regName = /^[A-Za-z_]+|[а-яА-ЯёЁ]+$/;

    

    $(".form_info").submit(function(event){
			event.preventDefault();

      var name = $(".form_info-name").val();
      var phone = $(".form_info-tel").val();

      var nameVal = regName.test(name);
      var phoneVal = regTel.test(phone);

			if(regName.test(name) != true) {
				$(".lab_info-name").removeClass("lab").addClass("err")
			} else {
				$(".lab_info-name").removeClass("err").addClass("lab")
			}

			if(regTel.test(phone) != true) {
				$(".lab_info-tel").removeClass("lab").addClass("err")
			} else {
				$(".lab_info-tel").removeClass("err").addClass("lab")
			}

      window.location.href = "success.html"

			if(nameVal == true && phoneVal == true) {
				$(".form_info").unbind('submit').submit(window.location.href);
			}

    });
    
    $(".form_modal").submit(function(event){
			event.preventDefault();

      var name = $(".form_modal-name").val();
      var phone = $(".form_modal-tel").val();

      var nameVal = regName.test(name);
      var phoneVal = regTel.test(phone);

			if(regName.test(name) != true) {
				$(".lab_modal-name").removeClass("lab").addClass("err")
			} else {
				$(".lab_modal-name").removeClass("err").addClass("lab")
			}

			if(regTel.test(phone) != true) {
				$(".lab_modal-tel").removeClass("lab").addClass("err")
			} else {
				$(".lab_modal-tel").removeClass("err").addClass("lab")
      }
      
      window.location.href = "success.html"

			if(nameVal == true && phoneVal == true) {
        $(".form_modal").unbind('submit').submit(window.location.href);
			}

		});
  })
})(jQuery);