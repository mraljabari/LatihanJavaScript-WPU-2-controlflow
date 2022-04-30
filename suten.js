
var ulang = true;

while(ulang)
{
    var p = prompt('Pilih (gunting, batu, kertas) :');
    
    var com = Math.random();

    if(com < 0.34){
        com = 'gunting';
    }
    else if (com >= 34 && com < 0.67) {
        com = 'batu';    
    } 
    else {
        com = 'kertas';
    }
    
    
    
    //Hasil
    var hasil = '';

    if (p == com){
        hasil = 'SERI';
    }
    else if ( p == 'gunting'){
        // if(com=='kertas'){
        //     hasil = alert('MENANG');
        // }
        // else{
        //     hasil = alert('KALAH');
        // }
        hasil = ('kertas') ? 'MENANG' : 'KALAH';
    }
    else if (p == 'batu') {
        hasil = ('gunting') ? 'MENANG' : 'KALAH';
    } 
    else if (p == 'kertas') 
    {
        hasil = ('batu') ? 'MENANG' : 'KALAH';
    } 
    else {
        hasil = 'Yang anda masukan salah';
    }
  
    
    alert('anda memilih ' + p + ' komputer memilih ' + com + '\n maka hasilnya ' + hasil);

    ulang = confirm('Mau coba lagi?'); 
}

alert('Terima kasih sudah mencoba program suten');