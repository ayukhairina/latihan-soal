
function hasil (angka){
    const hasil = angka.substring(1);
    const awal = "+62 ";
    return awal + hasil;
}
const nomorhp = "081576892716";
console.log(hasil(nomorhp));