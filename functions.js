function toggleStyleSheet(){

    var sE = document.getElementById("tog");

    var styleElement = document.getElementById("mainStyleSheet");
    
    //var currentStyle = styleElement.getAttribute("href");

    var newStyle;
    
    if(sE.checked == true){
        newStyle = "style2.css";
    }
    else{
        newStyle = "style1.css";
    }
    // if(currentStyle == "style1.css"){
    //     newStyle = "style2.css";
    // }
    // else{
    //     newStyle = "style1.css";
    // }

    styleElement.setAttribute("href",newStyle);

    localStorage.setItem("stylesheet",newStyle);
}

window.onload = function(){

    var savedStyle = localStorage.getItem("stylesheet");

    var styleElement = document.getElementById("mainStyleSheet");

    var toggleBox = document.getElementById("tog");

    if(savedStyle){
        styleElement.setAttribute("href",savedStyle);
        toggleBox.checked = (savedStyle=="style2.css")
    }
}