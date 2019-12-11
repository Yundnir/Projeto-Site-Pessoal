var selec_champ = champ.value;
text_illaoi.style.display = 'none';
text_nunu.style.display = 'none';
text_pant.style.display = 'none';
text_trist.style.display = 'none';
text_shen.style.display = 'none';

function teste (t) {
area.innerHTML = `Você escolheu: ${t}`;
}

// function select_lane() {
//     area.innerHTML = `${adc.innerHTML}`;
    
    
// }


function escolher() {
    var TT = champ.value;

    if (TT == 'none') {
        text_illaoi.style.display = 'none'
        text_nunu.style.display = 'none'
        text_pant.style.display = 'none'
        text_trist.style.display = 'none'
        text_shen.style.display = 'none'
    }
    else if (TT == 'illaoi') {
        if (text_illaoi.style.display == 'none') {
        text_illaoi.style.display = 'block'
        text_nunu.style.display = 'none'
        text_pant.style.display = 'none'
        text_trist.style.display = 'none'
        text_shen.style.display = 'none'
    } 
}
    
    else if (TT == 'nunu' ) {
        if (text_nunu.style.display == 'none') {
        text_nunu.style.display = 'block'
        text_illaoi.style.display = 'none'
        text_pant.style.display = 'none'
        text_trist.style.display = 'none'
        text_shen.style.display = 'none'

        }
    }
    else if (TT == 'pantheon') {
        if (text_pant.style.display == 'none') {
        text_pant.style.display = 'block'
        text_illaoi.style.display = 'none'
        text_nunu.style.display = 'none'
        text_trist.style.display = 'none'
        text_shen.style.display = 'none'

        }
    }
    else if (TT == 'tristana') {
        if (text_trist.style.display == 'none') {
        text_trist.style.display = 'block'
        text_pant.style.display = 'none'
        text_illaoi.style.display = 'none'
        text_nunu.style.display = 'none'
        text_shen.style.display = 'none'
        }
    }
    else if (TT == 'shen'){
        if (text_shen.style.display == 'none') {
        text_shen.style.display = 'block'
        text_illaoi.style.display = 'none'
        text_pant.style.display = 'none'
        text_trist.style.display = 'none'
        text_nunu.style.display = 'none'
    }
}

}