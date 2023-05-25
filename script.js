function hitung_luas(event) {
    event.preventDefault(); // Prevent form submission

    var sisi_persegi = parseFloat(document.getElementById("sisi-luas").value);
    var luas_persegi = sisi_persegi * sisi_persegi;

    document.getElementById("output_luas").textContent = "luas dari persegi dengan panjang sisi " + sisi_persegi + " adalah : " + luas_persegi;
    document.getElementById("perhitungan_luas").textContent = sisi_persegi + " X " + sisi_persegi;
    document.getElementById("rumus_luas").textContent = "L = S X S";
}


function hitung_keliling(event) {
    event.preventDefault(); // Prevent form submission

    var sisi_persegi = parseFloat(document.getElementById("sisi-keliling").value);
    var keliling_persegi = 4 * sisi_persegi;

    document.getElementById("output_keliling").textContent = "keliling dari persegi dengan panjang sisi " + sisi_persegi + " adalah : " + keliling_persegi;
    document.getElementById("perhitungan_keliling").textContent = "4 X " + sisi_persegi;
    document.getElementById("rumus_keliling").textContent = "K = 4 X S";
}

function reset_luas() {
    document.getElementById("output_luas").textContent = "";
    document.getElementById("perhitungan_luas").textContent = "";
    document.getElementById("rumus_luas").textContent = "";
}

function reset_keliling() {
    document.getElementById("output_keliling").textContent = "";
    document.getElementById("perhitungan_keliling").textContent = "";
    document.getElementById("rumus_keliling").textContent = "";
}