import { NotFoundError } from "restify-errors";
import { modelRouter } from "../common/model-router";
import * as restify from 'restify'
import { userInfo } from "os";

import { Resume } from "./resume.model";



class ResumeRouters extends modelRouter<Resume>{

    constructor(){
        super(Resume)
        this.on('beforeRender',doc=>{
            delete (<any> document).text 
        })
    }

    applyRoutes(application: restify.Server){
        
        application.get('/resumes',this.findAll)
        application.get('/resumes/:id',this.findOne)
        application.post('/resumes/',this.save)
        application.put('/resumes/:id',this.replace)
        application.patch('/resumes/:id',this.update)
        application.del('/resumes/:id',this.delete)
                        
    }
    
    
}

export const resumeRouters = new ResumeRouters();