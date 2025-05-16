import { FastifyInstance } from "fastify";
import { verifyJwt } from "../../middlewares/verify-jwt";
import { CreateCheckInController } from "./create";
import { HistoryCheckInsController } from "./history";

export const checkInsRoutes = async (app: FastifyInstance) => {
  app.addHook("onRequest", verifyJwt);

  app.post("/gyms/:gymId/check-ins", CreateCheckInController);
  app.get("/check-ins/history", HistoryCheckInsController);
};
