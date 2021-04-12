// top nav search box
let searchIcon=document.getElementById('search-icon');

    searchIcon.addEventListener("click", function(){
        //select search-box and date-lang div
        let searchBox= document.querySelector('.topr-nav_search-box'),
        dateLang=document.querySelector('#date-lang');

        if(searchBox.style.display=='none' ){
            searchBox.style.display='inline-block';
            searchBox.style.opacity=1;

            dateLang.style.display='none';
            console.log("y");
    
        }else{
            searchBox.style.display='none';
            searchBox.style.opacity=1;

            dateLang.style.display='inline-block';
            console.log("n");
            }
    });

$(window).scroll(function () {
    var midNav = $(".middle-nav").outerHeight( true );
    var topNav =$(".top-nav").outerHeight( true );
    var topHeight=midNav + topNav;
    //sticky nav
    if($(window).scrollTop()>135){
        $(".navbar").css({
            "position":"fixed",
            "top":0,
            "backgroundColor":"rgb(38 126 86)",
        })
        $(".navbar a").css({
            'color':'#fff'
        })
    }else{
        $(".navbar").css({
            "position":"absolute",
            "top":topHeight,
            "backgroundColor":"#dae1e9",
        })
        $(".navbar a").css({
            'color':'#777'
        })
        
    }
   

})
