export function CheckTodo(project,title){
    return {
        
        CheckTodo(){
            

            let tmp = localStorage.getItem(project)
            tmp = JSON.parse(tmp)
            console.log(tmp)
            for(let i=0; i< tmp.length; i++){
                 if(tmp[i]['title']==title){   

                    if(tmp[i]['status']=='Complete'){
                        tmp[i]['status']='Incomplete'
                        
                    }else{
                        tmp[i]['status']='Complete'
                          
                    }
                    
                 }  
            }
            tmp = JSON.stringify(tmp)
            localStorage.setItem(project, tmp)
    
            
        }
    }
}