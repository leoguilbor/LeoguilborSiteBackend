import { NotFoundError } from "restify-errors";
import { modelRouter } from "../common/model-router";
import * as restify from 'restify'
import { userInfo } from "os";

import { Post } from "./post.model";



class PostRouters extends modelRouter<Post>{

    constructor(){
        super(Post)
        this.on('beforeRender',doc=>{
            delete (<any> document).text 
        })
    }

    applyRoutes(application: restify.Server){
        
        application.get('/posts',this.findAll)
        application.get('/posts/:id',this.findOne)
        application.post('/posts/',this.save)
        application.put('/posts/:id',this.replace)
        application.patch('/posts/:id',this.update)
        application.del('/posts/:id',this.delete)
                        
    }
    
    
}

export const postRouters = new PostRouters();