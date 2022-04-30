var b = '';

for(i=10; i>0; i--){
    for(j=1; j<=10; j++){
        if(j>=i){
            b+='* ';   
        }else{
            b+=' ';
        }

    }
        b+='\n'
}

console.log(b);