



function eSlider(){
    
  const sidebar = document.getElementById("js-eheader")

  sidebar.style.display = "flex"
}

function hiddenSidebar(){

const hidden = document.getElementById("js-eheader")

hidden.style.display = "none"
}

function turnOnOff(){

}

$( ".e-daynight" ).on("click", function() {
  if( $( "body" ).hasClass( "setOnOff" )) {
      $( "body" ).removeClass( "setOnOff" );
      $( ".e-daynight" ).text("Off" );
  } else {
      $( "body" ).addClass( "setOnOff" );
      $( ".e-daynight" ).text( "ON" );
  }
});

const d = new Date()

let year = d.getFullYear()

document.getElementById("js-edate").innerHTML = year

