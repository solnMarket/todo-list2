 
// index.js
import { AddProject } from "./AddProject.js";
import { CreateTodo } from "./CreateTodo.js";


const projects = [
    {
        projectName: "default",
        todos: [
            {title: "Go to the Gym", description: "Follow the routine the LLM gave you", dueDate: new Date(2025, 7, 30)},
            {title: "Apply for a job", description: "The details were given to you by the fat dude", dueDate: new Date(2025, 7, 31)},
        ]
    },
]

let newProject1 = AddProject('Math', {title: "Study Algebra", description: "start from the basics", dueDate: new Date(2025,7,30)})
projects.push(newProject1)
 localStorage.setItem('projects', JSON.stringify(projects))





