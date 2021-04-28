 //..............show and hide mobile menu....................
 document.querySelector(".menuS-close").addEventListener("click",()=>{
    console.log("bu");
    document.querySelector(".mobile-menu").classList.remove("open");
    document.querySelector(".mobile-menu-inner").classList.remove("show");

    
})
document.querySelector("#menuS-btn").addEventListener("click",()=>{
    document.querySelector(".mobile-menu").classList.add("open");
    document.querySelector(".mobile-menu-inner").classList.add("show");
})

//===================== AOS plugin================
//================================================
    AOS.init();
    // Init AOS
    function aos_init() {
    AOS.init({
    duration: 1000,
    // once: true
    });
    }
