const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const Users = require('./data/users');
const Topics = require('./data/topics');
const Tags = require('./data/tags');
const NewConceptCards = require('./data/cards/new_concept');
const NewChallengeCards = require('./data/cards/new_challenge');
const LearningConceptCards = require('./data/cards/learning_concept');
const GraduatedConceptCards = require('./data/cards/graduated_concepts');
const dummyCard = require('./data/cards/dummyCard');
const DummyReviews = require('./data/cards/dummyReviewsForHeatMap');
const Cards = [
  ...dummyCard,
  ...NewConceptCards,
  ...NewChallengeCards,
  ...LearningConceptCards,
  ...GraduatedConceptCards,
];

async function main() {
  // Users
  await Promise.all(
    Users.map(async (user) =>
      prisma.user.create({
        data: user,
      })
    )
  );

  // Tags
  await Promise.all(
    Tags.map(async (tag) =>
      prisma.tag.create({
        data: tag,
      })
    )
  );

  // Topics
  await Promise.all(
    Topics.map(async (topic) =>
      prisma.topic.create({
        data: topic,
      })
    )
  );

  // Cards

  await Promise.all(
    Cards.map(async (card) =>
      prisma.card.create({
        data: card,
      })
    )
  );

  //Dummy reviews
  await Promise.all(
    DummyReviews.map(async (review) =>
      prisma.review.create({
        data: review,
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
