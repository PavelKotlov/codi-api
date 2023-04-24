const { auth, requiredScopes } = require('express-oauth2-jwt-bearer');

const checkJwt = auth({
  audience: process.env.AUTH0_AUDIENCE,
  issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
});
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const isAuthorized = async function (topic_id, user_id) {
  const topic = await prisma.topic.findUnique({
    where: {
      id: topic_id,
    },
  });
  if (topic.userId !== user_id) {
    return false;
  }
  return topic;
};

module.exports = { checkJwt, isAuthorized };
