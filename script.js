/* =====================================================
   MAIN MENU
===================================================== */

const menuBtn =
    document.getElementById("menuBtn");

const sideMenu =
    document.getElementById("sideMenu");

const closeMenuBtn =
    document.getElementById("closeMenuBtn");

const menuOverlay =
    document.getElementById("menuOverlay");


/* =====================================================
   PREVENT BROWSER FROM RESTORING OLD SCROLL POSITION
===================================================== */

if("scrollRestoration" in history){

    history.scrollRestoration = "manual";

}



/* =========================
   OPEN MENU
========================= */

function openMenu(){

    sideMenu.classList.add("active");

    menuOverlay.classList.add("active");

    document.body.classList.add("menu-open");

    document.body.style.overflow = "hidden";

}



/* =========================
   CLOSE MENU
========================= */

function closeMenu(){

    sideMenu.classList.remove("active");

    menuOverlay.classList.remove("active");

    document.body.classList.remove("menu-open");

    document.body.style.overflow = "";

}



/* OPEN MENU */

if(menuBtn){

    menuBtn.addEventListener(
        "click",
        openMenu
    );

}



/* CLOSE MENU */

if(closeMenuBtn){

    closeMenuBtn.addEventListener(
        "click",
        closeMenu
    );

}



/* CLICK OVERLAY */

if(menuOverlay){

    menuOverlay.addEventListener(
        "click",
        closeMenu
    );

}



/* MENU LINKS */

document
    .querySelectorAll(".sideMenuLinks a")
    .forEach(link => {

        link.addEventListener(
            "click",
            closeMenu
        );

    });



/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if(entry.isIntersecting){

                    entry
                        .target
                        .classList
                        .add("show");


                    revealObserver
                        .unobserve(
                            entry.target
                        );

                }

            });

        },

        {
            threshold:0.10
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});



/* =====================================================
   SERVICE DATA
===================================================== */

const serviceData = {


    /* =================================================
       WEB DEVELOPMENT
    ================================================= */

    web: {

        title:
            "Web Development",

        description:
            "We create fast, responsive and modern web experiences focused on performance, usability and scalability.",

        icon:
            "fa-solid fa-code",

        technologies:[

            {
                icon:"fa-brands fa-html5",
                name:"HTML"
            },

            {
                icon:"fa-brands fa-css3-alt",
                name:"CSS"
            },

            {
                icon:"fa-brands fa-js",
                name:"JavaScript"
            },

            {
                icon:"fa-brands fa-react",
                name:"React"
            },

            {
                icon:"fa-brands fa-node-js",
                name:"Node.js"
            },

            {
                icon:"fa-solid fa-database",
                name:"SQL"
            }

        ],

        builds:[

            {
                icon:"fa-solid fa-globe",
                name:"Business Websites"
            },

            {
                icon:"fa-solid fa-cart-shopping",
                name:"E-Commerce Platforms"
            },

            {
                icon:"fa-solid fa-chart-simple",
                name:"Admin Dashboards"
            },

            {
                icon:"fa-solid fa-window-maximize",
                name:"Web Applications"
            }

        ]

    },



    /* =================================================
       MOBILE APPLICATIONS
    ================================================= */

    mobile: {

        title:
            "Mobile Applications",

        description:
            "We create modern Android and iOS applications with simple interfaces, strong performance and reliable experiences.",

        icon:
            "fa-solid fa-mobile-screen-button",

        technologies:[

            {
                icon:"fa-brands fa-android",
                name:"Android"
            },

            {
                icon:"fa-brands fa-apple",
                name:"iOS"
            },

            {
                icon:"fa-solid fa-code",
                name:"Kotlin"
            },

            {
                icon:"fa-brands fa-swift",
                name:"Swift"
            },

            {
                icon:"fa-brands fa-react",
                name:"React Native"
            },

            {
                icon:"fa-solid fa-database",
                name:"Database"
            }

        ],

        builds:[

            {
                icon:"fa-brands fa-android",
                name:"Android Applications"
            },

            {
                icon:"fa-brands fa-apple",
                name:"iOS Applications"
            },

            {
                icon:"fa-solid fa-truck-fast",
                name:"Delivery Applications"
            },

            {
                icon:"fa-solid fa-briefcase",
                name:"Business Applications"
            }

        ]

    },



    /* =================================================
       BUSINESS SOFTWARE
    ================================================= */

    software: {

        title:
            "Business Software",

        description:
            "We create custom digital systems that automate business operations, organize data and make everyday work simpler.",

        icon:
            "fa-solid fa-laptop-code",

        technologies:[

            {
                icon:"fa-solid fa-server",
                name:"Backend"
            },

            {
                icon:"fa-solid fa-database",
                name:"Database"
            },

            {
                icon:"fa-solid fa-cloud",
                name:"Cloud"
            },

            {
                icon:"fa-solid fa-gears",
                name:"APIs"
            },

            {
                icon:"fa-solid fa-chart-line",
                name:"Analytics"
            },

            {
                icon:"fa-solid fa-shield-halved",
                name:"Security"
            }

        ],

        builds:[

            {
                icon:"fa-solid fa-user-gear",
                name:"Admin Systems"
            },

            {
                icon:"fa-solid fa-briefcase",
                name:"Management Software"
            },

            {
                icon:"fa-solid fa-chart-pie",
                name:"Business Dashboards"
            },

            {
                icon:"fa-solid fa-gears",
                name:"Automation Systems"
            }

        ]

    }

};



/* =====================================================
   SERVICE PAGE ELEMENTS
===================================================== */

const mainWebsite =
    document.getElementById(
        "mainWebsite"
    );


const servicePage =
    document.getElementById(
        "servicePage"
    );


const serviceTitle =
    document.getElementById(
        "serviceTitle"
    );


const serviceDescription =
    document.getElementById(
        "serviceDescription"
    );


const mainServiceIcon =
    document.getElementById(
        "mainServiceIcon"
    );


const technologyGrid =
    document.getElementById(
        "technologyGrid"
    );


const buildGrid =
    document.getElementById(
        "buildGrid"
    );



/* =====================================================
   OPEN SERVICE FULL PAGE
   ALWAYS OPENS FROM TOP
===================================================== */

function openService(type){

    const service =
        serviceData[type];


    if(!service){
        return;
    }


    serviceTitle.textContent =
        service.title;


    serviceDescription.textContent =
        service.description;


    mainServiceIcon.innerHTML = `
        <i class="${service.icon}"></i>
    `;



    technologyGrid.innerHTML =
        service.technologies
            .map(item => `

                <div class="techCard">

                    <i class="${item.icon}"></i>

                    <span>
                        ${item.name}
                    </span>

                </div>

            `)
            .join("");



    buildGrid.innerHTML =
        service.builds
            .map(item => `

                <div class="buildCard">

                    <div class="buildIcon">

                        <i class="${item.icon}"></i>

                    </div>

                    <p>
                        ${item.name}
                    </p>

                </div>

            `)
            .join("");



    closeMenu();


    document.documentElement.style.scrollBehavior =
        "auto";


    window.scrollTo(0,0);

    document.documentElement.scrollTop = 0;

    document.body.scrollTop = 0;


    mainWebsite.style.display =
        "none";


    servicePage
        .classList
        .add("active");


    document.body.style.overflow =
        "";


    servicePage.scrollTop = 0;

    document.documentElement.scrollTop = 0;

    document.body.scrollTop = 0;

    window.scrollTo(0,0);


    document.title =
        service.title +
        " | Cezonal Solutions";


    history.pushState(
        {
            service:type
        },
        "",
        "#service-" + type
    );


    requestAnimationFrame(() => {

        window.scrollTo(0,0);

        document.documentElement.scrollTop = 0;

        document.body.scrollTop = 0;

        servicePage.scrollTop = 0;


        requestAnimationFrame(() => {

            document.documentElement.style.scrollBehavior =
                "";

        });

    });

}



/* =====================================================
   CLOSE SERVICE PAGE
===================================================== */

function closeServicePage(){

    servicePage
        .classList
        .remove("active");


    mainWebsite.style.display =
        "block";


    document.body.style.overflow =
        "";


    document.title =
        "Cezonal Solutions Private Limited";


    history.replaceState(
        {},
        "",
        "#services"
    );


    requestAnimationFrame(() => {

        const servicesSection =
            document.getElementById(
                "services"
            );


        if(servicesSection){

            servicesSection
                .scrollIntoView({
                    behavior:"smooth",
                    block:"start"
                });

        }

    });

}



/* =====================================================
   SERVICE PAGE -> HOME
===================================================== */

function goServiceHome(){

    servicePage
        .classList
        .remove("active");


    mainWebsite.style.display =
        "block";


    document.body.style.overflow =
        "";


    document.title =
        "Cezonal Solutions Private Limited";


    history.replaceState(
        {},
        "",
        "#home"
    );


    requestAnimationFrame(() => {

        window.scrollTo({
            top:0,
            left:0,
            behavior:"smooth"
        });

    });

}



/* =====================================================
   CONTACT FROM SERVICE PAGE
===================================================== */

function goToContact(){

    servicePage
        .classList
        .remove("active");


    mainWebsite.style.display =
        "block";


    document.body.style.overflow =
        "";


    document.title =
        "Cezonal Solutions Private Limited";


    history.replaceState(
        {},
        "",
        "#contact"
    );


    requestAnimationFrame(() => {

        const contactSection =
            document.getElementById(
                "contact"
            );


        if(contactSection){

            contactSection
                .scrollIntoView({
                    behavior:"smooth",
                    block:"start"
                });

        }

    });

}



/* =====================================================
   BROWSER BACK BUTTON
===================================================== */

window.addEventListener(
    "popstate",
    () => {

        if(
            servicePage &&
            servicePage
                .classList
                .contains("active")
        ){

            servicePage
                .classList
                .remove("active");


            mainWebsite.style.display =
                "block";


            document.body.style.overflow =
                "";


            document.title =
                "Cezonal Solutions Private Limited";


            requestAnimationFrame(() => {

                const servicesSection =
                    document.getElementById(
                        "services"
                    );


                if(servicesSection){

                    servicesSection
                        .scrollIntoView({
                            behavior:"smooth"
                        });

                }

            });

        }

    }
);



/* =====================================================
   ESC KEY
===================================================== */

document.addEventListener(
    "keydown",
    event => {

        if(event.key === "Escape"){

            if(
                servicePage &&
                servicePage
                    .classList
                    .contains("active")
            ){

                closeServicePage();

            }

            else if(
                sideMenu &&
                sideMenu
                    .classList
                    .contains("active")
            ){

                closeMenu();

            }

        }

    }
);



/* =====================================================
   HANDLE SERVICE URL ON PAGE LOAD
===================================================== */

window.addEventListener(
    "load",
    () => {

        const hash =
            window.location.hash;


        if(hash.startsWith("#service-")){

            const type =
                hash.replace(
                    "#service-",
                    ""
                );


            if(serviceData[type]){

                openService(type);

            }

        }

    }
);



/* =====================================================
   HERO 3-CARD COVERFLOW CAROUSEL
===================================================== */

const coverflow =
    document.getElementById(
        "heroCoverflow"
    );


const coverflowCards =
    Array.from(
        document.querySelectorAll(
            ".coverflowCard"
        )
    );


const coverflowDots =
    Array.from(
        document.querySelectorAll(
            ".coverflowDot"
        )
    );


const coverflowPrev =
    document.getElementById(
        "coverflowPrev"
    );


const coverflowNext =
    document.getElementById(
        "coverflowNext"
    );


let coverflowActive = 0;

let coverflowTimer = null;

let coverflowStartX = 0;

let coverflowMoveX = 0;

let coverflowPointerDown = false;



/* =====================================================
   POSITION 3 CARDS
===================================================== */

function renderCoverflow(){

    const total =
        coverflowCards.length;


    if(total !== 3){
        return;
    }


    const leftIndex =
        (
            coverflowActive
            - 1
            + total
        ) % total;


    const rightIndex =
        (
            coverflowActive
            + 1
        ) % total;



    coverflowCards.forEach(
        (card,index) => {

            card.classList.remove(
                "is-active",
                "is-left",
                "is-right"
            );


            if(
                index ===
                coverflowActive
            ){

                card.classList.add(
                    "is-active"
                );

            }

            else if(
                index ===
                leftIndex
            ){

                card.classList.add(
                    "is-left"
                );

            }

            else if(
                index ===
                rightIndex
            ){

                card.classList.add(
                    "is-right"
                );

            }

        }
    );



    coverflowDots.forEach(
        (dot,index) => {

            dot.classList.toggle(
                "active",
                index ===
                coverflowActive
            );

        }
    );

}



/* =====================================================
   SET CARD
===================================================== */

function setCoverflow(index){

    const total =
        coverflowCards.length;


    if(!total){
        return;
    }


    coverflowActive =
        (
            index
            + total
        ) % total;


    renderCoverflow();

}



/* NEXT */

function nextCoverflow(){

    setCoverflow(
        coverflowActive + 1
    );

}



/* PREVIOUS */

function previousCoverflow(){

    setCoverflow(
        coverflowActive - 1
    );

}



/* =====================================================
   AUTO ROTATION
===================================================== */

function stopCoverflowAuto(){

    if(coverflowTimer){

        clearInterval(
            coverflowTimer
        );


        coverflowTimer =
            null;

    }

}



function startCoverflowAuto(){

    stopCoverflowAuto();


    if(
        document.hidden ||
        coverflowCards.length !== 3
    ){
        return;
    }


    coverflowTimer =
        setInterval(
            nextCoverflow,
            3200
        );

}



function restartCoverflowAuto(){

    stopCoverflowAuto();

    startCoverflowAuto();

}



/* =====================================================
   PREVIOUS BUTTON
===================================================== */

if(coverflowPrev){

    coverflowPrev
        .addEventListener(
            "click",
            () => {

                previousCoverflow();

                restartCoverflowAuto();

            }
        );

}



/* =====================================================
   NEXT BUTTON
===================================================== */

if(coverflowNext){

    coverflowNext
        .addEventListener(
            "click",
            () => {

                nextCoverflow();

                restartCoverflowAuto();

            }
        );

}



/* =====================================================
   CLICK LEFT / RIGHT CARD
===================================================== */

coverflowCards.forEach(
    (card,index) => {

        card.addEventListener(
            "click",
            () => {

                if(
                    index ===
                    coverflowActive
                ){
                    return;
                }


                setCoverflow(
                    index
                );


                restartCoverflowAuto();

            }
        );

    }
);



/* =====================================================
   DOTS
===================================================== */

coverflowDots.forEach(
    (dot,index) => {

        dot.addEventListener(
            "click",
            () => {

                setCoverflow(
                    index
                );


                restartCoverflowAuto();

            }
        );

    }
);



/* =====================================================
   TOUCH / POINTER SWIPE
===================================================== */

if(coverflow){

    coverflow.addEventListener(
        "pointerdown",
        event => {

            coverflowPointerDown =
                true;


            coverflowStartX =
                event.clientX;


            coverflowMoveX =
                0;


            stopCoverflowAuto();

        }
    );



    coverflow.addEventListener(
        "pointermove",
        event => {

            if(
                !coverflowPointerDown
            ){
                return;
            }


            coverflowMoveX =
                event.clientX -
                coverflowStartX;

        }
    );



    const finishCoverflowSwipe =
        () => {

            if(
                !coverflowPointerDown
            ){
                return;
            }


            coverflowPointerDown =
                false;



            if(
                Math.abs(
                    coverflowMoveX
                ) > 45
            ){

                if(
                    coverflowMoveX < 0
                ){

                    nextCoverflow();

                }

                else{

                    previousCoverflow();

                }

            }


            coverflowMoveX =
                0;


            startCoverflowAuto();

        };



    coverflow.addEventListener(
        "pointerup",
        finishCoverflowSwipe
    );


    coverflow.addEventListener(
        "pointercancel",
        finishCoverflowSwipe
    );


    coverflow.addEventListener(
        "pointerleave",
        event => {

            if(
                coverflowPointerDown &&
                event.pointerType ===
                "mouse"
            ){

                finishCoverflowSwipe();

            }

        }
    );

}



/* =====================================================
   PAUSE WHEN TAB IS HIDDEN
===================================================== */

document.addEventListener(
    "visibilitychange",
    () => {

        if(document.hidden){

            stopCoverflowAuto();

        }

        else{

            startCoverflowAuto();

        }

    }
);



/* =====================================================
   INITIALIZE COVERFLOW
===================================================== */

if(
    coverflowCards.length === 3
){

    renderCoverflow();

    startCoverflowAuto();

}

/* =====================================================
   CONTACT DETAILS PAGE
===================================================== */

const contactPage =
    document.getElementById("contactPage");


function openContactPage(){

    // close side menu if open
    closeMenu();


    // hide main website
    mainWebsite.style.display = "none";


    // hide service page
    if(servicePage){
        servicePage.classList.remove("active");
    }


    // show contact page
    contactPage.classList.add("active");


    // unlock scrolling
    document.body.style.overflow = "";


    // page title
    document.title =
        "Contact | Cezonal Solutions";


    // URL
    history.pushState(
        {
            page:"contact"
        },
        "",
        "#contact-details"
    );


    // ALWAYS OPEN FROM TOP
    document.documentElement.style.scrollBehavior =
        "auto";

    window.scrollTo(0,0);

    document.documentElement.scrollTop = 0;

    document.body.scrollTop = 0;

    contactPage.scrollTop = 0;


    requestAnimationFrame(() => {

        window.scrollTo(0,0);

        document.documentElement.scrollTop = 0;

        document.body.scrollTop = 0;


        requestAnimationFrame(() => {

            document.documentElement.style.scrollBehavior =
                "";

        });

    });

}



function closeContactPage(){

    contactPage.classList.remove("active");


    mainWebsite.style.display =
        "block";


    document.body.style.overflow =
        "";


    document.title =
        "Cezonal Solutions Private Limited";


    history.replaceState(
        {},
        "",
        "#home"
    );


    requestAnimationFrame(() => {

        window.scrollTo({
            top:0,
            left:0,
            behavior:"smooth"
        });

    });

}
