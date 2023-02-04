const refmenu = document.getElementById("refmenu");
const refaboutme = document.getElementById("refaboutme");
const refrecommend = document.getElementById("refrecommend");
//const  = document.getElementById("");
const reffooter = document.getElementById("reffooter");

const menu = document.getElementById("menu");
const aboutme = document.getElementById("aboutme");
const recommend = document.getElementById("recommend");
//const  = document.getElementById("");
const footer = document.getElementById("footer");

refmenu.addEventListener("click", () => {
    menu.scrollIntoView({behavior: "smooth"});
    location.reload();
})
refaboutme.addEventListener("click", () => {
    aboutme.scrollIntoView({behavior: "smooth"});
})
refrecommend.addEventListener("click", () => {
    recommend.scrollIntoView({behavior: "smooth"});
})
// .addEventListener("click", () => {
//     .scrollIntoView({behavior: "smooth"});
// })
reffooter.addEventListener("click", () => {
    footer.scrollIntoView({behavior: "smooth"});
})