import { CheckTodo } from "./CheckTodo"

export function TaskCompleter(){

    return {
        TaskCompleter(){

            const checkbox = document.querySelectorAll('input[type="checkbox"]')
            // console.log(checkbox)
            checkbox.forEach(checkbox=>{

                if(checkbox.dataset.bound === '1') return;
                checkbox.dataset.bound='1';
                checkbox.addEventListener('change', function(){

                    let parent = this.parentNode
                    console.log(parent)
                    let title = parent.firstElementChild
                    let d = title.nextElementSibling.textContent
                    console.log(d)
                    let mainWrapper = document.querySelector('.mainWrapper')
                    let proj = mainWrapper.firstChild.firstChild.textContent
                    console.log(proj)
                    let switchStatus = CheckTodo(proj,d)

                    switchStatus.CheckTodo()

                })
            })
        }
    }

}