var tableVal= [];

$('#content:eq(0) div').each (function () {
   tableVal[this.id] = $(this).text();
});

$(document).ready(function(){
var item1 = $( "#box" )[ 0 ];
$( "#content" ).find( item1 ).css( "background-color", "blue" );

})

$(document).on("click touchend", ".post1 , .post2 , .post3 , .post 4, .post5", function () {
     //do stuff
var item1 = $( "#box" )[ 0 ];
$( "#content" ).find( item1 ).css( "background-color", "red" );
$(this).find('#box-content').toggle();

if (  $(this).find('#box-content').css('opacity') == '0' )
     $(this).find('#box-content').css('opacity','1');
  else
     $(this).find('#box-content').css('opacity','0');
});
