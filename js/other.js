document.getElementById("nav-tab-1").addEventListener("click", () => {


    document.getElementById("images-description").src = "./images/description-1-details-lightbox.jpg";
    console.log("nav-tab-1");
    document.getElementById("images-description").classList.remove("img-transition2");
    document.getElementById("images-description").classList.remove("img-transition3");
    document.getElementById("images-description").classList.add("img-transition1");


})


document.getElementById("nav-tab-2").addEventListener("click", () => {

    document.getElementById("images-description").src = "./images/description-2-app.png";
    console.log("nav-tab-2");
    document.getElementById("images-description").classList.remove("img-transition1");
    document.getElementById("images-description").classList.remove("img-transition3");
    document.getElementById("images-description").classList.add("img-transition2");

})

document.getElementById("nav-tab-3").addEventListener("click", () => {

    document.getElementById("images-description").src = "./images/img3.jpg";
    console.log("nav-tab-3");
    document.getElementById("images-description").classList.remove("img-transition1");
    document.getElementById("images-description").classList.remove("img-transition2");
    document.getElementById("images-description").classList.add("img-transition3");

})