import { FastifyInstance } from "fastify";
import { verifyJwt } from "../../middlewares/verify-jwt";
import { SearchGymsController } from "./search";
import { NearbyGymsController } from "./nearby";
import { CreateGymController } from "./create";
import { verifyUserRole } from "@/http/middlewares/verify-user-role";
import { Role } from "@prisma";

export const gymsRoutes = async (app: FastifyInstance) => {
  app.addHook("onRequest", verifyJwt);

  app.post(
    "/gyms",
    { preHandler: verifyUserRole(Role.ADMIN) },
    CreateGymController
  );
  app.get("/gyms/search", SearchGymsController);
  app.get("/gyms/nearby", NearbyGymsController);
};
