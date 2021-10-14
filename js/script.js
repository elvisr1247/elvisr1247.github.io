console.log("HELLO WORLD")
/////////////////////////////////////////////////////////////////
//Make mobile navigation work


const btnNav = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

btnNav.addEventListener('click',function(){
    headerEl.classList.toggle('nav--open')
});
/////////////////////////////////////////////////////////////////
// Fixing flexbox gap property missing is some Safari version

function checkFlexGap(){
    var flex = document.createElement("div");
    flex.style.display = "flex";
    flex.style.flexDirection = "column";
    flex.style.rowGap = "1px";

    flex.appendChild(document.createElement("div"));
    flex.appendChild(document.createElement("div"));

    document.body.appendChild(flex);
    var isSupported = flex.scrollHeight ==1;
    flex.parentNode.removeChild(flex);
    console.log(isSupported);

    if(!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();