import { RegisterController } from "@/http/controllers/register";
import { FastifyInstance } from "fastify";
import { AuthenticateController } from "./controllers/authenticate";

export const appRoutes = async (app: FastifyInstance) => {
  app.post("/users", RegisterController);
  app.post("/sessions", AuthenticateController);
};
