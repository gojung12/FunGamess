let konfirmasi = confirm("mau main tebak angka ga?, kalo mau pencet oke");

while(konfirmasi== true){
    let angkaRandom = Math.floor(Math.random() * 10 + 1);
    let masukanUser = prompt("masukin angka tebakan lu bro!!");
    if (angkaRandom == masukanUser){
        alert("tebakan lu beneer anjay, hoki")
        konfirmasi = confirm("mau lanjut ga?");
    }else if(masukanUser < angkaRandom){
        alert("jyahahaaa tebakan lu kekecilan, coba gedein")
    }else if(masukanUser > angkaRandom){
        alert("jyahahaaa tebakan lu kegedean, coba kecilin")
        konfirmasi = confirm("mau lanjut ga?");
    }else{
        konfirmasi = false;
    }
    konfirmasi = confirm("mau lanjut ga?");
    
    while(masukanUser != angkaRandom && konfirmasi == true){
        let angkaRandom = Math.floor(Math.random() * 10 + 1);
        let masukanUser =  parseInt(prompt("masukin angka tebakan lu bro!!"));

        if (angkaRandom == masukanUser){
            alert("tebakan lu beneer anjay, hoki")
            konfirmasi = confirm("mau lanjut ga?")

        }else if(masukanUser < angkaRandom){
            alert("jyahahaaa tebakan lu kekecilan, coba gedein")
            konfirmasi = confirm("mau lanjut ga?")

        }else if(masukanUser > angkaRandom){
            alert("jyahahaaa tebakan lu kegedean, coba kecilin")
            konfirmasi = confirm("mau lanjut ga?")
            
        }else{
            konfirmasi = false;
        }

    }
}

