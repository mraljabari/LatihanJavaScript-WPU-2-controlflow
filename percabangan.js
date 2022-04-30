alert('Selamat datang di program percabangan');
var ulang = true;


while (ulang === true)
{
    var angka = prompt('Masukan Angka = ');

    if(angka %2 === 0 ){
        alert(angka + ' Adalah bilangan GENAP');
    }
    else if (angka %2 === 1) {
        alert(angka + ' Adalah bilangan GANJIL');
    }
    else {
        alert('data yang anda masukan bukan angka');
    }

    ulang = confirm('Mau Coba lagi?');
}

alert('Terima kasih sudah mencoba program percabangan');