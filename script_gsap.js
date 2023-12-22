
let container = document.querySelector('.container');
let sections = gsap.utils.toArray('.container section');

let scroll = gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: 'none',
    scrollTrigger: {
        trigger: '.container',
        pin: true,
        scrub: 2,
        end: "+=5000",
    }
})

sections.forEach(section => {

    let desc = section.querySelector('.desc')

    gsap.from(desc, {
        x: 200,
        y: 0,
        opacity: 0,
        duration: 1,
        ease: "easeIn",
        stagger: 0.5,

        scrollTrigger: {
            trigger: section,
            containerAnimation: scroll,
            start: "center right",


        }
    })



    let chiffre1 = section.querySelector('.mine__chiffres1');

    gsap.from(chiffre1, {
        x: 200,
        y: 200,
        opacity: 0,
        duration: 0.5,
        ease: "linear",

        scrollTrigger: {
            trigger: section,
            containerAnimation: scroll,
            start: "center right",

        }
    })

    let chiffre2 = section.querySelector('.mine__chiffres2');

    gsap.from(chiffre2, {
        x: 0,
        y: 200,
        opacity: 0,
        duration: 0.5,
        ease: "linear",
        delay: 1,

        scrollTrigger: {
            trigger: section,
            containerAnimation: scroll,
            start: "center right",

        }
    })

    let chiffre3 = section.querySelector('.mine__chiffres3');

    gsap.from(chiffre3, {

        x: -200,
        y: 200,
        opacity: 0,
        duration: 0.5,
        ease: "linear",
        stagger: 0.5,
        delay: 2,

        scrollTrigger: {
            trigger: section,
            containerAnimation: scroll,
            start: "center right",

        }


    })

    let chiffre4 = section.querySelector('.mine__chiffres4');

    gsap.from(chiffre4, {

        x: 200,
        y: 0,
        opacity: 0,
        duration: 0.5,
        ease: "linear",
        delay: 3,


        scrollTrigger: {
            trigger: section,
            containerAnimation: scroll,
            start: "center right",

        }


    })

    let route1 = section.querySelector('.route__ex1');

    gsap.from(route1, {

        x: 200,
        y: 0,
        opacity: 0,
        duration: 20,
        delay: 0.4,

        ease: "elastic",


        scrollTrigger: {
            trigger: section,
            containerAnimation: scroll,
            start: "center right",

        }


    })

    let route2 = section.querySelector('.route__ex2');

    gsap.from(route2, {

        x: -200,
        y: 0,
        opacity: 0,
        duration: 20,
        delay: 0.8,
        stagger: 12,
        ease: "elastic",


        scrollTrigger: {
            trigger: section,
            containerAnimation: scroll,
            start: "center right",

        }


    })

    let usine1 = section.querySelector('.usine2__ex1');

    gsap.from(usine1, {

        x: 200,
        y: 0,
        opacity: 0,
        duration: 2,
        ease: "easeIn",


        scrollTrigger: {
            trigger: section,
            containerAnimation: scroll,
            start: "center right",

        }


    })

    let usine2 = section.querySelector('.usine2__ex2');

    gsap.from(usine2, {

        x: -400,
        y: 0,
        opacity: 0,
        duration: 2,
        ease: "easeIn",


        scrollTrigger: {
            trigger: section,
            containerAnimation: scroll,
            start: "center right",

        }


    })

    let usine3 = section.querySelector('.usine2__ex3');

    gsap.from(usine3, {

        x: 200,
        y: 0,
        opacity: 0,
        duration: 2,
        ease: "easeIn",


        scrollTrigger: {
            trigger: section,
            containerAnimation: scroll,
            start: "center right",

        }


    })

    let usine4 = section.querySelector('.usine2__emission');

    gsap.from(usine4, {

        x: 0,
        y: 0,
        opacity: 0,
        duration: 2,
        ease: "easeIn",
        delay: 2,


        scrollTrigger: {
            trigger: section,
            containerAnimation: scroll,
            start: "center right",

        }


    })

    let magasin1 = section.querySelector('.magasin__ex1');

    gsap.from(magasin1, {

        x: 0,
        y: 0,
        opacity: 0,
        duration: 2,
        ease: "easeIn",


        scrollTrigger: {
            trigger: section,
            containerAnimation: scroll,
            start: "center right",

        }


    })

    let magasin2 = section.querySelector('.magasin__ex2');

    gsap.from(magasin2, {

        x: -200,
        y: 0,
        opacity: 0,
        duration: 2,
        ease: "easeIn",
        delay: 0.5,


        scrollTrigger: {
            trigger: section,
            containerAnimation: scroll,
            start: "center right",

        }


    })

    let poubelle1 = section.querySelector('.poubelle__ex1');

    gsap.from(poubelle1, {

        x: 200,
        y: 100,
        opacity: 0,
        duration: 2,
        ease: "easeIn",
        delay: 0.5,


        scrollTrigger: {
            trigger: section,
            containerAnimation: scroll,
            start: "center right",

        }


    })

    let poubelle2 = section.querySelector('.poubelle__ex2');

    gsap.from(poubelle2, {

        x: -200,
        y: 100,
        opacity: 0,
        duration: 2,
        ease: "easeIn",
        delay: 0.5,


        scrollTrigger: {
            trigger: section,
            containerAnimation: scroll,
            start: "center right",

        }


    })

    let poubelle3 = section.querySelector('.poubelle__ex3');

    gsap.from(poubelle3, {

        x: 0,
        y: -100,
        opacity: 0,
        duration: 2,
        ease: "easeIn",
        delay: 0.5,


        scrollTrigger: {
            trigger: section,
            containerAnimation: scroll,
            start: "center right",

        }


    })
})


