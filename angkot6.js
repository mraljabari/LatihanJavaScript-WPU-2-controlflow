var angkot = 1,
    angkotBeroperasi = 6,
    jmlAngkot = 10;

for(angkot; angkot <= jmlAngkot; angkot++){
    if(angkot <= angkotBeroperasi && angkot !== 5){
        console.log('Angkot No. ' + angkot + ' beroperasi dengan baik');
    }
    else if (angkot === 8 || angkot === 10 || angkot=== 5) {
        console.log('Angkot No. ' + angkot + ' sedang lembur');
    } 
    else {
        console.log('Angkot No. ' + angkot + ' sedang tidak beroperasi');
    }
}