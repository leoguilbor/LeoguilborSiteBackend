import { NotFoundError } from "restify-errors";
import { modelRouter } from "../common/model-router";
import * as restify from 'restify'
import { userInfo } from "os";

import { Author } from "./author.model";



class AuthorRouters extends modelRouter<Author>{

    constructor(){
        super(Author)
        this.on('beforeRender',doc=>{
            delete (<any> document).text 
        })
    }

    applyRoutes(application: restify.Server){
        
        application.get('/authors',this.findAll)
        application.get('/authors/:id',this.findOne)
        application.post('/authors/',this.save)
        application.put('/authors/:id',this.replace)
        application.patch('/authors/:id',this.update)
        application.del('/authors/:id',this.delete)
                        
    }   

}

export const authorRouters = new AuthorRouters();