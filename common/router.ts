import * as restify from 'restify'
import { EventEmitter } from 'events';
import { NotFoundError } from 'restify-errors';
export abstract class Router extends EventEmitter{
    abstract applyRoutes(application:restify.Server)

    render (resp:restify.Response, next:restify.Next){
        return (doc) => {
            if (doc){
                resp.json(doc)
            }else{
                throw new NotFoundError("Não encontrado")
            }
            return next()
        }

    }
}