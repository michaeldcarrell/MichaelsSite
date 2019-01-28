/* Individual Nav*/
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
/*function MichaelDdFunction() {
    document.getElementById("MichaelDropdown").classList.toggle("show");
}*/

function HannaDdFunction() {
    document.getElementById("HannaDropdown").classList.toggle("show");
}
function MichaelDdFunction() {
    document.getElementById("MichaelDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn-hanna')) {

    var dropdowns = document.getElementsByClassName("dropdown-content-hanna");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
  if (!event.target.matches('.dropbtn-michael')) {

    var dropdowns = document.getElementsByClassName("dropdown-content-michael");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
