"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_router_1 = require("../common/model-router");
const user_model_1 = require("./user.model");
class UserRouters extends model_router_1.modelRouter {
    constructor() {
        super(user_model_1.User);
        this.on('beforeRender', doc => {
            delete document.text;
        });
    }
    applyRoutes(application) {
        application.get('/user', this.findAll);
        application.get('/user/:id', this.findOne);
        application.post('/user/', this.save);
        application.put('/user/:id', this.replace);
        application.patch('/user/:id', this.update);
        application.del('/user/:id', this.delete);
    }
}
exports.userRouters = new UserRouters();
