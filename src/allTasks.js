export function loadAllTasks(allTodos) {
    const container = document.createElement('div')
    container.id = "inner-container"

    // code to add title to overarching div container
    const titleElem = document.createElement('div')
    titleElem.id = 'content-title'
    titleElem.textContent = "All Tasks"

    const createButton = document.createElement('button')
    createButton.classList.add('invertible-button')
    createButton.textContent = "Create To Do"
    titleElem.appendChild(createButton)

    container.appendChild(titleElem)
    
    // code to add table element
    const todoList = document.createElement('table')
    todoList.id = "todo-list"
    const tr = document.createElement('tr')

    const tableHeaders = ["", "Task", "Priority", "Due Date"]

    for (const header of tableHeaders) {
        const th = document.createElement('th')
        th.textContent = header
        tr.appendChild(th)
    }

    todoList.appendChild(tr)

    // logic to add todo rows into the todoList
    for (const toDo of allTodos) {
        const row = document.createElement('tr')

        // checkmark element
        const check = document.createElement('td');
        const mark = document.createElement('input');
        mark.type = "checkbox"
        check.appendChild(mark)
        row.appendChild(check)

        const title = document.createElement('td');
        title.textContent = toDo.title
        row.appendChild(title)

        const prio = document.createElement('td');
        prio.textContent = toDo.priority
        row.appendChild(prio)

        const due = document.createElement('td');
        due.textContent = toDo.dueDate
        row.appendChild(due)

        todoList.appendChild(row)

        console.log(toDo.title)
    }

    container.appendChild(todoList)

    // return overarching div container after appending all children elements
    return container
}

export function loadToDoForm(toDo) {
    const container = document.createElement('div')

    return container
}