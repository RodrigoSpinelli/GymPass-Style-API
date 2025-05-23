import { FastifyRequest, FastifyReply } from "fastify";

export const RefreshController = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  await request.jwtVerify({ onlyCookie: true });

  const { role } = request.user;

  const token = await reply.jwtSign(
    { role },
    { sign: { sub: request.user.sub } }
  );
  const newRefreshToken = await reply.jwtSign(
    { role },
    { sign: { sub: request.user.sub, expiresIn: "7d" } }
  );

  return reply
    .setCookie("refreshToken", newRefreshToken, {
      path: "/",
      secure: true,
      sameSite: true,
      httpOnly: true,
    })
    .status(200)
    .send({
      token,
    });
};
