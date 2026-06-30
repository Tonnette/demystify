const left = document.querySelector('.hidebtn')
const test = document.querySelector('.testbtn')
const right = document.querySelector('.menubtn')
// const container = document.querySelector('.container')

function setMenuLabel(label) {
  if (right) {
    right.textContent = label
  }
}

function setOpacity(el, value) {
  if (el) {
    el.style.opacity = String(value)
  }
}

function isMenuOpen() {
  return filmContainer && filmContainer.classList.contains('hover-left')
}

const filmContainer = document.querySelector('.filmContainer')
var video = document.querySelector('.myVideo')
var btn = document.getElementById("myBtn");
var menu = document.querySelector('.menu-items');
var textFade =  document.querySelector('.name');
var textFade2 =  document.querySelector('.name2');
var textFade3 =  document.querySelector('.name3');
var logoFade =  document.querySelector('.logo');
var contactFade =  document.querySelector('.fadeContact');
var fadeTextfilm = document.querySelector('.fadeText-film');
var animateText = document.querySelector('.animationClass');
var contentAbout = document.querySelector('.homeFade');
var content = document.querySelector('.content');

var summ = document.querySelector('.summ')
var mysumm = document.querySelector('.mysumm')
var oa = document.querySelector('.oa')
var wolf = document.querySelector('.name4')
const toggles = document.querySelectorAll('.faq-toggle')
const faqs = document.querySelectorAll('.faq-title')

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})

faqs.forEach(faq => {
  faq.addEventListener('click', () => {
      faq.parentNode.classList.toggle('active')
  })
})

// Pause and play the video, and change the button text
function pauseFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}

summ.addEventListener('mouseenter', () => summ.style.color = '#B30739')
summ.addEventListener('mouseleave', () => summ.style.color = 'white')
mysumm.addEventListener('mouseenter', () => mysumm.style.color = '#B30739')
mysumm.addEventListener('mouseleave', () => mysumm.style.color = 'white')
left.addEventListener('mouseenter', () => left.style.color = '#B30739')
left.addEventListener('mouseleave', () => left.style.color = 'white')




window.onload = function() {
  window.setTimeout(fadeup, 1000); //1 seconds
  window.setTimeout(fadeupContact, 1000); //1 seconds
}

function fadeupContact() {
  if (textFade3) {
    setOpacity(textFade3, 1);
  }
}


function fadeup() {
  if (textFade) setOpacity(textFade, 1);
  if (textFade2) setOpacity(textFade2, 1);
  if (animateText) setOpacity(animateText, 1);
  if (textFade3) setOpacity(textFade3, 1);
  if (oa) setOpacity(oa, 1);
  if (fadeTextfilm) setOpacity(fadeTextfilm, 1);
}


function menuFunction() {
  if (!filmContainer) return

  if (isMenuOpen()) {
    hideFunction()
    return
  }

  if (menu) {
    setOpacity(menu, 1)
  }

  filmContainer.classList.add('hover-left')
  filmContainer.classList.remove('hover-right')

  setOpacity(fadeTextfilm, 1)
  setOpacity(contentAbout, 1)
  setOpacity(animateText, 1)
  setOpacity(contactFade, 1)
  setOpacity(content, 1)
  setOpacity(logoFade, 1)

  setMenuLabel('Hide')

 
  


  



}

function hideFunction() {
  if (!filmContainer) return

  filmContainer.classList.add('hover-right')
  filmContainer.classList.remove('hover-left')

  if (menu) {
    setOpacity(menu, 0)
  }

  setOpacity(animateText, 1)
  setOpacity(contentAbout, 1)
  setOpacity(fadeTextfilm, 1)
  setOpacity(contactFade, 1)
  setOpacity(logoFade, 1)
  setOpacity(content, 1)

  setMenuLabel('Menu')
 

  
  
  

 
 
}

        





