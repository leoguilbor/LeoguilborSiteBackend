"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_router_1 = require("../common/model-router");
const post_model_1 = require("./post.model");
class PostRouters extends model_router_1.modelRouter {
    constructor() {
        super(post_model_1.Post);
        this.on('beforeRender', doc => {
            delete document.text;
        });
    }
    applyRoutes(application) {
        application.get('/posts', this.findAll);
        application.get('/posts/:id', this.findOne);
        application.post('/posts/', this.save);
        application.put('/posts/:id', this.replace);
        application.patch('/posts/:id', this.update);
        application.del('/posts/:id', this.delete);
    }
}
exports.postRouters = new PostRouters();
