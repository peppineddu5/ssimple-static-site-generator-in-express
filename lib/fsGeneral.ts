import fs from "fs"
const fsExist=(path:string)=>
    fs.existsSync(__dirname.slice(0,__dirname.length-3)+path)
    
export {
    fsExist
}