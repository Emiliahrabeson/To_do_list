let compteur = 0;
function ajouter (){
    compteur++;
    const liste = document.getElementById('task');
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    const new_task = document.createElement('input');
    new_task.type = 'checkbox';
    new_task.id = 'tache_${compteur}';
    const label = document.createElement('label');
    label.htmlFor = 'tache_${compteur}';
    label.textContent = taskText;

    const div_task = document.createElement('div');
    div_task.appendChild(new_task);
    div_task.appendChild(label);
    liste.appendChild(div_task);

    //refa selectionné le izy de barrena de aveo fafana asorina le task

}
