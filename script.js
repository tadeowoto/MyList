

const $taskContainer = document.getElementById('task-container')


const addTask = (event) => {
    event.preventDefault()
    const $txt = event.target.taskText.value
    if($txt){
        const task = document.createElement('div')
        task.classList.add('task', 'bordeRedondeado')
        task.addEventListener('dblclick', cambioEstado)
        task.textContent = $txt
        $taskContainer.prepend(task)
        event.target.reset()
    }else{
        return
    }

}

const cambioEstado = (event) =>{
    event.target.classList.toggle('removed')
}