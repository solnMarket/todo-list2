export function RemoveTodo(event){
    let btn = event.currentTarget
    let title =  btn.nextElementSibling.textContent
    let mainWrapper = document.querySelector('.mainWrapper')
    let proj = mainWrapper.firstChild.firstChild.textContent
    console.log(proj,title)
    let storage = localStorage.getItem(proj)
    storage = JSON.parse(storage)
    for(let i=0; i<storage.length;i++){
        if(storage[i].title===title){
            console.log(storage.splice(i,1))
            break
        }
    }
    storage = JSON.stringify(storage)
    localStorage.setItem(proj,storage)
    btn.parentElement.remove()

    
}