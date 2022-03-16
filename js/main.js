const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    spaceBetween: 0,
    loop: true,
    speed:5000,
    autoplay: {
        delay: 3000,
      },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  // mobile menu
  let menuMobileIcon=document.querySelector(".fa-bars");
  let menu=document.querySelector(".menu");

  menuMobileIcon.addEventListener("click",() =>{
    menu.classList.toggle("open");
  });