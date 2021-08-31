const animHome = () => {

    const animTitle = () => {
        let tl = gsap.timeline()
        tl.fromTo("#title", {
            y: -30,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 1.5,
            ease: "inOut"
        })
    }


    const animWith = () => {
        let tl = gsap.timeline()
        tl.fromTo("#with", {
            y: 30,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 1.5,
            ease: "inOut"
        })
    }

    const animAuthor = () => {
        let tl = gsap.timeline()
        tl.fromTo("#author", {
            y: 30,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 1.5,
            ease: "inOut"
        })
    }

    const animMotto = () => {
        let tl = gsap.timeline()
        tl.fromTo(".motto", {

            opacity: 0
        }, {

            opacity: 1,
            duration: 2,
            ease: "inOut"
        })
    }
    animTitle();
    animWith();
    animAuthor();
    animMotto();

}

animHome();