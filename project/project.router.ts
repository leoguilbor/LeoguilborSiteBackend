import { NotFoundError } from "restify-errors";
import { modelRouter } from "../common/model-router";
import * as restify from 'restify'
import { userInfo } from "os";

import { Project} from "./project.model";



class ProjectRouters extends modelRouter<Project>{

    constructor(){
        super(Project)
        this.on('beforeRender',doc=>{
            delete (<any> document).text 
        })
    }

    applyRoutes(application: restify.Server){
        
        application.get('/portifolio',this.findAll)
        application.get('/portifolio/:id',this.findOne)
        application.post('/portifolio/',this.save)
        application.put('/portifolio/:id',this.replace)
        application.patch('/portifolio/:id',this.update)
        application.del('/portifolio/:id',this.delete)
                        
    }
    
    
}

export const projectRouters = new ProjectRouters();