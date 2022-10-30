$(document).ready(function(){
    gsap.registerPlugin(ScrollTrigger);
    // sliding images carousel for section tours - swiperjs initialise
      var swiper = new Swiper(".tours .mySwiper", {
          effect: "coverflow",
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: "auto",
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
            loop: true,
          },
          autoplay: {
              delay: 2500,
              disableOnInteraction: false,
          },
          pagination: {
            el: ".swiper-pagination",
          },
        });
  
    // sliding images carousel for section packages - swiperjs initialise    
        var swiper = new Swiper(".packages .mySwiper", {
          spaceBetween: 30,
          centeredSlides: true,
          loop: true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });
  
  
        //Button more - show more hidden text
        $('.btnMore').click(function(e){
          e.preventDefault();
          $('.tohide').slideToggle();
        });
  
  
        $('.reviews .imgDiv').hover(function(){
          $("#framm")[0].src += "?autoplay=1&mute=1";
        }, function(){
          $("#framm")[0].src = "https://www.youtube.com/embed/XuEv8-dKm08"
        });
  
  
    // GSAP scrolling animation
    // tours Section - title 1 animation
      gsap.fromTo(".tours-h1",
      { x: -20,
        opacity:0    
      },
      {
        x:0,
        opacity: 1,
        duration:1,
        scrollTrigger:{
          trigger:".tours",
          start:"top 80%",
          end:"top 30%",
          scrub:2,
          toggleActions: "play none none none"
        }
      })
  
      // tours Section - title 2 animation
      gsap.fromTo(".tours-h2",
      { x: -20,
        opacity:0    
      },
      {
        x:0,
        opacity: 1,
        duration:1,
        scrollTrigger:{
          trigger:".tours",
          start:"top 65%",
          end:"top 30%",
          scrub:2,
          toggleActions: "play none none none"
        }
      })
  
      // tours Section - Swiper/Carousel animation
      gsap.fromTo(".tours .mySwiper",
      { 
        opacity:0    
      },
      {
        opacity: 1,
        duration:1,
        scrollTrigger:{
          trigger:".tours-h2",
          start:"top 80%",
          end:"top 30%",
          scrub:2,
          toggleActions: "play none none none",
        }
      })
  
      // reviews Section - Image animation
      gsap.fromTo(".reviews .imgDiv",
      { 
        opacity:0    
      },
      {
        opacity: 1,
        duration:1,
        scrollTrigger:{
          trigger:".reviews",
          start:"top 80%",
          end:"top 30%",
          scrub:2,
          toggleActions: "play none none none",
        }
      })
  
      // reviews Section - Description animation
      gsap.fromTo(".reviews .descDiv",
      { x: -20,
        opacity:0    
      },
      {
        x:0,
        opacity: 1,
        duration:1,
        scrollTrigger:{
          trigger:".reviews",
          start:"top 65%",
          end:"top 30%",
          scrub:2,
          toggleActions: "play none none none",
        }
      })
  
      // packages Section - image animation
      gsap.fromTo(".packages .imgDiv",
      { 
        opacity:0    
      },
      {
        opacity: 1,
        duration:1,
        scrollTrigger:{
          trigger:".packages",
          start:"top 80%",
          end:"top 30%",
          scrub:2,
          toggleActions: "play none none none",
        }
      })
  
      // packages Section - Description animation
      gsap.fromTo(".packages .descDiv",
      { x: -20,
        opacity:0    
      },
      {
        x:0,
        opacity: 1,
        duration:1,
        scrollTrigger:{
          trigger:".packages",
          start:"top 65%",
          end:"top 30%",
          scrub:2,
          toggleActions: "play none none none",
        }
      })
  
      // booking Section animation
      gsap.fromTo(".booking",
      { x:"100%",
        opacity:0    
      },
      {
        x:0,
        opacity: 1,
        duration:2,
        scrollTrigger:{
          trigger:".booking",
          start:"top 80%",
          end:"top 30%",
          scrub:2,
          toggleActions: "play none none none",
        }
      })
  
  });