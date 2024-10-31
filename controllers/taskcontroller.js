const{IncomingForm}= formidable=require('formidable')
const { readTasksFromFile } = require("../utils/filehander")

exports.getTasks=(req,res)=>{
  const task =readTasksFromFile();
  res.writehead(200,{'content-type ':'application/json'})
  res.end(JSON.stringify(task))
}
exports.createTask =(req,res) =>{

}