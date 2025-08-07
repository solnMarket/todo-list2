export function DomRenderer(){
    const mainContent = document.querySelector('.main-content')
    let key, value
    let proj = []
    return {
        LoadProjects(){
            // for(let i=0; i<localStorage.length; i++){
            //     key = localStorage.key(i)
            //     value = localStorage.getItem(key)
                
            // }

            for(let i=0; i<localStorage.length; i++){
                key=localStorage.key(i)
                value = localStorage.getItem(key)
                value=JSON.parse(value)

                proj[i]= document.createElement('div')
                proj[i].classList.add('Project')

                mainContent.appendChild(proj[i]) 

                proj[i].textContent=key
                
                for(let j=0; j<value.length;j++){
                    let todo=[]
                    todo[j] = document.createElement('div')
                    todo[j].classList.add('todo')
                    proj[i].appendChild(todo[j])
                    let title =[]
                    let desc = []
                    let dateInput = []
                    let status = []
                    title[j] = document.createElement('div')
                    title[j].textContent=value[j].title
        
                    desc[j] = document.createElement('div')
                    desc[j].textContent=value[j].description
                    dateInput[j] = document.createElement('input');
                    dateInput[j].type = 'date'
                    dateInput[j].value = value[j].dueDate
                    status[j] = document.createElement('input')
                    status[j].type = 'checkbox'
                    if(value[j].status=='Complete'){
                        status[j].checked = true
                    }else{
                        status[j].checked = false
                    }
                    
                    todo[j].appendChild(title[j])
                    todo[j].appendChild(desc[j])
                    todo[j].appendChild(dateInput[j])
                    todo[j].appendChild(status[j])

                }
            
            }
               
        }

    }
}