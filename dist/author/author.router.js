"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_router_1 = require("../common/model-router");
const author_model_1 = require("./author.model");
class AuthorRouters extends model_router_1.modelRouter {
    constructor() {
        super(author_model_1.Author);
        this.on('beforeRender', doc => {
            delete document.text;
        });
    }
    applyRoutes(application) {
        application.get('/authors', this.findAll);
        application.get('/authors/:id', this.findOne);
        application.post('/authors/', this.save);
        application.put('/authors/:id', this.replace);
        application.patch('/authors/:id', this.update);
        application.del('/authors/:id', this.delete);
    }
}
exports.authorRouters = new AuthorRouters();
