
const caixas = document.querySelectorAll('.container .caixa');
const inserirZona = document.getElementById('caixa-grande')

caixas.forEach(function(caixa){
    caixa.addEventListener('dragstart', function(evento){
        const seletor = '#' + evento.target.id;
        evento.dataTransfer.setData('text/plain', seletor);
        evento.dataTransfer.effectAllowed = 'copyMove'
    });
});

inserirZona.addEventListener('dragover', function(evento){
    evento.preventDefault();
    evento.dataTransfer.dropEffect = 'copy';
    inserirZona.classList.add('destaque')
});

inserirZona.addEventListener('dragleave', ()=>{
    inserirZona.classList.remove('destaque')
})

inserirZona.addEventListener('drop', function(evento){
    evento.preventDefault();
    const seletor = evento.dataTransfer.getData('text/plain')

    const elementoArrastado  =document.querySelector(seletor)

    if(elementoArrastado){
        inserirZona.appendChild(elementoArrastado)
    }
    inserirZona.classList.remove('destaque')
})