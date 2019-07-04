jQuery( document ).ready(function() {
    //mobi click
      jQuery('#mobi').click(function(){
        jQuery('.content_right').toggle();
      });

      //popup form
      jQuery('#ppform').click(function(){
        jQuery('#form').toggle();
      });
      jQuery('#close_form').click(function(){
        jQuery('#form').toggle();
      });

      //tabs content
    jQuery('#tabs li').click(function(){
        jQuery('.tab_sh').css('display', 'none');
        jQuery('.' + this.className + '_sh').show();
        //jQuery('.tab_1_sh').css('display', 'block');
    });
       //ngon ngu
       jQuery(document).ready(function(){
        jQuery('#ngon-ngu').click(function(){
          $("#div1").fadeIn();
          $("#div2").fadeIn("slow");
       
        });
    });
  });

  
  