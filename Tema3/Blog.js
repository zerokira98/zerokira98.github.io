
//------------------code

var parralaks = "<div class='parallax-container'><div class='parallax'><img src="+BackgroundTop+"></div></div>";
$("body").prepend(parralaks);
$("#templatemo_background_section_top").clone().appendTo(".parallax-container").attr('id','header');

    $(document).ready(function(){
$('head').append('<meta name="viewport" content="width=device-width,initial-scale=1.0">');
      $('.parallax').parallax();
      $(".templatemo_right_section_box").addClass('card-panel');
      var gitwidth = $(".left_section").width();
      $(".gist").width(gitwidth);
      $('.modal').modal();
    });

//----Add Menu
var menu1 = "<li><a href="+link1+">"+NamaMenu1+"</a></li>";
var menu2 = "<li><a href="+link2+">"+NamaMenu2+"</a></li>";
$("#templatemo_menu_section ul").append(menu1).append(menu2).append("<li><a class='white-text modal-trigger' href='#modal1'><i class='material-icons'>menu</i></a></li>");
//----End Add Menu

//-----etc
$("#templatemo_menu_section").addClass('card-panel '+panelcolor);
$("#templatemo_menu_section ul li a").addClass('white-text waves-effect waves-light btn-flat visimenu');
$(".modal-trigger").removeClass('visimenu');
$(".templatemo_left_section_box_top").addClass('card-panel white-text waves-effect waves-light '+panelcolor);
$(".templatemo_left_section_box_top a").addClass('white-text text-darken-2');
$(".templatemo_left_section_box_body").addClass('card-panel');
$(".templatemo_middle_section_box").addClass('card-panel');
$("#templatemo_content_area").addClass('row card-panel');
$("#templatemo_left_section").addClass('col s12 m12 l9').attr('id','left_section');
$("#templatemo_right_section").addClass('col s12 m12 l3').attr('id','right_section');
$("#header .templatemo_container").attr('class', 'menu_container');

//---- Add Modal
var modalmenu1 = "<li><a href='index.html'>Home</a></li>";
var modalmenu2 = "<li><a href='profil.html'>Profil</a></li>";
var modalmenu3 = "<li><a href='http://web.unair.ac.id/login.html' >Login</a></li>";
var modalpanel = "<div id='modal1' class='modal bottom-sheet'><div class='modal-content'><h4>Menu</h4><ul>"+modalmenu1+modalmenu2+modalmenu3+menu1+menu2+"</ul></div></div>";
$('body').append(modalpanel);
$('.modal-content ul li a').addClass('btn-flat waves-effect waves-light black-text');

//---- delete kolom komentar
$('form[name*="form3"]').parent().remove();
