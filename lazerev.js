function locomotivepen(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector("#main").style.transform
    ? "transform"
    : "fixed"*/
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}


function navbaranimation() {
    let nav = document.querySelector("nav");

    // global timeline (paused)
    let tl = gsap.timeline({ paused: true });

    // OPEN animation
    tl.to("#nav-bottom", {
        height: "24vh",
        duration: 0.2,
        ease: "power2.out"
    });

    tl.set(".sec-nav h5", { display: "block" });

    tl.from(".sec-nav h5 span", {
        y: 25,
        opacity: 0,
        stagger: { amount: 0.5 },
        duration: 0.2
    });

    // Hover to play animation
    nav.addEventListener("mouseenter", function () {
        tl.play();
    });

    // Hover out to reverse animation
    nav.addEventListener("mouseleave", function () {
        tl.reverse();
    });

}

// photo hide show and moving with mouse with hover

function page2animation() {
    let rightelems = document.querySelectorAll(".right-elem")

    rightelems.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            gsap.to(elem.childNodes[3], {
                opacity: 1,
                scale: 1
            })
        })
        elem.addEventListener("mouseleave", function () {
            gsap.to(elem.childNodes[3], {
                opacity: 0,
                scale: 0
            })
        })
        elem.addEventListener("mousemove", function (dets) {
            console.log(elem.getBoundingClientRect().x)
            gsap.to(elem.childNodes[3], {
                x: dets.x - elem.getBoundingClientRect().x - 0,
                y: dets.y - elem.getBoundingClientRect().y - 30
            })
        })
    })

}

function videoplaypause() {
    let page3center = document.querySelector(".page3-center");
    let video = document.querySelector("#page3 video");
    let page3 = document.querySelector("#page3");

    // PLAY VIDEO
    page3center.addEventListener("click", function () {
        video.play();
        gsap.to(video, {
            scaleX: 1,
            scaleY: 1,
            opacity: 1,
            borderRadius: 0,
            duration: 0.5
        });
    });

    video.addEventListener("click", function () {
        video.pause();
        gsap.to(video, {
            scaleX: 0.7,
            scaleY: 0,
            opacity: 0,
            borderRadius: "30px",
            duration: 0.5
        });
    });



}

function page7videoplaypause() {
    let section = document.querySelectorAll(".sec1-right")

    section.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            elem.childNodes[3].style.opacity = 1
            elem.childNodes[3].play()
        })
    })
    section.forEach(function (elem) {
        elem.addEventListener("mouseleave", function () {
            elem.childNodes[3].style.opacity = 0
            elem.childNodes[3].pause()
        })
    })
    section.forEach(function (elem) {
        elem.addEventListener("mouseleave", function () {
            elem.childNodes[3].style.opacity = 0
            elem.childNodes[3].load()
        })
    })

}

function page10blockanimations() {

    gsap.to(".page10-1 h4", {
        x: 120,
        duration: 0.5,
        stagger: {
            amount: -0.4
        },
        scrollTrigger: {
            trigger: ".page10-1",
            scroller: "#main",
            // markers:true,
            start: "top 100%",
            end: "top -80%",
            scrub: true

        }
    })

    gsap.to(".page10-2 h4", {
        x: 110,
        duration: 0.5,
        stagger: {
            amount: -0.3
        },
        scrollTrigger: {
            trigger: ".page10-1",
            scroller: "#main",
            // markers:true,
            start: "top 80%",
            end: "top -100%",
            scrub: true

        }
    })

    gsap.to(".page10-3 h4", {
        x: 120,
        duration: 0.5,
        stagger: {
            amount: -0.4
        },
        scrollTrigger: {
            trigger: ".page10-1",
            scroller: "#main",
            // markers:true,
            start: "top 80%",
            end: "top -100%",
            scrub: true

        }
    })
}

function loadinganimation(){

let tl = gsap.timeline();

tl.from("#page1", {
    scaleX: 0.7,
    scaleY: 0.2,
    opacity: 0.2,
    borderRadius: "200px",
    duration: 2,
    ease: "power4.out",
    delay:0.2
})

.to("#page1", {
    scale: 1,
    borderRadius: "0px",
    duration: 0,
    ease: "power4.out"
});

tl.from("nav",{
    opacity:0,
 duration:0.1
})
tl.from("#page1 h1,#page1 p,#page1 div",{
    opacity:0,
    duration:0.5,
    stagger:0.2
})
}



locomotivepen()
navbaranimation()
page2animation()
videoplaypause()
page7videoplaypause()

page10blockanimations()

loadinganimation()