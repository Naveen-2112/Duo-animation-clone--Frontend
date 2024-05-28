// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true
// });    ---> this works fine for only locomotive but if you want to apply gsap as well it doesnt work 

function init()
{
    gsap.registerPlugin(ScrollTrigger);
    const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
    });
    
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, 
    getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();

}
init()

var crsr=document.querySelector("#cursor")
var main=document.querySelector(".main")
document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+"px"
    crsr.style.top=dets.y+"px"
})
var h4elem=document.querySelectorAll("#nav h4");
var purple=document.querySelector("#purple");
h4elem.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        purple.style.display="block"
        purple.style.opacity="1"
    })
    elem.addEventListener("mouseleave",function(){
        purple.style.display=""
        purple.style.opacity=""
    })
})

var video=document.querySelector("video")
video.addEventListener("mouseenter",function(dets){
    crsr.style.width=150+"px"
    crsr.style.height=20+"px"
    crsr.style.borderRadius=8+"px"
})
video.addEventListener("mouseleave",function(dets){
    crsr.style.width=""
    crsr.style.height=""
    
})


var tl=gsap.timeline({
    scrollTrigger:{
        scroller:".main",
        trigger:"#page1 h1",
        // markers:true,
        start:'top 27%',
        end:'top 0',
        scrub:2
    }
})

tl.to("#page1 h1",{
    x:-100
},"anim")

tl.to("#page1 h2",{
    x:100
},"anim")

tl.to("#page1 video",{
    width:"90%"
},"anim")

var tl2=gsap.timeline({
    scrollTrigger:{
        scroller:".main",
        trigger:"#page1 h1",
        // markers:true,
        start:'top -110%',
        end:'top -120%',
        scrub:2
    }
})
tl2.to(".main",{
    backgroundColor:"#fff"
})
var tl3=gsap.timeline({
    scrollTrigger:{
        scroller:".main",
        trigger:"#page1 h1",
        // markers:true,
        start:'top -280%',
        end:'top -260%',
        scrub:2
    }
})
tl3.to(".main",{
    backgroundColor:"#111"
})


var boxes=document.querySelectorAll(".box");
boxes.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        // elem.style.backgroundColor="red"
        crsr.style.width="300px"
        crsr.style.height="200px"
        var attr=elem.getAttribute("data-image")
        crsr.style.backgroundImage=`url(${attr})`
    })
    elem.addEventListener("mouseleave",function(){
        elem.style.backgroundColor="transparent"
        crsr.style.width=""
        crsr.style.height=""
        crsr.style.backgroundImage=`none`
    })
})