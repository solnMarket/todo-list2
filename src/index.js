 // index.js
import { AddProject } from "./AddProject.js";
import { AddTodo } from "./AddTodo.js";
import { CreateTodo } from "./CreateTodo.js";
import { DomRenderer } from "./DomRenderer.js";
import { compareAsc, format } from "date-fns";
import "./styles.css"
import { CheckTodo } from "./CheckTodo.js";
import { TaskCompleter } from "./TaskCompleter.js";
import { TodoModal } from "./TodoModal.js";


    let newProj = AddProject('Default', [CreateTodo('Scroth', 'Follow the exercises that were taught by your P.T.', format(new Date(2025,8,3), "yyyy-MM-dd"), 'Complete'),CreateTodo('Coding','Study Web Dev via The Odin Project', format(new Date(2025,8,3), "yyyy-MM-dd"), 'Incomplete')])
    newProj.AddProject()

    // let newProj1 = AddProject('test list', [CreateTodo('testlist1', 'testlist1', format(new Date(2025,8,3), "yyyy-MM-dd"), 'Complete'),CreateTodo('testlist2','testlist2', format(new Date(2025,8,3), "yyyy-MM-dd"), 'Incomplete')])
    // newProj1.AddProject()
     let dom = DomRenderer()
    dom.LoadProjects()
    dom.ViewAddProjectFeature()

    dom.ViewProjectsTodo()















     



