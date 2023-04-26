const { daysAgo } = require("../../helper");

const getRandomInt = function getRandomInt(max) {
  return Math.floor(Math.random() * max);
};

const createDummyReviewsForHeatMap = function () {
  const dummyReviews = [];
  const days = [...Array(150).keys()];
  days.forEach((day) => {
    const reviewsForDay = [...Array(getRandomInt(26)).keys()];
    reviewsForDay.forEach((e) => {
      const review = {
        reponse_type: "GOOD",
        reviewd_at: daysAgo(day),
        cardId: "2da8814a-def9-11ed-b5ea-0242ac120002",
      };
      dummyReviews.push(review);
    });
  });
  return dummyReviews;
};

module.exports = createDummyReviewsForHeatMap();
