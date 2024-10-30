const fs=require('fs');
exports.writetaskTofile=(data)=>{
fs.writeFileSync('/../data/task.json',JSON.stringify(data));
return data;
}
exports.readTasksFromFile=()=>{
    if(!fs.existsSync('./../data/task.json')){
        this.writetaskTofile([]);
    }
    return [];
}

//wuu saxanyahay kan