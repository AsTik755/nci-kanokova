// Переменные
  const navigations = document.getElementsByClassName('navig');
  const navLine = document.getElementsByClassName('navLine');
  const sections = document.querySelectorAll('section');
  const navButton = document.getElementById('navButton');
  const header = document.getElementById('header');
  const menu = document.getElementById('menu');
  let clickCount = 0;
// Первоначальные настройки
for (var i = 0 ; i < navigations.length; i++) {
  sections[i].style.display='none';
  if(navigations[i].classList.contains("active")){
    sections[i].style.display='block';
  }
};
// Переключение меню
    
  function navChange (){
    if(!this.classList.contains("active")){
      for (var i = 0 ; i < navigations.length; i++) {
        navigations[i].classList.remove("active");
        this.classList.add("active");
        sections[i].style.display='none';
        if(navigations[i].classList.contains("active")){
          sections[i].style.display='block';
        }
        
      }
      const widthBody = document.querySelector('body').offsetWidth;
      if (widthBody < 500) {
      defaultMenu()
      };  
    }
  };
  for (var i = 0 ; i < navigations.length; i++) {
    navigations[i].addEventListener('click' , navChange);
  };
// 

function defaultMenu() {
  header.style.height = '10vh'
  header.style.width = '100%'
  header.style.flexDirection = 'row'
  header.style.justifyContent = 'space-between'
  menu.style.display = 'none'
  menu.style.flexDirection = 'row'
  menu.style.textAlign = 'left'
  menu.style.alignItems = 'start'
  for (let i = 0; i < navigations.length; i++) {
    navigations[i].style.marginTop = '0'
    navigations[i].style.marginRight = '5vw'
  };
  navButton.style.position = 'relative'
  navButton.style.height = '60%'
  navButton.style.margin = '0'
  for (let i = 0; i < navLine.length; i++){
    navLine[i].style.display = 'block'
    navLine[i].style.position = 'relative'
    navLine[i].style.borderRadius = '1px'
    navLine[i].style.transform = 'rotateZ(0deg)'
  }
  clickCount--;
};

function mobileMenu() {
  header.style.height = '100%'
  header.style.width = '100%'
  header.style.flexDirection = 'column'
  header.style.justifyContent = 'space-around'
  menu.style.display = 'flex'
  menu.style.flexDirection = 'column'
  menu.style.textAlign = 'center'
  menu.style.alignItems = 'center'
  for (let i = 0; i < navigations.length; i++) {
    navigations[i].style.marginTop = '5vh'
    navigations[i].style.marginRight = '0'
  };
  navButton.style.position = 'absolute'
  navButton.style.right = '0'
  navButton.style.top = '0'
  navButton.style.height = '5%'
  navButton.style.margin = '20px'
  for (let i = 0; i < 3; i++){
    if(i == 0){
      navLine[i].style.position = 'absolute'
      navLine[i].style.borderRadius = '3px'
      navLine[i].style.transform = 'rotateZ(45deg)'
    } else if(i == 1){
      navLine[i].style.position = 'absolute'
      navLine[i].style.borderRadius = '3px'
      navLine[i].style.transform = 'rotateZ(-45deg)'
    } else if(i == 2){
      navLine[i].style.display = 'none'
    }
  }
  clickCount++;
};

  navButton.addEventListener('click', function(){
    if(clickCount==0){
      mobileMenu();
    } else if(clickCount==1){
      defaultMenu();
    }
  });












 
