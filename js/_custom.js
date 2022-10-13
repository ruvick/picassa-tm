jQuery(document).ready(function ($) {
  $('.hamburger').click(function () {
    $('.mob-menu').css('bottom', '0');
  });

  $('.close-menu').click(function () {
    $('.mob-menu').css('bottom', '140%');
  });

  $('.mobile-menu a').click(function () {
    $('.mob-menu').css('bottom', '140%');
  });
  jQuery(".dialog-cb-button__decstop a").click(function(e){
	e.preventDefault();	
    headerwin = jQuery(this).data("headerwin"); 
    btn = jQuery(this).data('btn');
    
    jQuery('#phone-modal').arcticmodal();
  
  });
  
  jQuery(".zwinopen").click(function(e){
	e.preventDefault();	
    headerwin = jQuery(this).data("headerwin"); 
    btn = jQuery(this).data('btn');
    
    jQuery('#phone-modal').arcticmodal();
  
  });
  
  var inputmask_96e76a5f = {
    "mask": "+7(999)999-99-99"
  };
  jQuery("input[type=tel]").inputmask(inputmask_96e76a5f);

  jQuery('form').submit(function (e) {
    e.preventDefault();
    var form_data = $(this).serialize();
    var name = jQuery(this).find("input[name=name]").val();
    var tel = jQuery(this).find("input[name=tel]").val();
    var mail = jQuery(this).find("input[name=email]").val();
	

    if ((tel == "") || (tel.indexOf("_") > 0)) {
      jQuery(this).find("input[name=tel]").css("background-color", "red");
      return;
    }
    $.ajax({
      type: "POST", //Метод отправки
      url: "./sender/send.php", //путь до php фаила отправителя
      data: form_data,
      success: function () {
        ym(65991169,'reachGoal','form');
		jQuery('#messgeModal #lineMsg').html("Ваша заявка принята. Мы свяжемся с Вами в ближайшее время.");
        jQuery('#messgeModal').arcticmodal();
		
	  }
    });
  });
  
  
  var $page = $('html, body');
  $('header a[href*="#"], footer  a[href*="#"], .mobile-menu a[href*="#"]').click(function () {
    $page.animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
  });
});
