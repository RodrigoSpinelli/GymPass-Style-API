import { Role } from "@prisma";
import { FastifyRequest, FastifyReply } from "fastify";

export function verifyUserRole(roleToVerify: Role) {
  return async (request: FastifyRequest, reply: FastifyReply) => {
    const { role } = request.user;

    if (role !== roleToVerify) {
      return reply
        .status(403)
        .send({ message: `Only ${roleToVerify} can access this resource.` });
    }
  };
}
