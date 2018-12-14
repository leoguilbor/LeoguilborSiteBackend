import * as restify from 'restify'
import { Router } from "./router";
import * as mongoose from 'mongoose';
import { NotFoundError } from 'restify-errors';

export abstract class modelRouter <D extends mongoose.Document> extends Router{
    constructor(protected model: mongoose.Model<D>){
        super()
    }
    
    
    validateId = (req,resp,next)=>{
        if (!mongoose.Types.ObjectId.isValid(req.params.id)){
            next(new NotFoundError('Documento não encontrado'))
        }else{
            next()
        }

    }

    findAll = (req,resp,next)=>{
        this.model.find()
            .then(this.render(resp,next))
            .catch(next)
    }

    findOne = (req,resp,next)=>{
        this.model.findById(req.params.id)
            .then(this.render(resp,next))
            .catch(next)
    }

    save = (req,resp,next)=>{           
        let post = new this.model(req.body)
        post.save()
            .then(this.render(resp,next))
            .catch(next)
                    
    }
    replace = (req,resp,next)=>{           
        const options = {runValidators:true, overwrite:true}
        const id_p = req.params.id
        this.model.update({_id:req.params.id},req.body, options)
            .exec().then(result=>{
             if (result.n){
                 return this.model.findById(id_p)[0]
             }else{
                 throw new NotFoundError("Documento não encontrado")
             }
            
        }).then(this.render(resp,next))
          .catch(next)
    }
    
    update = (req,resp,next)=>{
        const options = {runValidators:true,new:true}
        this.model.findByIdAndUpdate(req.params.id,req.body,options)
            .then(this.render(resp,next))
            .catch(next)
    }

    delete = (req,resp,next)=>{
        const options = {new:true}
        this.model.remove({_id:req.params.id})
                .exec().then((cmdResult:any)=>{
                    if(cmdResult.result.n){
                        resp.send(204)
                    }else{
                        throw new NotFoundError("Documento não encontrado")
                    }
                    return next()
                }).catch(next)
        return next()
    }
}