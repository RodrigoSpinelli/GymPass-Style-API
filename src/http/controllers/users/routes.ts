import { RegisterController } from "@/http/controllers/users/register";
import { FastifyInstance } from "fastify";
import { AuthenticateController } from "./authenticate";
import { ProfileController } from "./profile";
import { verifyJwt } from "../../middlewares/verify-jwt";

export const usersRoutes = async (app: FastifyInstance) => {
  app.post("/users", RegisterController);
  app.post("/sessions", AuthenticateController);

  // Authenticated
  app.get("/me", { onRequest: [verifyJwt] }, ProfileController);

};
