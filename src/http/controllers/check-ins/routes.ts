import { FastifyInstance } from "fastify";
import { verifyJwt } from "../../middlewares/verify-jwt";
import { CreateCheckInController } from "./create";
import { HistoryCheckInsController } from "./history";
import { ValidateCheckInController } from "./validate";
import { MetricsCheckInsController } from "./metrics";
import { verifyUserRole } from "@/http/middlewares/verify-user-role";
import { Role } from "@prisma";

export const checkInsRoutes = async (app: FastifyInstance) => {
  app.addHook("onRequest", verifyJwt);

  app.post("/gyms/:gymId/check-ins", CreateCheckInController);
  app.get("/check-ins/history", HistoryCheckInsController);
  app.patch("/check-ins/:checkInId/validate", ValidateCheckInController);
  app.get("/check-ins/metrics", MetricsCheckInsController);
  app.patch(
    "/check-ins/:checkInId/validate",
    { preHandler: verifyUserRole(Role.ADMIN) },
    ValidateCheckInController
  );
};
