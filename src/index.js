 // index.js
import { AddProject } from "./AddProject.js";
import { AddTodo } from "./AddTodo.js";
import { CreateTodo } from "./CreateTodo.js";
import { DomRenderer } from "./DomRenderer.js";
import "./styles.css"



    // let def = {
    //     projectName: "default",
    //     todos: [
    //         CreateTodo('Help Cardo','Yesterday I accidentally hit him with a car, help him get better by treating it.', new Date(2025,8,3),'Incomplete'),
    //         CreateTodo('Buy miggie some clothes', 'go to sm and get him something to wear to events', new Date(2025,8,4), 'Incomplete')
    //     ]
    // }

    // localStorage.setItem('default', JSON.stringify(def))
    let newProj = AddProject('My Routine', [CreateTodo('Scroth', 'Follow the exercises that were taught by your P.T.', new Date(2025,8,3), 'Incomplete')])
    newProj.AddProject()
    let newProj1 = AddProject('default', [CreateTodo('Help Cardo','Yesterday I accidentally hit him with a car, help him get better by treating it.', new Date(2025,8,3),'Incomplete'),CreateTodo('Buy miggie some clothes', 'go to sm and get him something to wear to events', new Date(2025,8,4), 'Incomplete')])
    newProj1.AddProject()
     let dom = DomRenderer()
     dom.LoadProjects()




