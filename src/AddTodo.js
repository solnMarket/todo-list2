export function AddTodo(project, todo){
    return {
        Addtodo(){
            let tmp = localStorage.getItem(project)
            tmp = JSON.parse(tmp)
            let storage = []
            storage.push(tmp)
            storage.push(todo)
            localStorage.setItem(project, JSON.stringify(storage))
        }
    }
}