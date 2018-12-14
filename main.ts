import {Server} from './server/server'
import { postRouters } from './post/post.router';
import { resumeRouters } from './resume/resume.router';
import { authorRouters } from './author/author.router';
import { projectRouters } from './project/project.router';
import { userRouters } from './user/user.router';
import { educationRouters } from './education/education.router';
import { jobRouters } from './job/job.router';
import { socialMediaRouters } from './socialMedia/socialMedia.router';


const server = new Server()
        .bootstrap([
                    postRouters,
                    resumeRouters,
                    authorRouters,
                    projectRouters,
                    userRouters,
                    educationRouters,
                    jobRouters,
                    socialMediaRouters
                ]).then(server=>{
    console.log("server is listening on port", server.application.address())
}).catch(error=>{
    console.log("fudeo a mariola")
    console.error("error")
    process.exit(1)
})




