//------------------code

var parralaks = "<div class='parallax-container'><div class='parallax'><img src="+BackgroundTop+"></div></div>"
$("body").prepend(parralaks);
$("#templatemo_background_section_top").clone().appendTo(".parallax-container").attr('id','header');

    $(document).ready(function(){
      $('.parallax').parallax();
      $(".templatemo_right_section_box").addClass('card-panel');
    });
//----Add Menu
var menu1 = "<li><a href="+link1+">"+NamaMenu1+"</a></li>";
$("#templatemo_menu_section ul").append(menu1);
var menu2 = "<li><a href="+link2+">"+NamaMenu2+"</a></li>";
$("#templatemo_menu_section ul").append(menu2);
//----End Add Menu
$("#templatemo_menu_section").addClass('card-panel');
$("#templatemo_menu_section ul li a").addClass('white-text waves-effect waves-light btn-flat');
$(".templatemo_left_section_box_top").addClass('card-panel red white-text waves-effect waves-light');
$(".templatemo_left_section_box_top a").addClass('white-text text-darken-2');
$(".templatemo_left_section_box_body").addClass('card-panel');
$(".templatemo_middle_section_box").addClass('card-panel');
$("#templatemo_content_area").addClass('row card-panel');
$("#templatemo_left_section").addClass('col s12 m9 l9').attr('id','left_section');
$("#templatemo_right_section").addClass('col s12 m3 l3').attr('id','right_section');
