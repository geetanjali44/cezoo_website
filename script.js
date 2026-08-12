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
   PREVENT OLD SCROLL POSITION
===================================================== */

if("scrollRestoration" in history){

    history.scrollRestoration = "manual";

}


/* =====================================================
   OPEN MENU
===================================================== */

function openMenu(){

    if(!sideMenu || !menuOverlay){
        return;
    }

    sideMenu.classList.add("active");

    menuOverlay.classList.add("active");

    document.body.classList.add("menu-open");

    document.body.style.overflow = "hidden";

}


/* =====================================================
   CLOSE MENU
===================================================== */

function closeMenu(){

    if(sideMenu){
        sideMenu.classList.remove("active");
    }

    if(menuOverlay){
        menuOverlay.classList.remove("active");
    }

    document.body.classList.remove("menu-open");

    document.body.style.overflow = "";

}


/* =====================================================
   MENU EVENTS
===================================================== */

if(menuBtn){

    menuBtn.addEventListener(
        "click",
        openMenu
    );

}


if(closeMenuBtn){

    closeMenuBtn.addEventListener(
        "click",
        closeMenu
    );

}


if(menuOverlay){

    menuOverlay.addEventListener(
        "click",
        closeMenu
    );

}


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


if("IntersectionObserver" in window){

    const revealObserver =
        new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if(entry.isIntersecting){

                        entry.target
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

}
else{

    revealElements.forEach(element => {

        element.classList.add("show");

    });

}



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
   MAIN PAGE ELEMENTS
===================================================== */

const mainWebsite =
    document.getElementById("mainWebsite");

const servicePage =
    document.getElementById("servicePage");

const contactPage =
    document.getElementById("contactPage");

const serviceTitle =
    document.getElementById("serviceTitle");

const serviceDescription =
    document.getElementById("serviceDescription");

const mainServiceIcon =
    document.getElementById("mainServiceIcon");

const technologyGrid =
    document.getElementById("technologyGrid");

const buildGrid =
    document.getElementById("buildGrid");



/* =====================================================
   SCROLL TO TOP IMMEDIATELY
===================================================== */

function instantTop(){

    const oldBehavior =
        document.documentElement.style.scrollBehavior;

    document.documentElement.style.scrollBehavior =
        "auto";

    window.scrollTo(0,0);

    document.documentElement.scrollTop = 0;

    document.body.scrollTop = 0;


    requestAnimationFrame(() => {

        window.scrollTo(0,0);

        document.documentElement.scrollTop = 0;

        document.body.scrollTop = 0;


        requestAnimationFrame(() => {

            document.documentElement.style.scrollBehavior =
                oldBehavior;

        });

    });

}



/* =====================================================
   SHOW MAIN WEBSITE
===================================================== */

function showMainWebsite(){

    if(servicePage){
        servicePage.classList.remove("active");
    }

    if(contactPage){
        contactPage.classList.remove("active");
    }

    if(mainWebsite){
        mainWebsite.style.display = "block";
    }

    document.body.style.overflow = "";

}



/* =====================================================
   OPEN SERVICE PAGE
===================================================== */

function openService(type){

    const service =
        serviceData[type];


    if(
        !service ||
        !mainWebsite ||
        !servicePage
    ){
        return;
    }


    if(serviceTitle){

        serviceTitle.textContent =
            service.title;

    }


    if(serviceDescription){

        serviceDescription.textContent =
            service.description;

    }


    if(mainServiceIcon){

        mainServiceIcon.innerHTML = `
            <i class="${service.icon}"></i>
        `;

    }


    if(technologyGrid){

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

    }


    if(buildGrid){

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

    }


    closeMenu();


    if(contactPage){

        contactPage
            .classList
            .remove("active");

    }


    mainWebsite.style.display =
        "none";


    servicePage
        .classList
        .add("active");


    document.body.style.overflow =
        "";


    servicePage.scrollTop = 0;


    document.title =
        service.title +
        " | Cezonal Solutions";


    history.pushState(
        {
            page:"service",
            service:type
        },
        "",
        "#service-" + type
    );


    instantTop();

}



/* =====================================================
   CLOSE SERVICE PAGE
   RETURN TO SERVICES
===================================================== */

function closeServicePage(){

    if(!mainWebsite){
        return;
    }


    showMainWebsite();


    document.title =
        "Cezonal Solutions Private Limited";


    history.replaceState(
        {
            page:"home"
        },
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

    if(!mainWebsite){
        return;
    }


    showMainWebsite();


    document.title =
        "Cezonal Solutions Private Limited";


    history.replaceState(
        {
            page:"home"
        },
        "",
        "#home"
    );


    instantTop();

}



/* =====================================================
   OPEN CONTACT DETAILS PAGE
===================================================== */

function openContactPage(){

    if(
        !contactPage ||
        !mainWebsite
    ){

        console.error(
            "contactPage or mainWebsite was not found."
        );

        return;
    }


    closeMenu();


    /* HIDE SERVICE PAGE */

    if(servicePage){

        servicePage
            .classList
            .remove("active");

    }


    /* HIDE MAIN WEBSITE */

    mainWebsite.style.display =
        "none";


    /* SHOW CONTACT PAGE */

    contactPage
        .classList
        .add("active");


    document.body.style.overflow =
        "";


    contactPage.scrollTop =
        0;


    document.title =
        "Contact | Cezonal Solutions";


    history.pushState(
        {
            page:"contact"
        },
        "",
        "#contact-details"
    );


    instantTop();

}



/* =====================================================
   CLOSE CONTACT PAGE -> HOME
===================================================== */

function closeContactPage(){

    if(
        !contactPage ||
        !mainWebsite
    ){
        return;
    }


    contactPage
        .classList
        .remove("active");


    if(servicePage){

        servicePage
            .classList
            .remove("active");

    }


    mainWebsite.style.display =
        "block";


    document.body.style.overflow =
        "";


    document.title =
        "Cezonal Solutions Private Limited";


    history.replaceState(
        {
            page:"home"
        },
        "",
        "#home"
    );


    instantTop();

}



/* =====================================================
   SERVICE PAGE -> CONTACT DETAILS PAGE

   IMPORTANT:
   Now "Contact Us" on service page opens the
   Contact Details page directly.
===================================================== */

function goToContact(){

    openContactPage();

}



/* =====================================================
   BROWSER BACK BUTTON
===================================================== */

window.addEventListener(
    "popstate",
    () => {

        const hash =
            window.location.hash;


        /* SERVICE URL */

        if(hash.startsWith("#service-")){

            const type =
                hash.replace(
                    "#service-",
                    ""
                );


            if(serviceData[type]){

                openServiceFromHistory(type);

                return;

            }

        }


        /* CONTACT URL */

        if(hash === "#contact-details"){

            openContactFromHistory();

            return;

        }


        /* NORMAL WEBSITE */

        showMainWebsite();


        document.title =
            "Cezonal Solutions Private Limited";


        if(
            hash &&
            hash !== "#home"
        ){

            requestAnimationFrame(() => {

                const section =
                    document.querySelector(hash);


                if(section){

                    section.scrollIntoView({
                        behavior:"smooth",
                        block:"start"
                    });

                }
                else{

                    instantTop();

                }

            });

        }
        else{

            instantTop();

        }

    }
);



/* =====================================================
   OPEN SERVICE FROM BROWSER HISTORY

   Does NOT create another history entry.
===================================================== */

function openServiceFromHistory(type){

    const service =
        serviceData[type];


    if(
        !service ||
        !mainWebsite ||
        !servicePage
    ){
        return;
    }


    if(serviceTitle){

        serviceTitle.textContent =
            service.title;

    }


    if(serviceDescription){

        serviceDescription.textContent =
            service.description;

    }


    if(mainServiceIcon){

        mainServiceIcon.innerHTML = `
            <i class="${service.icon}"></i>
        `;

    }


    if(technologyGrid){

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

    }


    if(buildGrid){

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

    }


    if(contactPage){

        contactPage
            .classList
            .remove("active");

    }


    mainWebsite.style.display =
        "none";


    servicePage
        .classList
        .add("active");


    document.body.style.overflow =
        "";


    document.title =
        service.title +
        " | Cezonal Solutions";


    instantTop();

}



/* =====================================================
   OPEN CONTACT FROM BROWSER HISTORY
===================================================== */

function openContactFromHistory(){

    if(
        !contactPage ||
        !mainWebsite
    ){
        return;
    }


    if(servicePage){

        servicePage
            .classList
            .remove("active");

    }


    mainWebsite.style.display =
        "none";


    contactPage
        .classList
        .add("active");


    document.body.style.overflow =
        "";


    document.title =
        "Contact | Cezonal Solutions";


    instantTop();

}



/* =====================================================
   ESC KEY
===================================================== */

document.addEventListener(
    "keydown",
    event => {

        if(event.key !== "Escape"){
            return;
        }


        /* CONTACT PAGE */

        if(
            contactPage &&
            contactPage
                .classList
                .contains("active")
        ){

            closeContactPage();

            return;

        }


        /* SERVICE PAGE */

        if(
            servicePage &&
            servicePage
                .classList
                .contains("active")
        ){

            closeServicePage();

            return;

        }


        /* SIDE MENU */

        if(
            sideMenu &&
            sideMenu
                .classList
                .contains("active")
        ){

            closeMenu();

        }

    }
);



/* =====================================================
   HANDLE URL WHEN PAGE LOADS
===================================================== */

window.addEventListener(
    "load",
    () => {

        const hash =
            window.location.hash;


        /* CONTACT PAGE */

        if(hash === "#contact-details"){

            openContactFromHistory();

            return;

        }


        /* SERVICE PAGE */

        if(hash.startsWith("#service-")){

            const type =
                hash.replace(
                    "#service-",
                    ""
                );


            if(serviceData[type]){

                openServiceFromHistory(type);

                return;

            }

        }


        /* NORMAL PAGE */

        if(mainWebsite){

            mainWebsite.style.display =
                "block";

        }


        if(servicePage){

            servicePage
                .classList
                .remove("active");

        }


        if(contactPage){

            contactPage
                .classList
                .remove("active");

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


let coverflowActive =
    0;

let coverflowTimer =
    null;

let coverflowStartX =
    0;

let coverflowMoveX =
    0;

let coverflowPointerDown =
    false;



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
   PAUSE CAROUSEL WHEN TAB HIDDEN
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
