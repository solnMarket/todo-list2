export function AddProject(ProjectName, todo){
    return {
        ProjectName: ProjectName,
        todo: todo,
        AddProject(){
            localStorage.setItem(ProjectName, JSON.stringify(todo))
        }
    }

}