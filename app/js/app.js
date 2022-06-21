// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

document.addEventListener('DOMContentLoaded', () => {

	// Custom JS

    /*Modal*/

var modal = document.getElementById('mymodal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("modal__close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}
span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if ( event.target == modal) {
        modal.style.display = "none";
    }
}

/*tabs*/
function showTab(event) {
    document.querySelector('.show-tab').classList.remove('show-tab');
    document.querySelector('.active-tab').classList.remove('active-tab');
    let button = event.target;
    button.classList.add('active-tab');
    let buttonClass = event.target.classList[1];
    let content = document.querySelectorAll('.' + buttonClass)[1];
    content.classList.add('show-tab');
    }
    function defaultHide() {
        let a = document.querySelectorAll('.content');
        a.forEach(
            function addClass(info) {
                info.classList.add('js-default-hide');
            }
        )
    }
    let tabButton = document.getElementsByClassName('tab');
    for (let i = 0; i < tabButton.length; i++) {
    tabButton[i].addEventListener('click', showTab);
    }
    window.addEventListener('load', defaultHide);


    /*switch*/
    document.querySelector('.switch').addEventListener('change', (event) => {
        if (event.target.nodeName === 'INPUT') {
            document.documentElement.classList.toggle('dark');
        }

    });

     //mobile menu
  const headerBurger = document.querySelector(".header__burger");
  const headerNav = document.querySelector(".header__nav");


  headerBurger.addEventListener("click", function (event) {
    headerBurger.classList.toggle("burger_closed");
    headerNav.classList.toggle("header__nav_opened");

  });

})


