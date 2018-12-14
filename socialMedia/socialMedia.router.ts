import { NotFoundError } from "restify-errors";
import { modelRouter } from "../common/model-router";
import * as restify from 'restify'
import { userInfo } from "os";

import { SocialMedia } from "./socialMedia.model";



class SocialMediaRouters extends modelRouter<SocialMedia>{

    constructor(){
        super(SocialMedia)
        this.on('beforeRender',doc=>{
            delete (<any> document).text 
        })
    }

    applyRoutes(application: restify.Server){
        
        application.get('/socialMedias',this.findAll)
        application.get('/socialMedias/:id',this.findOne)
        application.post('/socialMedias/',this.save)
        application.put('/socialMedias/:id',this.replace)
        application.patch('/socialMedias/:id',this.update)
        application.del('/socialMedias/:id',this.delete)
                        
    }
    
    
}

export const socialMediaRouters = new SocialMediaRouters();