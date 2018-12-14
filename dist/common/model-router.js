"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("./router");
const mongoose = require("mongoose");
const restify_errors_1 = require("restify-errors");
class modelRouter extends router_1.Router {
    constructor(model) {
        super();
        this.model = model;
        this.validateId = (req, resp, next) => {
            if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
                next(new restify_errors_1.NotFoundError('Documento não encontrado'));
            }
            else {
                next();
            }
        };
        this.findAll = (req, resp, next) => {
            this.model.find()
                .then(this.render(resp, next))
                .catch(next);
        };
        this.findOne = (req, resp, next) => {
            this.model.findById(req.params.id)
                .then(this.render(resp, next))
                .catch(next);
        };
        this.save = (req, resp, next) => {
            let post = new this.model(req.body);
            post.save()
                .then(this.render(resp, next))
                .catch(next);
        };
        this.replace = (req, resp, next) => {
            const options = { runValidators: true, overwrite: true };
            const id_p = req.params.id;
            this.model.update({ _id: req.params.id }, req.body, options)
                .exec().then(result => {
                if (result.n) {
                    return this.model.findById(id_p)[0];
                }
                else {
                    throw new restify_errors_1.NotFoundError("Documento não encontrado");
                }
            }).then(this.render(resp, next))
                .catch(next);
        };
        this.update = (req, resp, next) => {
            const options = { runValidators: true, new: true };
            this.model.findByIdAndUpdate(req.params.id, req.body, options)
                .then(this.render(resp, next))
                .catch(next);
        };
        this.delete = (req, resp, next) => {
            const options = { new: true };
            this.model.remove({ _id: req.params.id })
                .exec().then((cmdResult) => {
                if (cmdResult.result.n) {
                    resp.send(204);
                }
                else {
                    throw new restify_errors_1.NotFoundError("Documento não encontrado");
                }
                return next();
            }).catch(next);
            return next();
        };
    }
}
exports.modelRouter = modelRouter;
