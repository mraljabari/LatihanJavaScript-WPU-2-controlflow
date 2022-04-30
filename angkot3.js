var angkot = 1,
    angkotBeroperasi = 6,
    jmlAngkot = 10;

for (angkot; angkot<=jmlAngkot; angkot++){
    if (angkot <= angkotBeroperasi){
        console.log('Angkot No. ' + angkot + ' beroperasi dengan baik');  
    }
    else{
        console.log('Angkot No. ' + angkot + ' sedang tidak beroperasi');
    }
}