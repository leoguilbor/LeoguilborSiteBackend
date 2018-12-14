"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_router_1 = require("../common/model-router");
const job_model_1 = require("./job.model");
class JobRouters extends model_router_1.modelRouter {
    constructor() {
        super(job_model_1.Job);
        this.on('beforeRender', doc => {
            delete document.text;
        });
    }
    applyRoutes(application) {
        application.get('/jobs', this.findAll);
        application.get('/jobs/:id', this.findOne);
        application.post('/jobs/', this.save);
        application.put('/jobs/:id', this.replace);
        application.patch('/jobs/:id', this.update);
        application.del('/jobs/:id', this.delete);
    }
}
exports.jobRouters = new JobRouters();
