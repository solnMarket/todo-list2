 // index.js
import { AddProject } from "./AddProject.js";
import { AddTodo } from "./AddTodo.js";
import { CreateTodo } from "./CreateTodo.js";
import "./styles.css"



    let def = {
        projectName: "default",
        todos: [
            CreateTodo('Test','fart this ass', new Date(2025,7,20),'complete')
        ]
    }

     localStorage.setItem('default', JSON.stringify(def))





