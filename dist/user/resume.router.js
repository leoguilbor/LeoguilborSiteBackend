"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_router_1 = require("../common/model-router");
const resume_model_1 = require("./resume.model");
class ResumeRouters extends model_router_1.modelRouter {
    constructor() {
        super(resume_model_1.Resume);
        this.on('beforeRender', doc => {
            delete document.text;
        });
    }
    applyRoutes(application) {
        application.get('/resumes', this.findAll);
        application.get('/resumes/:id', this.findOne);
        application.post('/resumes/', this.save);
        application.put('/resumes/:id', this.replace);
        application.patch('/resumes/:id', this.update);
        application.del('/resumes/:id', this.delete);
    }
}
exports.resumeRouters = new ResumeRouters();
