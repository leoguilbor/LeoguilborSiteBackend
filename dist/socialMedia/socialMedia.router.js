"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_router_1 = require("../common/model-router");
const socialMedia_model_1 = require("./socialMedia.model");
class SocialMediaRouters extends model_router_1.modelRouter {
    constructor() {
        super(socialMedia_model_1.SocialMedia);
        this.on('beforeRender', doc => {
            delete document.text;
        });
    }
    applyRoutes(application) {
        application.get('/socialMedias', this.findAll);
        application.get('/socialMedias/:id', this.findOne);
        application.post('/socialMedias/', this.save);
        application.put('/socialMedias/:id', this.replace);
        application.patch('/socialMedias/:id', this.update);
        application.del('/socialMedias/:id', this.delete);
    }
}
exports.socialMediaRouters = new SocialMediaRouters();
