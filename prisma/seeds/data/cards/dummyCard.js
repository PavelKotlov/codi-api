const { daysAgo } = require('../../helper');

const created_at = daysAgo(500);
const updated_at = daysAgo(500);
const type = 'CONCEPT';
const topicId = '8e3399e6-1d94-11ec-9621-0242ac130002';
module.exports = [
  {
    id: '2da8814a-def9-11ed-b5ea-0242ac120002',
    front: 'How does JavaScript interact with the DOM?',
    back: 'JavaScript can interact with the DOM using a variety of methods and properties provided by the DOM API. For example, JavaScript can access and modify the content of HTML elements using the innerHTML property, or manipulate the style of elements using the style property. JavaScript can also create new elements, remove existing elements, or change the order of elements in the DOM tree using methods like createElement, appendChild, and removeChild.',
    tags: {
      connect: {
        name: 'functions',
      },
    },
    type,
    topicId,
    created_at,
    updated_at,
    status: 'GRADUATED',
    interval: 1000,
    ease_factor: 2.5,
  },
];
