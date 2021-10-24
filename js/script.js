/////////////////////////////////////////////////////////////////
//Make mobile navigation work


const btnNav = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

btnNav.addEventListener('click',function(){
    headerEl.classList.toggle('nav--open')
});
/////////////////////////////////////////////////////////////////
// //Smooth scrolling animation
// const allLinks = document.querySelectorAll('a:link');
// // console.log(allLinks);

// allLinks.forEach(function(link){
//     link.addEventListener('click',function(e){
//         e.preventDefault();
//         const href = link.getAttribute('href');
//         // console.log(href);




//         //Scroll back to top if href = #
//         if(href === "#")
//          window.scrollTo({
//             top:0,
//             behavior: "smooth",
//         });
//         //for everyother href
//         if(href !=="#" && href.startsWith('#'))console.log(href)
            
//     });
// });


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


/////////////////////////////////////////////////////////////////
// Working Form reomves the thank form that takes u to a different website
var form = document.getElementById("my-form");
    
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
      document.getElementById("sb").style.display="inline";
    // status.innerHTML = "Thanks for your submission!";
    form.reset()
  }).catch(error => {
   
    document.getElementById("sbfailed").style.display="inline";
    // status.innerHTML = "Oops! There was a problem submitting your form"
  });
}
form.addEventListener("submit", handleSubmit)

/////////////////////////////////////////////////////////////
//Stickey nav

const sectionStart = document.querySelector(".section-start")

const obs = new IntersectionObserver(function(entries) {
  const ent = entries[0];

  console.log(ent);

  //if ent is false do this
  if(!ent.isIntersecting){
    document.body.classList.add('sticky-nav');
  }
 //if true do this
  if(ent.isIntersecting){
    document.body.classList.remove('sticky-nav');
  }
},{
  //in the viewport
  root:null,
  threshold:0,
  rootMargin: '-70px'
});
//observes the start section
obs.observe(sectionStart);
