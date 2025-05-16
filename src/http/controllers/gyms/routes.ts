import { FastifyInstance } from "fastify";
import { verifyJwt } from "../../middlewares/verify-jwt";

export const gymsRoutes = async (app: FastifyInstance) => {
  app.addHook("onRequest", verifyJwt);
//   app.post("/gyms", { onRequest: [verifyJwt] }, CreateGymController);
//   app.get("/gyms/search", SearchGymsController);
//   app.get("/gyms/nearby", SearchGymsByDistanceController);
};
