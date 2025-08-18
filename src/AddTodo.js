export function AddTodo(project, todo){
    return {
        Addtodo(){
            let tmp = localStorage.getItem(project)
            tmp = JSON.parse(tmp)
            tmp.push(todo[0])
            localStorage.setItem(project, JSON.stringify(tmp))
        }
    }
}