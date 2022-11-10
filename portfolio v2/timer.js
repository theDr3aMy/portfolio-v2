function czas() {
    //POBRANIE DATY
    let dzisiaj = new Date();

    let sekunda = dzisiaj.getSeconds();
    if (sekunda < 10) sekunda = "0" + sekunda;

    let minuta = dzisiaj.getMinutes();
    if (minuta < 10) minuta = "0" + minuta;

    let godzina = dzisiaj.getHours();
    if (godzina < 10) godzina = "0" + godzina;

    //WYPISANIE DATY
    document.getElementById("timer").innerHTML = godzina + ":" + minuta + ":" + sekunda;

    //ODŚWIEŻENIE DATY
    setTimeout("czas()", 500);
}
