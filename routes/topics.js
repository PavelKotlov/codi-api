const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const {
  getTotalCards,
  getNewCards,
  getLearningCards,
  getMatureCards,
  getGraduatedCards,
  getReviewsByDate,
  getCardsCountGroupedByEaseFactor,
} = require("../db/stats");
const prisma = new PrismaClient();

const { checkJwt, isAuthorized } = require("../helpers/auth");

//TODO: ONE PERSON AT A TIME ! Match router pattern with Juliana's

//Get one topic by id
router.get("/:id", checkJwt, async (req, res) => {
  const topic = await isAuthorized(req.params.id, req.auth.payload.sub);
  if (!topic) {
    res.status(401).json("Unauthorized");
    return;
  }
  res.json(topic);
});

// Get one topic stats
router.get("/:id/stats", checkJwt, async (req, res) => {
  const topic = await isAuthorized(req.params.id, req.auth.payload.sub);
  console.log(topic);
  if (!topic) {
    res.status(401).json("Unauthorized");
    return;
  }

  const total = await getTotalCards(req.params.id);
  const newCards = await getNewCards(req.params.id);
  const learning = await getLearningCards(req.params.id);
  const mature = await getMatureCards(req.params.id);
  const graduated = await getGraduatedCards(req.params.id);
  const reviews = await getReviewsByDate(req.params.id);
  const ease = await getCardsCountGroupedByEaseFactor(req.params.id);

  const result = {
    topic,
    cardsStats: {
      total,
      new: newCards,
      learning,
      graduated,
      mature,
    },
    ease,
    reviews,
  };
  res.json(result);
});

//Delete a topic
router.delete("/:id", checkJwt, async (req, res) => {
  const topic = await isAuthorized(req.params.id, req.auth.payload.sub);

  if (!topic) {
    res.status(401).json("Unauthorized");
    return;
  }

  await prisma.topic.delete({
    where: { id: req.params.id },
  });

  res.json();
});

//Get All topics for a user
router.get("/", checkJwt, async (req, res) => {
  const topics = await prisma.topic.findMany({
    where: {
      userId: req.auth.payload.sub,
    },
    orderBy: [{ created_at: "desc" }],
  });
  console.log("req.auth.payload.sub", req.auth.payload.sub);
  res.json(topics);
});

//Create a topic under a user
router.post("/", checkJwt, (req, res) => {
  const body = req.body;
  const data = {
    ...body,
    userId: req.auth.payload.sub,
  };

  prisma.topic.create({ data }).then((topic) => {
    res.status(201).json(topic);
  });
});

/* update topic */
router.patch("/:id", checkJwt, async (req, res) => {
  const topic = await isAuthorized(req.params.id, req.auth.payload.sub);

  if (!topic) {
    res.status(401).json("Unauthorized");
    return;
  }

  const { name, image_url, max_cards } = req.body;

  try {
    const updatedTopic = await prisma.topic.update({
      where: { id: req.params.id },
      data: {
        name,
        image_url,
        max_cards,
      },
    });
    res.status(200).json(updatedTopic);
  } catch (e) {
    console.log(e.message);
    res.status(500).json("Internal server error");
  }
});

module.exports = router;
