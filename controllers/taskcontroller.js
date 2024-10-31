const{IncomingForm}= formidable=require('formidable')
const { readTasksFromFile, writetaskTofile } = require("../utils/filehander")

exports.getTasks=(req,res)=>{
  const task =readTasksFromFile();
  res.writehead(200,{'content-type ':'application/json'})
  res.end(JSON.stringify(task))
}
exports.createTask =(req,res) =>{
  const form =new IncomingForm();
  form.parse(req,(err,fields,files)=>{
    if(err){
      res.writehead(400,{'content-type':'application/json'});
      res.end(JSON.stringify({
       message:'error parsing form'
      }))
     return;
    }

    const tasks=readTasksFromFile()
    const newTasks = {
      id:Date.now(),
      title:fields.title,
      description:fields?.description || '',
      status:fields ?.status||'pending',
      Image:files.Image? '/uploads/${files.image.name}':null,
    }
    tasks.push(newTasks);
    writetaskTofile(tasks);
    if(files.Image){
    copyfilesync(files.Image.path, '../uploads' +files.Image.name)
    }
  })

}