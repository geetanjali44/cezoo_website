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


    /* SET TITLE */

    serviceTitle.textContent =
        service.title;


    /* SET DESCRIPTION */

    serviceDescription.textContent =
        service.description;


    /* SET MAIN ICON */

    mainServiceIcon.innerHTML = `
        <i class="${service.icon}"></i>
    `;



    /* TECHNOLOGIES */

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



    /* WHAT WE BUILD */

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



    /* CLOSE MENU */

    closeMenu();



    /* DISABLE SMOOTH SCROLL TEMPORARILY */

    document.documentElement.style.scrollBehavior =
        "auto";



    /* RESET CURRENT PAGE SCROLL BEFORE SWITCHING */

    window.scrollTo(0,0);

    document.documentElement.scrollTop = 0;

    document.body.scrollTop = 0;



    /* HIDE MAIN WEBSITE */

    mainWebsite.style.display =
        "none";



    /* SHOW SERVICE PAGE */

    servicePage
        .classList
        .add("active");



    /* ENABLE NORMAL SCROLL */

    document.body.style.overflow =
        "";



    /* FORCE SERVICE PAGE TO TOP */

    servicePage.scrollTop = 0;

    document.documentElement.scrollTop = 0;

    document.body.scrollTop = 0;

    window.scrollTo(0,0);



    /* PAGE TITLE */

    document.title =
        service.title +
        " | Cezonal Solutions";



    /* URL */

    history.pushState(
        {
            service:type
        },
        "",
        "#service-" + type
    );



    /* FINAL TOP RESET AFTER BROWSER PAINT */

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
   RETURNS TO SERVICES
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