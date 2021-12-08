/*base logic
var tanya = true;
while( tanya === true ){    
    // menangkap pilihan player
    var p = prompt('Silahkan pilih : gajah, orang, semut');

    // menangkap pilihan computer
    // menggenerate bilangan random
    var comp = Math.random();

    if(comp < 0.34 ){
        comp = 'gajah';
    } else if (comp >= 0.34 && comp < 0.67 ){
        comp = 'orang';
    } else{
        comp = 'semut';
    }
    console.log(comp);
    
    // menentukan rules
    var hasil = '';
    if( p == comp ){
        hasil = 'seri';
    }else if (p == 'gajah'){
        hasil = ( comp == 'orang') ? 'menang' : 'kalah';
    }else if (p == 'orang'){
        hasil = ( comp == 'gajah') ? 'kalah' : 'menang';
    } else if (p == 'semut'){
        hasil = (comp == 'orang') ? 'kalah' : 'menang';
    }else {
        hasil = 'memasukkan pilihan yang salah';
    }

    // tampilkan hasil
    alert('Kamu memilih ' + p + ' dan komputer memilih ' + comp + '\nMaka hasilnya : kamu ' + hasil);
    
    tanya = confirm('lagi?');
}
alert('terimakasih sudah bermain');
*/

// menangkap pilihan computer
// menggenerate bilangan random
function getPilihanComputer(){
    const comp = Math.random();

    if (comp < 0.34 ) return 'gajah';
    if (comp >= 0.34 && comp < 0.67 ) return 'orang';
    return 'semut';
}

// bikin fuction untuk rules aturan main
function getHasil(comp, player){
    
    if( player == comp ) return 'seri';
    if (player == 'gajah') return ( comp == 'orang') ? 'menang' : 'kalah';
    if (player == 'orang') return ( comp == 'gajah') ? 'kalah' : 'menang';
    if (player == 'semut') return hasil = (comp == 'orang') ? 'kalah' : 'menang';
}

// buat event buat ngebaca user pilih yg mana
const pGajah = document.querySelector('.gajah');
pGajah.addEventListener('click',function(){
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pGajah.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);
    
    // buat ganti gambar computer
    const imageComputer = document.querySelector('.img-computer');
    imageComputer.setAttribute('src','img/' + pilihanComputer + '.png');

    // buat tulis hasil
    const info = document.querySelector('.info');
    info.innerHTML = hasil;
});

// set interval biar computer putar gambar
function putar(){
    const imgComputer = document.querySelector('.img-computer');
    const gambar = ['gajah', 'semut', 'orang'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function(){
        if( new Date().getTime() - waktuMulai > 1000){
            clearInterval;
            return;
        }
        imgComputer.setAttribute('src','img/' + gambar[i++] + '.png');
        if (i == gambar.length){
            i = 0;
        }
    }, 100);
}


// biar ga usah copas buat orang sama semut
const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(pil){
    pil.addEventListener('click', function(){
        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer = pil.className;
        const hasil = getHasil(pilihanComputer, pilihanPlayer);

        putar();

        // buat nunggu 1 detik
        setTimeout(function(){
            // buat ganti gambar computer
            const imageComputer = document.querySelector('.img-computer');
            imageComputer.setAttribute('src','img/' + pilihanComputer + '.png');

            // buat tulis hasil
            const info = document.querySelector('.info');
            info.innerHTML = hasil;
        }, 1000);
    });
});




// const pOrang = document.querySelector('.orang');
// pOrang.addEventListener('click',function(){
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pOrang.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);
    
//     // buat ganti gambar computer
//     const imageComputer = document.querySelector('.img-computer');
//     imageComputer.setAttribute('src','img/' + pilihanComputer + '.png');

//     // buat tulis hasil
//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });

// const pSemut = document.querySelector('.semut');
// pSemut.addEventListener('click',function(){
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pSemut.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);
    
//     // buat ganti gambar computer
//     const imageComputer = document.querySelector('.img-computer');
//     imageComputer.setAttribute('src','img/' + pilihanComputer + '.png');

//     // buat tulis hasil
//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });