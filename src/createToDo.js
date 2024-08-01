import ToDo from "./toDo";
import { loadAllTasks } from "./allTasks";
import data from "./index"

export function createToDo() {
    // Create form element
    const form = document.createElement('form');
    form.id = 'create-To-Do';

    // Create fieldset and legend
    const fieldset = document.createElement('fieldset');
    const legend = document.createElement('legend');
    legend.textContent = 'New ToDo';
    fieldset.appendChild(legend);

    // Create div for form fields
    const formFields = document.createElement('div');
    formFields.className = 'form-fields';

    // Create div for the first side of the form
    const formSide1 = document.createElement('div');
    formSide1.className = 'form-side';

    // Create TITLE input
    const titleLabel = document.createElement('label');
    titleLabel.setAttribute('for', 'title');
    titleLabel.textContent = 'TITLE:';
    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.id = 'title';
    titleInput.name = 'title';
    titleInput.minLength = 2;
    titleInput.maxLength = 50;
    formSide1.appendChild(titleLabel);
    formSide1.appendChild(titleInput);

    // Create DESCRIPTION input
    const descLabel = document.createElement('label');
    descLabel.setAttribute('for', 'desc');
    descLabel.textContent = 'DESCRIPTION:';
    const descInput = document.createElement('input');
    descInput.type = 'text';
    descInput.id = 'desc';
    descInput.name = 'desc';
    formSide1.appendChild(descLabel);
    formSide1.appendChild(descInput);

    // Create DUE DATE input
    const dueLabel = document.createElement('label');
    dueLabel.setAttribute('for', 'due');
    dueLabel.textContent = 'DUE DATE:';
    const dueInput = document.createElement('input');
    dueInput.type = 'date';
    dueInput.id = 'due';
    dueInput.name = 'due';
    formSide1.appendChild(dueLabel);
    formSide1.appendChild(dueInput);

    // Create div for the second side of the form
    const formSide2 = document.createElement('div');
    formSide2.className = 'form-side';

    // Create radio buttons for priority
    const priorities = ['low', 'medium', 'high'];
    priorities.forEach(priority => {
        const radioDiv = document.createElement('div');
        radioDiv.className = 'radio';
        const radioInput = document.createElement('input');
        radioInput.type = 'radio';
        radioInput.id = priority;
        radioInput.name = 'priority';
        radioInput.value = priority;
        const radioLabel = document.createElement('label');
        radioLabel.setAttribute('for', priority);
        radioLabel.textContent = `${priority.toUpperCase()} PRIORITY`;
        radioDiv.appendChild(radioInput);
        radioDiv.appendChild(radioLabel);
        formSide2.appendChild(radioDiv);
    });

    // Create button
    const button = document.createElement('button');
    button.setAttribute('form', 'create-To-Do');
    button.id = 'action-button';
    button.textContent = 'Create To Do';

    // Append everything together
    formFields.appendChild(formSide1);
    formFields.appendChild(formSide2);
    fieldset.appendChild(formFields);
    fieldset.appendChild(button);
    form.appendChild(fieldset);

    button.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = document.getElementById('title').value;
        const desc = document.getElementById('desc').value;
        const date = document.getElementById('date').value;
        const priorityOption = document.querySelector('input[name="priority"]:checked');

        if (priority) {
            const priority = priorityOption.value;
            const newToDo = new ToDo(0, title, desc, date, priority);
        }
        else {
            const priority = null;
            const newToDo = new ToDo(0, title, desc, date, priority);
        }

        form.innerHTML = ''

        const body = document.querySelector('#container')

        body.innerHTML = ""
        body.appendChild(loadAllTasks())
    })

    return form
}