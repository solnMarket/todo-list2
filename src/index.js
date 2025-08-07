 // index.js
import { AddProject } from "./AddProject.js";
import { AddTodo } from "./AddTodo.js";
import { CreateTodo } from "./CreateTodo.js";
import { DomRenderer } from "./DomRenderer.js";
import { compareAsc, format } from "date-fns";
import "./styles.css"
import { CheckTodo } from "./CheckTodo.js";


    let newProj = AddProject('My Routine', [CreateTodo('Scroth', 'Follow the exercises that were taught by your P.T.', format(new Date(2025,8,3), "yyyy-MM-dd"), 'Complete')])
    newProj.AddProject()
    let newProj1 = AddProject('default', [CreateTodo('Help Cardo','Yesterday I accidentally hit him with a car, help him get better by treating it.', format(new Date(2025,8,3), "yyyy-MM-dd"),'Incomplete'),CreateTodo('Buy miggie some clothes', 'go to sm and get him something to wear to events', format(new Date(2025,8,3), "yyyy-MM-dd"), 'Incomplete')])
    newProj1.AddProject()
     let dom = DomRenderer()
     dom.LoadProjects()

    //  let check = CheckTodo('default', 'Buy miggie some clothes')
    //  check.CheckTodo()

    const checkbox = document.querySelectorAll('input[type="checkbox"]')


     



