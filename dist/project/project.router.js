"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_router_1 = require("../common/model-router");
const project_model_1 = require("./project.model");
class ProjectRouters extends model_router_1.modelRouter {
    constructor() {
        super(project_model_1.Project);
        this.on('beforeRender', doc => {
            delete document.text;
        });
    }
    applyRoutes(application) {
        application.get('/portifolio', this.findAll);
        application.get('/portifolio/:id', this.findOne);
        application.post('/portifolio/', this.save);
        application.put('/portifolio/:id', this.replace);
        application.patch('/portifolio/:id', this.update);
        application.del('/portifolio/:id', this.delete);
    }
}
exports.projectRouters = new ProjectRouters();
