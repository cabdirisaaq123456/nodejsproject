const { readTasksFromFile } = require("../utils/filehander")

exports.getTasks=(req,res)=>{
  const task =readTasksFromFile();
}