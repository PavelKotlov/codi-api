const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const generateFlashcards = require('../helpers/openai');
const prisma = new PrismaClient();

//TODO: ONE PERSON AT A TIME ! Match router pattern with Juliana's

// Start a study session (quiz)
// Give priority to cards due today , then older cards, then learning then new
// Limit to the max_cards in the topic
router.get('/:id/cards/quiz', async (req, res) => {
  const topic = await prisma.topic.findUnique({
    where: { id: req.params.id },
  });

  const cards = await prisma.card.findMany({
    orderBy: [{ status: 'desc' }, { due_at: 'desc' }],
    where: {
      topicId: req.params.id,
      OR: [
        { due_at: null },
        {
          due_at: {
            lte: new Date(),
          },
        },
      ],
    },

    take: topic.max_cards,
  });

  const result = {
    cards,
  };

  res.json(result);
});

router.get('/:id/cards/:card_id', async (req, res) => {
  const card = await prisma.card.findUnique({
    where: { id: req.params.card_id },
  });
  res.json(card);
});

router.delete('/:id/cards/:card_id', async (req, res) => {
  const card = await prisma.card.delete({
    where: { id: req.params.card_id },
  });
  res.json(card);
});

// Browse Cards
router.get('/:id/cards', async (req, res) => {
  const cards = await prisma.card.findMany({
    where: {
      topicId: req.params.id,
    },
  });

  const result = {
    cards,
  };
  res.json(result);
});
/* add card */
router.put('/:id/cards', async (req, res) => {
  const { front, back, type, tags, note, auto } = req.body;

  const main = async () => {
    try {
      if (auto && type === 'CONCEPT') {
        const flashcards = await generateFlashcards(type, note);
        console.log('flashcards', flashcards);
        cards = JSON.parse(flashcards);

        const newCards = await Promise.all(
          cards.map(async (flashcard) => {
            return prisma.card.create({
              data: {
                topicId: req.params.id,
                front: flashcard.question,
                back: flashcard.answer,
                status: 'NEW',
                type,
                tags: tags
                  ? {
                      connectOrCreate: tags.map((tag) => ({
                        where: { name: tag },
                        create: { name: tag },
                      })),
                    }
                  : {},
              },
            });
          })
        );
        res.status(200).json(newCards);
      } else {
        let flashcard;
        if (auto && type === 'CHALLENGE') {
          const autoGeneratedCard = await generateFlashcards(type, back);
          console.log('flashcard', autoGeneratedCard);
          card = JSON.parse(autoGeneratedCard);

          flashcard = {
            front: card.exercise,
            back: card.answer,
          };
        } else {
          flashcard = { front, back };
        }

        const newCard = await prisma.card.create({
          data: {
            topicId: req.params.id,
            front: flashcard.front,
            back: flashcard.back,
            status: 'NEW',
            type,
            tags: tags
              ? {
                  connectOrCreate: tags.map((tag) => ({
                    where: { name: tag },
                    create: { name: tag },
                  })),
                }
              : {},
          },
        });
        res.status(200).json(newCard);
      }
    } catch (e) {
      console.log(e.message);
      res.status(500).json('Internal server error');
    }
  };

  main()
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });
});

/* edit card */
router.patch('/:id/cards/:card_id', async (req, res) => {
  const { front, back, tags, review, status, ease_factor, interval, due_at } =
    req.body;

  const main = async () => {
    try {
      if (!review) {
        const updatedCard = await prisma.card.update({
          where: { id: req.params.card_id },
          data: {
            front,
            back,
            tags: tags
              ? {
                  connectOrCreate: tags.map((tag) => ({
                    where: { name: tag },
                    create: { name: tag },
                  })),
                }
              : {},
          },
        });
        res.status(200).json(updatedCard);
      } else {
        const updatedCard = await prisma.card.update({
          where: { id: req.params.card_id },
          data: {
            reviews: {
              create: {
                reponse_type: review.response,
                reviewd_at: review.date,
              },
            },
            status,
            ease_factor,
            interval,
            due_at,
          },
        });
        res.status(200).json(updatedCard);
      }
    } catch (e) {
      console.log(e.message);
      res.status(500).json('Internal server error');
    }
  };

  main()
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });
});

module.exports = router;
