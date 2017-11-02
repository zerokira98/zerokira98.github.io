var link = "http://www.facebook.com/messavb";
var fbook = "<li><a href="+link+">Facebook</a></li>";

var options = [
      {selector: '#templatemo_footer', offset: 50, callback: function(el) {
        Materialize.toast("End of the page...", 1500 );
      } }
    ];
    Materialize.scrollFire(options);
$("#templatemo_menu_section ul").append(fbook);
$("#templatemo_menu_section ul").attr('class','right').attr('id','nav-mobile');
$("#templatemo_menu_section").addClass('card-panel red darken-2').attr('id','nav-wrapper');
//$("#templatemo_menu_section ul li a").addClass('white-text waves-effect waves-light btn-flat red');
$(".templatemo_right_section_box").addClass('card-panel');
$(".templatemo_left_section_box_top").addClass('card-panel red darken-1 white-text');
$(".templatemo_left_section_box_top a").addClass('white-text text-darken-2');
$(".templatemo_left_section_box_body").addClass('card-panel');
$(".templatemo_middle_section_box").addClass('card-panel');
