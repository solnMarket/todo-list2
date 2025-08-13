import { CheckTodo } from "./CheckTodo"

export function TaskCompleter(){

    return {
        TaskCompleter(){

            const checkbox = document.querySelectorAll('input[type="checkbox"]')
            checkbox.forEach(checkbox=>{
                if(checkbox.dataset.bound === '1') return;
                checkbox.dataset.bound='1';
                checkbox.addEventListener('change', function(){

                    let parent = this.parentNode
                    console.log(parent)
                    let title = parent.firstElementChild.textContent
                    console.log(title)
                    let mainWrapper = document.querySelector('.mainWrapper')
                    let proj = mainWrapper.firstChild.textContent
                    console.log(proj)
                    let switchStatus = CheckTodo(proj,title)

                    switchStatus.CheckTodo()

                })
            })
        }
    }

}