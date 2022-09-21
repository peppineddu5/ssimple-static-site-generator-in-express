import { Response} from 'express';
import { fsExist } from './fsGeneral';

const resolvePath=(path:string)=>
    path.endsWith("/")? path:path+"/"
    
const alreadyExist=(name:string,res: Response,initialPath:string):boolean=>{
    initialPath=resolvePath(initialPath)
    if(!name.endsWith(".html")){
        if(fsExist("/public"+initialPath+name+".html")){
            
             res.redirect(initialPath+name+".html") 
             return true
        }
           
    }
    return false
}
export {
    alreadyExist
}