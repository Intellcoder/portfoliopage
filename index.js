
function dropDownMenu() {
    let header = document.getElementsByTagName("header")
    let x = document.getElementById("dropdown");
    if (x.style.display === "flex") {
        x.style.display == "none"
        header.style.display == "none"
        console.log("working")
    } else {
        x.style.display == "flex"
        console.log("not working")
    }
}


function myFunction() {

    var x = document.getElementById("close");
    if (x.style.display === "none") {
        x.style.display = "block";
        console.log("display:none")

    } else {
        x.style.display = "none"
        console.log("display:Block")
    }
}