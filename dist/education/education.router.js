"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_router_1 = require("../common/model-router");
const education_model_1 = require("./education.model");
class EducationRouters extends model_router_1.modelRouter {
    constructor() {
        super(education_model_1.Education);
        this.on('beforeRender', doc => {
            delete document.text;
        });
    }
    applyRoutes(application) {
        application.get('/educations', this.findAll);
        application.get('/educations/:id', this.findOne);
        application.post('/educations/', this.save);
        application.put('/educations/:id', this.replace);
        application.patch('/educations/:id', this.update);
        application.del('/educations/:id', this.delete);
    }
}
exports.educationRouters = new EducationRouters();
