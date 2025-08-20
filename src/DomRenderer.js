import { AddProject } from "./AddProject"
import { RemoveTodo } from "./RemoveTodo"
import { TaskCompleter } from "./TaskCompleter"
import { TodoModal } from "./TodoModal"

export function DomRenderer(){


    return {
        LoadProjects(){
                const sidebar = document.querySelector('.sidebarWrapper')
                let key, value
                let proj = []
            for(let i=0; i<localStorage.length; i++){
                key=localStorage.key(i) 
                value = localStorage.getItem(key)
                value=JSON.parse(value)
            
                proj[i]= document.createElement('div')
                proj[i].classList.add('Project')

                sidebar.appendChild(proj[i]) 

                proj[i].textContent=key            
            }

               
        },


        ViewAddProjectFeature(){
            
        document.addEventListener('DOMContentLoaded', function(){

        let AddProjectButton = document.querySelector('.AddProject')
            AddProjectButton.addEventListener('click', function(){
            let modal = document.createElement('div')
            modal.classList.add('modal')
            document.body.appendChild(modal)

            let form = document.createElement('form')
            form.id='projectForm'
            modal.classList.add('AddProjectForm')
            modal.appendChild(form)

            let label = document.createElement('label')
            label.classList.add('formLabel')
            label.setAttribute('for', 'projectName')
            label.textContent="Add List/Project:"
            form.appendChild(label)

            let input = document.createElement('input')
            input.classList.add('formInput')
            input.type='text'
            input.id='projectName'
            input.name='projectName'
            input.required=true
            form.appendChild(input)

            let button = document.createElement('button')
            button.classList.add('formSubmission')
            button.textContent='Submit'
            button.type='submit'
            form.appendChild(button)

                form.addEventListener('submit', function(e){

                const formData = new FormData(form);
                const projectName = formData.get('projectName');
                let newProj = AddProject(projectName,[])
                newProj.AddProject()
                })
                
            })
    })


        },

        ViewProjectsTodo(){
            document.addEventListener('DOMContentLoaded', function(){
                let projectElement = document.querySelectorAll('.Project')
                let mainWrapper = document.querySelector('.mainWrapper')
                let mainContent = document.querySelector('.main-content')

                projectElement.forEach(projectElement=>{
                    projectElement.addEventListener('click', function(){
                    mainWrapper.innerHTML = ''
                    let key, value
                    let proj = []
                    for(let i=0; i<localStorage.length; i++){
                        key=localStorage.key(i) 
                        value = localStorage.getItem(key)
                        value=JSON.parse(value)
                        
                        if(key==projectElement.textContent){
                            let projectTitle = document.createElement('div')
                            let but = document.createElement('button')
                            but.textContent='+'
                            but.classList.add('buttonTodo')
                            projectTitle.textContent=key
                            projectTitle.classList.add('ProjectTitleForAdding')
                            mainWrapper.appendChild(projectTitle)
                            projectTitle.appendChild(but)
                            for(let j=0; j<value.length; j++){
                            let con = [], remove = [], title = [], desc = [], dueDate = [], status = [];
                            con[j] = document.createElement('div')
                            title[j] = document.createElement('div')
                            desc[j] = document.createElement('div')
                            dueDate[j] = document.createElement('input')
                            status[j] = document.createElement('input')
                            remove[j] = document.createElement('button')
                            
                            dueDate[j].classList.add('date-input')
                            dueDate[j].type = 'date'
                            status[j].type = 'checkbox'
                            status[j].classList.add('status')
                            remove[j].classList.add('removeBtn')
                            
                            remove[j].textContent="-"
                            title[j].textContent=value[j].title
                            desc[j].textContent=value[j].description
                            dueDate[j].value = value[j].dueDate
                            if(value[j].status=='Complete'){
                                status[j].checked = true
                            }else{
                                status[j].checked = false
                            }
                            mainWrapper.appendChild(con[j])
                            con[j].appendChild(remove[j])
                            con[j].appendChild(title[j])
                            con[j].appendChild(desc[j])
                            con[j].appendChild(dueDate[j])
                            con[j].appendChild(status[j])

                            
                            remove[j].addEventListener('click',RemoveTodo)

                        }
                        let modal = TodoModal()
                            modal.TodoModal()
                        let check = TaskCompleter()
                            check.TaskCompleter()
                        }

                    }
                    })
                })

            })        
        }

    }
}