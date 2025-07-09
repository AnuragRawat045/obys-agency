var tl=gsap.timeline();
tl.from(".line h1",{
    y:150,
    stagger:0.4,
    opacity:0,
    duration:0.6,
    delay:0.5
})
tl.from("#linepart1 ",{
    opacity:0,
    onstart : function(){
        var time=document.querySelector("#linepart1 h5");
        var grow=0;
        setInterval(function(){
        if(grow<100){
            time.innerHTML=++grow;
        }
        else{
         time.innerHTML=grow;
        }
        },35)
    }
})
tl.to(".line h2",{
    animationName:"anime",
    opacity:1

})
tl.to("#loader",{
    opacity:0,
    duration:0.4,
    delay:4
})
tl.from("#page1",{
    delay:0.2,
    y:1600,
    opacity:0,
    duration:0.5,
    ease:power4
})
tl.to("#loader",{
    display:none
})
