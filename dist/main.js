"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server/server");
const post_router_1 = require("./post/post.router");
const resume_router_1 = require("./resume/resume.router");
const author_router_1 = require("./author/author.router");
const project_router_1 = require("./project/project.router");
const user_router_1 = require("./user/user.router");
const education_router_1 = require("./education/education.router");
const job_router_1 = require("./job/job.router");
const socialMedia_router_1 = require("./socialMedia/socialMedia.router");
const server = new server_1.Server()
    .bootstrap([
    post_router_1.postRouters,
    resume_router_1.resumeRouters,
    author_router_1.authorRouters,
    project_router_1.projectRouters,
    user_router_1.userRouters,
    education_router_1.educationRouters,
    job_router_1.jobRouters,
    socialMedia_router_1.socialMediaRouters
]).then(server => {
    console.log("server is listening on port", server.application.address());
}).catch(error => {
    console.log("fudeo a mariola");
    console.error("error");
    process.exit(1);
});
