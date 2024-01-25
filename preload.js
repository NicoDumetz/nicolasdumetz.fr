
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
    x: "65%",
    duration: 0.5,
    delay: 2.5,
});

gsap.to(".loader-2", {
    rotate: 47.5,
    x: 0,
    y: 0,
    duration: 0.5,
}, "<");

gsap.to(".loader-3", {
    rotate: 90,
    x: "-65%",
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

gsap.to("h1", 1.5, {
    delay: 4,
    y: -90,
    ease: "power4.inOut",
    stagger: {
        amount: 0.1,
    },
})