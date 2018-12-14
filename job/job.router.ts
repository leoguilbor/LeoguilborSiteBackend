import { NotFoundError } from "restify-errors";
import { modelRouter } from "../common/model-router";
import * as restify from 'restify'
import { userInfo } from "os";

import { Job } from "./job.model";



class JobRouters extends modelRouter<Job>{

    constructor(){
        super(Job)
        this.on('beforeRender',doc=>{
            delete (<any> document).text 
        })
    }

    applyRoutes(application: restify.Server){
        
        application.get('/jobs',this.findAll)
        application.get('/jobs/:id',this.findOne)
        application.post('/jobs/',this.save)
        application.put('/jobs/:id',this.replace)
        application.patch('/jobs/:id',this.update)
        application.del('/jobs/:id',this.delete)
                        
    }
    
    
}

export const jobRouters = new JobRouters();