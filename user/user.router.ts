import { NotFoundError } from "restify-errors";
import { modelRouter } from "../common/model-router";
import * as restify from 'restify'
import { userInfo } from "os";

import { User } from "./user.model";



class UserRouters extends modelRouter<User>{

    constructor(){
        super(User)
        this.on('beforeRender',doc=>{
            delete (<any> document).text 
        })
    }

    applyRoutes(application: restify.Server){
        
        application.get('/user',this.findAll)
        application.get('/user/:id',this.findOne)
        application.post('/user/',this.save)
        application.put('/user/:id',this.replace)
        application.patch('/user/:id',this.update)
        application.del('/user/:id',this.delete)
                        
    }
    
    
}

export const userRouters = new UserRouters();