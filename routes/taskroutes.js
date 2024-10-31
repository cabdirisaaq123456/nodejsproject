const taskroutes=(req,res) =>{
    if(req.method=='GET'){
        getTasks(req,res);
        // res.end('get all tasks')
    }
    else if(req.method=='POST'){
        createTask(req,res)
        // res.end('create anew task!!!');
    }
    else if(req.method == 'PATCH'){
        // res.end('update task');
        updateTask(req,res)

    }
    else if(req.method == 'DELETE'){
        deleteTask(req,res)
        // res.end('delete task');
    }
    else{
        res.writehead(404,'not found',{'content_type':'application/json'
        })
        res.end(JSON.stringify({
            message:'unkown method required'
        }))
         
        }
    }

module.exports=taskroutes;