function hitungLuasPersegi() {
    const sisi = document.getElementById('sisi').value;
    const luas = sisi * sisi;
    document.getElementById('luasPersegi').textContent = luas;
}

function hitungKelilingPersegi() {
    const sisi = document.getElementById('sisi').value;
    const keliling = 4 * sisi;
    document.getElementById('kelilingPersegi').textContent = keliling;
}