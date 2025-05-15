function adicionarTarefas() {
    const input = document.getElementById('nova-tarefas');
    const textoTarefa = input.value.trim(); 

    if (textoTarefa === "") return; 

    const li = document.createElement('li');
    li.textContent = textoTarefa;

    const botaoRemover = document.createElement('button');
    botaoRemover.textContent = 'Remover';
    botaoRemover.onclick = () => li.remove();

    li.appendChild(botaoRemover);
    document.getElementById('lista-tarefas').appendChild(li);

    input.value = '';
}
