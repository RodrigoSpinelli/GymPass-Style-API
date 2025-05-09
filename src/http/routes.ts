import { RegisterController } from "@/http/controllers/register";
import { FastifyInstance } from "fastify";

export const appRoutes = async (app: FastifyInstance) => {
  app.post("/users", RegisterController);
};
