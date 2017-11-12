
//------------------code

var parralaks = "<div class='parallax-container'><div class='parallax'><img src="+BackgroundTop+"></div></div>"
$("body").prepend(parralaks);
$("#templatemo_background_section_top").clone().appendTo(".parallax-container").attr('id','header');

    $(document).ready(function(){
      $('.parallax').parallax();
      $(".templatemo_right_section_box").addClass('card-panel');
      var gitwidth = $(".left_section").width();
      $(".gist").width(gitwidth);
    });
//----Add Menu
var menu1 = "<li><a href="+link1+">"+NamaMenu1+"</a></li>";
var menu2 = "<li><a href="+link2+">"+NamaMenu2+"</a></li>";
$("#templatemo_menu_section ul").append(menu1).append(menu2).append("<i class='material-icons'>menu</i>");
//----End Add Menu

$("#templatemo_menu_section").addClass('card-panel '+panelcolor);
$("#templatemo_menu_section ul li a").addClass('white-text waves-effect waves-light btn-flat ');
$(".templatemo_left_section_box_top").addClass('card-panel white-text waves-effect waves-light '+panelcolor);
$(".templatemo_left_section_box_top a").addClass('white-text text-darken-2');
$(".templatemo_left_section_box_body").addClass('card-panel');
$(".templatemo_middle_section_box").addClass('card-panel');
$("#templatemo_content_area").addClass('row card-panel');
$("#templatemo_left_section").addClass('col s12 m12 l9').attr('id','left_section');
$("#templatemo_right_section").addClass('col s12 m12 l3').attr('id','right_section');
$("#header .templatemo_container").attr('class', 'menu_container');
