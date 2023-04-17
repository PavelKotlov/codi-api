const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const Users = require('./data/users');
const Topics = require('./data/topics');
const Cards = require('./data/cards');
const Tags = require('./data/tags');

async function main() {
  // Users
  await Promise.all(
    Users.map(async (user) =>
      prisma.user.upsert({
        where: { id: user.id },
        update: {},
        create: user,
      })
    )
  );

  // Tags
  await Promise.all(
    Tags.map(async (tag) =>
      prisma.tag.upsert({
        where: { name: tag.name },
        update: {},
        create: tag,
      })
    )
  );

  // Topics
  await Promise.all(
    Topics.map(async (topic) =>
      prisma.topic.upsert({
        where: { id: topic.id },
        update: {},
        create: topic,
      })
    )
  );

  // Cards
  await Promise.all(
    Cards.map(async (card) =>
      prisma.card.upsert({
        where: { id: card.id },
        update: {},
        create: card,
      })
    )
  );
}

main()
  .catch((e) => {
    console.error(`There was an error while seeding: ${e}`);
    process.exit(1);
  })
  .finally(async () => {
    console.log('Successfully seeded database. Closing connection.');
    await prisma.$disconnect();
  });
