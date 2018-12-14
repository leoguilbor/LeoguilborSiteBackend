import { NotFoundError } from "restify-errors";
import { modelRouter } from "../common/model-router";
import * as restify from 'restify'
import { userInfo } from "os";

import { Education } from "./education.model"



class EducationRouters extends modelRouter<Education>{

    constructor(){
        super(Education)
        this.on('beforeRender',doc=>{
            delete (<any> document).text 
        })
    }

    applyRoutes(application: restify.Server){
        
        application.get('/educations',this.findAll)
        application.get('/educations/:id',this.findOne)
        application.post('/educations/',this.save)
        application.put('/educations/:id',this.replace)
        application.patch('/educations/:id',this.update)
        application.del('/educations/:id',this.delete)
                        
    }
    
    
}

export const educationRouters = new EducationRouters();