document.getElementById("navGen").addEventListener("click", ()=>{
    if (document.getElementById("navigation").classList.contains("popUp")) {
        document.getElementById("navigation").classList.remove("popUp")
        document.getElementById("form").style.display="none";
    } else {
        document.getElementById("navigation").classList.add("popUp")
        document.getElementById("form").style.display="none";
    }
})



document.getElementById("update").addEventListener("click", ()=>{
    document.getElementById("navigation").classList.remove("popUp")

     var attribute =document.getElementById("form").hasAttribute("none");
     
    if (attribute) {
        document.getElementById("form").style.display="none";
    } else {
        document.getElementById("form").style.display="block";
    }
});