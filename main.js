var chinese = document.getElementById('cn_click'),
    english = document.getElementById('en_click'),
    cn_txt = document.querySelectorAll('#cn'),
    en_txt = document.querySelectorAll('#en'),
    nb_cn = cn_txt.length,
    nb_en = en_txt.length;

chinese.addEventListener('click', function() {
    langue(chinese,english);
}, false);

english.addEventListener('click', function() {
    langue(english,chinese);
}, false);

function langue(langueOn,langueOff){
    if (!langueOn.classList.contains('current_lang')) {
        langueOn.classList.toggle('current_lang');
        langueOff.classList.toggle('current_lang');
    }
    if(langueOn.innerHTML == 'Cn'){
        afficher(cn_txt, nb_cn);
        cacher(en_txt, nb_en);
    }
    else if(langueOn.innerHTML == 'En'){
        afficher(en_txt, nb_en);
        cacher(cn_txt, nb_cn);
    }
}

function afficher(txt,nb){
    for(var i=0; i < nb; i++){
        txt[i].style.display = 'block';
    }
}
function cacher(txt,nb){
    for(var i=0; i < nb; i++){
        txt[i].style.display = 'none';
    }
}
function init(){
    langue(chinese,english);
}
init();

 






