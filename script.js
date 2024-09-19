gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();



function timelineone(){
  var t1=gsap.timeline({
    scrollTrigger:{
      trigger:"#home",
      scroller:"#main",
      start:"top",
      end:"+=" + (window.innerHeight * 10),
      scrub:.01,
      pin:true,
    }
  });
  t1.to("#overlay #centerimg",{
    left:"50%",
    ease:Power1,
  });
  t1.to("#circle",{
    scale:.2,
    ease:Power1

  },"a");
  t1.to("#overlay #purple",{
    top:"50%",
    ease:Power1,
  },"a")
t1.to("#overlay #mainheading",{
  top:"150%",
  ease:Power1,
},"a")
t1.to("#overlay #centerimg img",{
  scale:0,
  ease:Power1,
},"a")
t1.to("#overlay #centerimg span",{
  opacity:0,
  ease:Power1,
},"a")
t1.to("#overlay #smcircle",{
  scale:0.7,
  ease:Power1,
},"a")
t1.to("#circle #btm img",{
  rotate:"-180deg",
  ease:Power1,
  stagger:.05,
},"a")
t1.to("#imgcontainer img",{
  scale:1.25,
  ease:Power0,
},"a")
t1.to("#smcircle, #circle  ",{
  scale:0,
  ease:Power1,
},"same");
t1.to("#purple",{
  scale:0,
  ease:Power1,
  opacity:0,
},"same");

t1.to("#sechead",{
  rotate:"0",
  ease:Power1,
  bottom:"-10",
  delay:-.5,
},"same");
t1.to("#sidepurple",{
  top:"-120%",
  duration:1,
  ease:Power1,
},"same")
}

function timelinetwo(){
  var t12=gsap.timeline({
    scrollTrigger:{
      trigger:"#second",
      scroller:"#main",
      start:"top top",
      end:"+=" + (window.innerHeight * 10),
      scrub:.01,
      pin:true,
    }
  });
  t12.to(".circle",{
    top:"50%",
    duration:3,
    scale:1.1,
    stagger:.1,
    ease:Power1,
    });
  t12.to(".circle",{
    top:"50%",
    left:"50%",
    duration:3,
    scale:1.1,
    stagger:.1,
    ease:Power1,
  });
  t12.to(".circle",{
    duration:3,
    scale:.85,  
    ease:Power1,
  });
  t12.to(".circle",{
    duration:3,
    scale:10,  
    ease:Power1,
  },"same");
  t12.to("#nav1",{
    color:"white",
    duration:3,
    ease:Power1,
    delay:-1,
  },"same")
  t12.to("#one",{
   top:"-100%",
    duration:3,
    ease:Power1,
  },"same")
  t12.to("#two",{
    top:"0%",
     duration:3,
     ease:Power1,
   },"same") 
   t12.to("#three",{
    top:"100",
     duration:5,
     ease:Power1,
   },"same") 

   t12.to("#stop h1",{
    left:"-150%",
     duration:10,
     ease:Power1,
     delay:2,
   },"same")
   t12.to("#head",{
    opacity:0,
    duration:3,
    ease:Power1,
    delay:-8,
   })
   t12.to("#head2",{
    opacity:1,
    duration:3,
    ease:Power1,
    delay:-5,
   });
   t12.to("#two",{
    top:"-100%",
     duration:3,
     ease:Power1,
     delay:-2,
   },"a") 
   t12.to("#three",{
    top:"0%",
     duration:3,
     ease:Power1,
     delay:-2,
   },"a") 
   t12.to("#stop .circle",{
    background:`linear-gradient(to right,#D5A7B4,#B4AAD5)`,
     duration:3,
     ease:Power1,
   },"a")
   t12.to("#block .bl",{
    top:"0%",
    duration:5,
    // delay:2,
    stagger:2,
   },"a")
   t12.to("#line1",{
    left:"-10%",
    display:"flex",
    duration:3,
    ease:Power1,
    delay:2,
   },"sath")
   t12.to("#line2",{
    left:"-10%",
    display:"flex",
    duration:3,
    ease:Power1,
    delay:2,
   },"sath")
   t12.to("#line2",{
    left:"-15%",
    display:"flex",
    duration:3,
    ease:Power1,
  
   })
}



timelineone();
timelinetwo();
var t14=gsap.timeline();
t14.to("#cir-two #cir1",{
  x:40,
  repeat:-1,
  duration:5,
})
t14.to("#cir-two #cir2",{
  x:-40,
  repeat:-1,
  duration:5,
})

var sekfirst=document.querySelector(" #img-box #sek-first");
var seksecond=document.querySelector("#sek-sec");
var sekfirsth5=document.querySelector("  #sek-first h5");
var seksec5=document.querySelector("  #sek-sec h5");
var change=document.querySelector("#change-color");
var changeh5=document.querySelector("#change-color h5");


var third=document.querySelector("#third");
sekfirst.addEventListener("mouseenter",function(){
  third.style.backgroundColor="rgb(225, 248, 225)";
  sekfirst.style.backgroundColor="#D5A7B4"
  sekfirsth5.style.color="white"
})
sekfirst.addEventListener("mouseleave",function(){
  third.style.backgroundColor="white";
  sekfirst.style.backgroundColor="#ebe9f3"
  sekfirsth5.style.color="#D5A7B4"
})
seksecond.addEventListener("mouseenter",function(){
  third.style.backgroundColor="palevioletred";
  seksecond.style.backgroundColor="#D5A7B4";
  seksec5.style.color="white"
})
seksecond.addEventListener("mouseleave",function(){
  third.style.backgroundColor="white";
  seksecond.style.backgroundColor="#ebe9f3"
  seksec5.style.color="#D5A7B4"
})

change.addEventListener("mouseenter",function(){
  third.style.backgroundColor="#B4AAD5";
  change.style.backgroundColor="#D5A7B4"
  changeh5.style.color="white"
})
change.addEventListener("mouseleave",function(){
  third.style.backgroundColor="white";
  change.style.backgroundColor="#ebe9f3"
  changeh5.style.color="#D5A7B4"
})
function timelinethree(){
  var t13=gsap.timeline({
    scrollTrigger:{
      trigger:"#child-2",
      scroller:"#main",
      start:"top top",
      end:"+=" + (window.innerHeight *3),
      // end:"top 10%",
      scrub:.01,
      pin:true,
      // markers:true,
    }
  });
t13.to("#sliding",{
  left:"300%",
  duration:5,
  ease:Power1,
  // delay:3,
})
}
timelinethree();
// Shery.mouseFollower();