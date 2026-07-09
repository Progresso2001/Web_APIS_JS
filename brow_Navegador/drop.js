const elemnto = document.getElementById('elementoArrastado')
const zona = document.getElementById('zonaDrop')

elemnto.addEventListener('dragstart', (ev)=>{
    ev.dataTransfer.setData('text/plain', ev.target.id);
    ev.dataTransfer.effectAllowed = 'copyMove'
})

//Evento dragover 
zona.addEventListener('dragover', (ev)=>{
    ev.preventDefault();
    ev.dataTransfer.dropEffect = 'copy';
    zona.classList.add('destaque');
});

//Evento dragleave
zona.addEventListener('dragleave', ()=>{
    zona.classList.remove('destaque');
});

//Evento drop
zona.addEventListener('drop', (ev)=>{
    ev.preventDefault();
    const id = ev.dataTransfer.getData('text/plain');
    const elementoArrastado = document.getElementById(id)
    zona.appendChild(elementoArrastado)
    zona.classList.remove('destaque')
})

// Evento dragend - limpa estado

elemnto.addEventListener('dragend', ()=>{
    console.log('Arraste finalizado')
})
