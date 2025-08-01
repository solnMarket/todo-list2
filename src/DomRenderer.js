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
                    let title = document.createElement('div')
                    title.textContent=value[i].title
        
                    let desc = document.createElement('div')
                    desc.textContent=value[i].description
                    let dateInput = document.createElement('input');
                    dateInput.type = 'date'

                    todo[j].appendChild(title)
                    todo[j].appendChild(desc)
                    todo[j].appendChild(dateInput)

                }
            }
               
        }

    }
}