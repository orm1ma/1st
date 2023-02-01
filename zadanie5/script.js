const sub = document.querySelector("button");
const res = document.querySelector("span");
const ile = document.getElementById("ile");
const rodz = document.getElementById("rodz");

sub.addEventListener("click", () => {

    if (rodz.value == 1){
        let cen = 4;
        console.log(cen);
        console.log(ile.value);
        let wynik = cen * ile.value;
        console.log(wynik);
        console.log("Koszt paliwa " + wynik + "zł.");
        res.innerText = "Koszt paliwa " + wynik + "zł.";
    } else if (rodz.value == 2){
        let cen = 3.50;
        console.log(cen);
        console.log(ile.value);
        let wynik = cen * ile.value;
        console.log(wynik);
        console.log("Koszt paliwa " + wynik + "zł.");
        res.innerText = "Koszt paliwa " + wynik + "zł.";
    } else {
        let cen = 0;
        console.log(cen);
        console.log(ile.value);
        let wynik = cen * ile.value;
        console.log(wynik);
        console.log("Koszt paliwa " + wynik + "zł.");
        res.innerText = "Koszt paliwa " + wynik + "zł.";
    }
})