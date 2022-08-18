const enc =[['a','ai'],['e','enter'],['i', 'imes'],['o', 'ober'],['u', 'ufat']];
const dec =[[/ai/gi, 'a'],[/enter/gi, 'e'],[/imes/gi, 'i'],[/ober/gi, 'o'],[/ufat/gi, 'u']];
var encBtn = false, decBtn = false;

function encrypt(){ //Función para encriptar texto
    var inpTxt = document.getElementById('inpTxt').value;
    var resBox = document.getElementById('res');
    var rTxt = document.getElementById('rTxt');
    document.getElementById('noTxtImg').style.transition = 'none';
    document.getElementById('noTxt1').style.transition = 'none';
    document.getElementById('noTxt2').style.transition = 'none';
    document.getElementById('noTxtChange').style.visibility = 'hidden';
    var txt = '';
    var pos = 0;
    encBtn = true;
    for (var i = 0; i < inpTxt.length; i++){
        for (var j = 0; j < enc.length; j++){
            var found = false;
            if (inpTxt[i] == enc[j][0]){
                found = true;
                pos = j;
                break;
            }
        }
        if (found) txt += enc[pos][1];
        else txt += inpTxt[i];
    }
    rTxt.style.visibility = 'visible';
    rTxt.innerHTML = txt;
    document.getElementById('copyBtn').style.visibility = 'visible';
    if ((window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)){
        resBox.style.background = 'var(--clr-darkblue-400)';
        rTxt.style.color = 'var(--clr-white-400)';
    }
    else {
        resBox.style.background = 'var(--clr-lightblue-400)';
        rTxt.style.color = 'var(--clr-dark-400)';
    }
}

function decrypt(){ //Función para desencriptar texto
    var txt = document.getElementById('inpTxt').value;
    var resBox = document.getElementById('res');
    var rTxt = document.getElementById('rTxt');
    document.getElementById('noTxtImg').style.transition = 'none';
    document.getElementById('noTxt1').style.transition = 'none';
    document.getElementById('noTxt2').style.transition = 'none';
    document.getElementById('noTxtChange').style.visibility = 'hidden';
    decBtn = true;
    for (var i = 0; i < dec.length; i++){
        txt = txt.replace(dec[i][0], dec[i][1]);
    }
    rTxt.style.visibility = 'visible';
    rTxt.innerHTML = txt;
    document.getElementById('copyBtn').style.visibility = 'visible';
    if ((window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)){
        resBox.style.background = 'var(--clr-darkblue-400)';
        rTxt.style.color = 'var(--clr-white-400)';
    }
    else {
        resBox.style.background = 'var(--clr-lightblue-400)';
        rTxt.style.color = 'var(--clr-dark-400)';
    }
}

function copy(){
    var txt = document.getElementById('rTxt');
    var copyTxt = document.createElement('textarea');
    copyTxt.value = txt.textContent;
    document.body.appendChild(copyTxt);
    copyTxt.select();
    document.execCommand("Copy");
    copyTxt.remove();

    alert('Texto copiado exitosamente');

    document.getElementById('inpTxt').focus();
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    const newColorScheme = event.matches ? "dark" : "light";

    if ((newColorScheme == 'dark') && (encBtn || decBtn)){
        document.getElementById('res').style.background = 'var(--clr-darkblue-400)';
        document.getElementById('rTxt').style.color = 'var(--clr-white-400)';
    }
    else if ((newColorScheme == 'light') && (encBtn || decBtn)) {
        document.getElementById('res').style.background = 'var(--clr-lightblue-400)';
        document.getElementById('rTxt').style.color = 'var(--clr-dark-400)';
    }
});