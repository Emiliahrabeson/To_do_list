let compteur = 0;
function ajouter (){
    compteur++;
    const liste_tache = document.getElementById('task');
    const taskInput = document.getElementById('taskInput');     //le apidirina eo am input
    const taskText = taskInput.value.trim();        

    const new_task_checkbox = document.createElement('input');      //le checkbox anle taskText
    new_task_checkbox.type = 'checkbox';
    new_task_checkbox.id = 'tache_${compteur}';
    const label = document.createElement('label');          //label anle checkbox
    label.htmlFor = 'tache_${compteur}';
    label.textContent = taskText;

    const IconSuppr = document.createElement('i');
    IconSuppr.className = "fas fa-trash delete-icon";
    IconSuppr.title = 'Supprimer la tâche';

    IconSuppr.addEventListener("click",() => {
        liste_tache.removeChild(div_task);
    });

    const div_task = document.createElement('div');         //div pour chaque tache
    div_task.className = "task_ligne";

    div_task.appendChild(new_task_checkbox);         //ajout dans le div 
    div_task.appendChild(label);
    div_task.appendChild(IconSuppr);
    liste_tache.appendChild(div_task);  

    new_task_checkbox.addEventListener("change",() => {
        if (new_task_checkbox.checked == 1) {
            const elem_barree = document.createElement('del');
            elem_barree.textContent = taskText;
            label.textContent = '';
            label.appendChild(elem_barree);
        }

        else {
            label.textContent = taskText;
        }
    });

    taskInput.value = '';
    
}

