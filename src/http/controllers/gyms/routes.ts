import { FastifyInstance } from "fastify";
import { verifyJwt } from "../../middlewares/verify-jwt";
import { SearchGymsController } from "./search";
import { NearbyGymsController } from "./nearby";
import { CreateGymController } from "./create";

export const gymsRoutes = async (app: FastifyInstance) => {
  app.addHook("onRequest", verifyJwt);
  
  app.post("/gyms", CreateGymController);
  app.get("/gyms/search", SearchGymsController);
  app.get("/gyms/nearby", NearbyGymsController);
};
