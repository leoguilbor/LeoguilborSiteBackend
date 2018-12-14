"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = require("events");
const restify_errors_1 = require("restify-errors");
class Router extends events_1.EventEmitter {
    render(resp, next) {
        return (doc) => {
            if (doc) {
                resp.json(doc);
            }
            else {
                throw new restify_errors_1.NotFoundError("Não encontrado");
            }
            return next();
        };
    }
}
exports.Router = Router;
