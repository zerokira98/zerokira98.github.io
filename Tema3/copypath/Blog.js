var link = "http://www.facebook.com/messavb";
var fbook = "<li><a href="+link+">Facebook</a></li>";
var parralaks = "<div class='parallax-container'><div class='parallax'><img src='https://zerokira98.github.io/Res/vlcsnap-2017-05-29-17h53m02s337.png'></div></div>"

$("body").prepend(parralaks);
$("#templatemo_background_section_top").clone().appendTo(".parallax-container");
var options = [
      {selector: '#templatemo_footer', offset: 10, callback: function(el) {
        Materialize.toast("End of the page...", 1500 );
      } }
    ];
    Materialize.scrollFire(options);
    $(document).ready(function(){
      $('.parallax').parallax();
      $(".templatemo_right_section_box").addClass('card-panel');
    });
$("#templatemo_menu_section ul").append(fbook);
$("#templatemo_menu_section").addClass('card-panel');
$("#templatemo_menu_section ul li a").addClass('white-text waves-effect waves-light btn-flat');
$(".templatemo_left_section_box_top").addClass('card-panel red darken-1 white-text waves-effect waves-light');
$(".templatemo_left_section_box_top a").addClass('white-text text-darken-2');
$(".templatemo_left_section_box_body").addClass('card-panel');
$(".templatemo_middle_section_box").addClass('card-panel');