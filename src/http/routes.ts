import { RegisterController } from "@/http/controllers/register";
import { FastifyInstance } from "fastify";
import { AuthenticateController } from "./controllers/authenticate";
import { ProfileController } from "./controllers/profile";
import { verifyJwt } from "./middlewares/verify-jwt";

export const appRoutes = async (app: FastifyInstance) => {
  app.post("/users", RegisterController);
  app.post("/sessions", AuthenticateController);

  // Authenticated
  app.get("/me", { onRequest: [verifyJwt] }, ProfileController);
};
