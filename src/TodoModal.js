import { AddProject } from "./AddProject"
import { AddTodo } from "./AddTodo"
import { CreateTodo } from "./CreateTodo"
import { DomRenderer } from "./DomRenderer"

export function TodoModal(){
    return {
            TodoModal(){
            
                let todoButton = document.querySelector('.buttonTodo')
                todoButton.addEventListener('click', function(){
                    
                    let modal = document.createElement('div')
                    let con = document.createElement('div')
                    let form = document.createElement('form')
                    let btcCon = document.createElement('div')
                    let closeBtn = document.createElement('button')

                    let titleLabel = document.createElement('label')
                    let title = document.createElement('input')
                    let descLabel = document.createElement('label')
                    let desc = document.createElement('textarea')
                    let dateLabel = document.createElement('label')
                    let date = document.createElement('input')
                    let statusLabel = document.createElement('label')
                    let status = document.createElement('input')
                    let titleSec = document.createElement('section')
                    let descSec = document.createElement('section')
                    let dateSec = document.createElement('section')
                    let statusSec = document.createElement('section')
                    let submitBtn = document.createElement('button')

                    title.type='text'
                    date.type='date'    
                    status.type='checkbox'
                    closeBtn.textContent='X'
                    closeBtn.style.borderRadius='30%'
                    titleLabel.setAttribute('for', 'title')
                    descLabel.setAttribute('for', 'description')
                    dateLabel.setAttribute('for', 'date')
                    statusLabel.setAttribute('for', 'status')
                    titleLabel.textContent='Enter Title'
                    title.id = 'title'
                    title.name = 'title'
                    title.placeholder='Title'
                    descLabel.textContent='Enter Description'
                    desc.id='description'
                    desc.name='description'
                    desc.placeholder='Description'
                    dateLabel.textContent='Due Date'
                    statusLabel.textContent='Complete/Incomplete'
                    submitBtn.textContent='Submit task'
                    date.id='date'
                    date.name='date'
                    status.id='status'
                    status.name='status'

                    modal.classList.add('modal1')
                    con.classList.add('modalCon')
                    btcCon.classList.add('closeCon')
                    closeBtn.classList.add('closeBtn')

                    document.body.appendChild(modal)
                    modal.appendChild(con)
                    con.appendChild(btcCon)
                    btcCon.appendChild(closeBtn)
                    con.appendChild(form)
                    form.appendChild(titleSec)
                    form.appendChild(descSec)
                    form.appendChild(dateSec)
                    form.appendChild(statusSec)
                    titleSec.appendChild(titleLabel)
                    titleSec.appendChild(title)
                    descSec.appendChild(descLabel)
                    descSec.appendChild(desc)
                    dateSec.appendChild(dateLabel)
                    dateSec.appendChild(date)
                    statusSec.appendChild(statusLabel)
                    statusSec.appendChild(status)
                    form.appendChild(submitBtn)

                    form.addEventListener('submit', function(event){
                        // event.preventDefault()
                        let data = event.target
                        let formData = new FormData(data)
                        let temp = Object.fromEntries(formData.entries());
                        let status = form.querySelector('[name="status"]').checked
                        temp.status=status
                        let title=document.querySelector('.ProjectTitleForAdding')
                        // console.log(title.firstChild.textContent)
                        let proj = title.firstChild.textContent
                        let todo = [CreateTodo(temp.title,temp.description,temp.date,temp.status)]
                        let s = AddTodo(proj,todo)
                        s.Addtodo()
                        modal.remove()
                        let projectElements = document.querySelectorAll('.Project'); // Select all .Project elements
                        for (let i = 0; i < projectElements.length; i++) {
                        const elementText = projectElements[i].textContent; // Get the text content of each element
                        if (elementText.includes(proj)) {
                            console.log(projectElements[i]);
                            projectElements[i].click()
                            // Or, do whatever you need with the found element
                        }
                        }
                        
                        
                    })

                    closeBtn.addEventListener('click', (e)=>{
                        e.preventDefault()
                        modal.remove()
                    })
                })

            
        },


    }
}