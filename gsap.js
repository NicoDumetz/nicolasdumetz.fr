gsap.from(".loader-1", {
    width: 0,
    duration: 2,
    ease: "power2.inOut",
});

gsap.from(".loader-2", {
    width: 0,
    duration: 2,
    ease: "power2.inOut",
});

gsap.from(".loader-3", {
    width: 0,
    duration: 2,
    ease: "power2.inOut",
});

gsap.to(".loader", {
    background: "none",
    delay: 2.5,
    duration: 0.1,
});

gsap.to(".loader-1", {
    rotate: 90,
    y: 0,
    x: "61%",
    duration: 0.5,
    delay: 2.5,
});

gsap.to(".loader-2", {
    rotate: 46,
    x: 0,
    y: 0,
    duration: 0.5,
}, "<");

gsap.to(".loader-3", {
    rotate: 90,
    x: "-64%", //-65%
    y: 0,
    duration: 0.5,
}, "<");

gsap.to(".loader", {
    delay: 4,
    scale: 50,
    duration: 1.5,
    ease: "power2.inOut",
});

gsap.to(".loader", {
    rotate: 65,
    duration: 1,
    delay: 4,
    ease: "power2.inOut",
});

gsap.to(".loading-screen", {
    opacity: 0,
    duration: 0.5,
    delay: 4.5,
    ease: "power1.inOut",
});

gsap.to(".title-anim", {
    delay: 15,
    duration: 1,
    opacity: 0,
    // y: 1000,
    // scale: 40,
    ease: "power4.out",
});

gsap.to(".site", {
    delay: 16, //18
    duration: 1,
    ease: "power4.out",
    opacity: 1,
})

gsap.to(".cv", {
    delay: 25,
    duration: 1,
    ease: "power4.out",
    opacity: 1,
})
