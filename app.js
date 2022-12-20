const backg = document.querySelector('.backg')

window.addEventListener('scroll', (event) => {
  let y = (window.scrollY)/31.36
  console.log(y)
  if (y < 46) {
    backg.style.backgroundColor = 'white';
    backg.style.color = 'black';
  }
  if (y > 46) {
    backg.style.backgroundColor = 'black';
    backg.style.color = 'white';
  }
})




const navbar = document.querySelector('.navbar')


window.addEventListener('scroll', (event) => {
  let y = (window.scrollY)/31.36
  console.log(y);
  if (y < 46) {
    backg.style.backgroundColor = 'white';
    backg.style.color = 'black';
  }
  if (y > 46) {
    backg.style.backgroundColor = 'black';
    backg.style.color = 'white';
  }
  if(y<2.5){
    navbar.style.opacity = '100%'
    navbar.style.height = '100px'
  }
  if(y>2.5){
    navbar.style.opacity = '90%'
    navbar.style.height = '62px'
  }
})

