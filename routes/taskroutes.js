const taskroutes=(req,res) =>{
    if(req.method=='GET'){
        res.end('get all tasks')
    }
    else if(req.method=='POST'){
        res.end('create anew task!!!');
    }
    else if(req.method == 'PATCH'){
        res.end('update task');

    }
    else if(req.method == 'DELETE'){
        res.end('delete task');
    }
    else{
        res.writehead(404,'not found',{'content_type':'application/json'
        });
            res.end(JSON.stringify({
                message:'page not found'
            }))
        }
    }

module.exports=taskroutes;