const { PrismaClient, Status } = require('@prisma/client');
const prisma = new PrismaClient();
const { daysAgo } = require('../prisma/seeds/helper');

const getTotalCards = async function (id) {
  const total = await prisma.card.aggregate({
    _count: {
      id: true,
    },
    where: {
      topicId: id,
    },
  });
  return total._count.id;
};

const getNewCards = async function (id) {
  const newCards = await prisma.card.aggregate({
    _count: {
      id: true,
    },
    where: {
      topicId: id,
      status: 'NEW',
    },
  });
  return newCards._count.id;
};

const getLearningCards = async function (id) {
  const learningCards = await prisma.card.aggregate({
    _count: {
      id: true,
    },
    where: {
      topicId: id,
      status: 'LEARNING',
    },
  });
  return learningCards._count.id;
};

const getGraduatedCards = async function (id) {
  const graduatedCards = await prisma.card.aggregate({
    _count: {
      id: true,
    },
    where: {
      topicId: id,
      status: 'GRADUATED',
    },
  });
  return graduatedCards._count.id;
};

const getMatureCards = async function (id) {
  const matureCards = await prisma.card.aggregate({
    _count: {
      id: true,
    },
    where: {
      topicId: id,
      interval: {
        gte: 21,
      },
    },
  });
  return matureCards._count.id;
};

const getCardsCountGroupedByEaseFactor = async function (id) {
  const data = await prisma.card.groupBy({
    by: ['ease_factor'],
    _count: {
      id: true,
    },
    where: {
      topicId: id,
      status: 'GRADUATED',
    },
  });
  return data.map((e) => {
    return { ease_factor: e.ease_factor, count: e._count.id };
  });
};

const getReviewsByDate = async function (id) {
  const reviews = await prisma.review.groupBy({
    by: ['reviewd_at'],
    _count: {
      id: true,
    },
    where: {
      card: {
        topicId: id,
      },
      reviewd_at: {
        gte: daysAgo(365),
      },
    },
  });
  const groupedData = {};

  reviews.forEach((item) => {
    const date = new Date(item.reviewd_at).toISOString().substr(0, 10);
    if (!groupedData[date]) {
      groupedData[date] = { count: item._count.id, date: date };
    } else {
      groupedData[date].count += item._count.id;
    }
  });

  const reviews_results = Object.values(groupedData);
  reviews_results.sort((a, b) => {
    if (a.date < b.date) {
      return -1;
    }
    if (a.date > b.date) {
      return 1;
    }
    return 0;
  });

  return reviews_results;
};

module.exports = {
  getTotalCards,
  getNewCards,
  getLearningCards,
  getMatureCards,
  getGraduatedCards,
  getReviewsByDate,
  getCardsCountGroupedByEaseFactor,
};
