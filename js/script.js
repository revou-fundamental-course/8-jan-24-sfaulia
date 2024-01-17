function hitungLuasPersegi() {
    const sisi = document.getElementById("square-side").value;
    const luas = sisi * sisi;
    document.getElementById("square-luas").innerHTML = `Luas: ${luas}`;
}

function hitungKelilingPersegi() {
    const sisi = document.getElementById("square-side").value;
    const keliling = 4 * sisi;
    document.getElementById("square-keliling").innerHTML = `Keliling: ${keliling}`;
}

function resetPersegi() {
    document.getElementById("square-side").value = "";
    document.getElementById("square-luas").innerHTML = "";
    document.getElementById("square-keliling").innerHTML = "";
}

function hitungLuasPersegiPanjang() {
    const panjang = document.getElementById("rectangle-panjang").value;
    const lebar = document.getElementById("rectangle-lebar").value;
    const luas = panjang * lebar;
    document.getElementById("rectangle-luas").innerHTML = `Luas: ${luas}`;
}

function hitungKelilingPersegiPanjang() {
    const panjang = document.getElementById("rectangle-panjang").value;
    const lebar = document.getElementById("rectangle-lebar").value;
    const keliling = (2 * panjang) + (2 * lebar);
    document.getElementById("rectangle-keliling").innerHTML = `Keliling: ${keliling}`;
}

function resetPersegiPanjang() {
    document.getElementById("rectangle-panjang").value = "";
    document.getElementById("rectangle-lebar").value = "";
    document.getElementById("rectangle-luas").innerHTML = "";
    document.getElementById("rectangle-keliling").innerHTML = "";
}