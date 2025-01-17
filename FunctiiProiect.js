let Tipselectat = '';
function TipulTranzactiei(type) {
    Tipselectat = type;
    document.querySelectorAll('.tip-tranzactie button').forEach(button => {
        button.classList.remove('selected');
    });
    document.getElementById(type.toLowerCase()).classList.add('selected');
}
/*Alerta*/
function CautaMasina() {
    const cat = document.getElementById('categoria').value;
    const categ = cat ? cat : "toate categoriile";
    const tranz = Tipselectat ? Tipselectat : "oricare";
    alert(`Cautare: ${categ} in categoria: ${tranz}`);
}