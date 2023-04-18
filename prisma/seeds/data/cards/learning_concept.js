const { daysAgo } = require('../../helper');
const created_at = daysAgo(60);
const updated_at = daysAgo(60);
const type = 'CONCEPT';
const topicId = '8e3399e6-1d94-11ec-9621-0242ac130002';
const status = 'LEARNING';

module.exports = [
  // Learning Ruby Card
  {
    front: 'What is a module in Ruby?',
    back: 'A module in Ruby is a collection of related methods, classes, and constants that can be used to share functionality among multiple classes or to organize code within a single class.',

    tags: {
      connect: [
        {
          name: 'oop',
        },
        {
          name: 'modules',
        },
      ],
    },
    reviews: {
      create: {
        reponse_type: 'GOOD',
        reviewd_at: daysAgo(0),
      },
    },
    topicId: 'b09a169e-dce8-11ed-afa1-0242ac120002',
    status,
    type,
    updated_at,
    created_at,
  },

  // Learning js cards /////////////////////////////////////////////////////////////////////
  {
    front: 'What is a callback function in JavaScript?',
    back: `A callback function is a function that is passed as an argument to another function, and is invoked inside the other function. Callback functions are commonly used in JavaScript to handle asynchronous code and event handling.`,
    tags: {
      connect: [
        {
          name: 'functions',
        },
        {
          name: 'asynchronous programming',
        },
      ],
    },
    reviews: {
      create: {
        reponse_type: 'GOOD',
        reviewd_at: daysAgo(0),
      },
    },
    topicId,
    status,
    type,
    created_at,
    updated_at,
  },
  {
    front: 'What is a higher-order function in JavaScript?',
    back: `A higher-order function is a function that takes another function as an argument, or returns a function as its result. This allows for the creation of more flexible and reusable code, and is commonly used in JavaScript for functional programming. `,
    tags: {
      connect: [
        {
          name: 'functions',
        },
        {
          name: 'functional programming',
        },
      ],
    },
    reviews: {
      create: {
        reponse_type: 'HARD',
        reviewd_at: daysAgo(1),
      },
    },
    topicId,
    status,
    type,
    created_at,
    updated_at,
  },
  {
    front:
      'What is the difference between synchronous and asynchronous JavaScript?',
    back: `Synchronous JavaScript executes code in a blocking manner, meaning that one line of code must finish executing before the next line can be executed. Asynchronous JavaScript allows multiple lines of code to execute at the same time, and it utilizes callback functions, promises, and async/await to manage the asynchronous code flow.`,
    tags: {
      connect: [
        {
          name: 'asynchronous programming',
        },
        {
          name: 'js basics',
        },
      ],
    },
    reviews: {
      create: {
        reponse_type: 'AGAIN',
        reviewd_at: daysAgo(2),
      },
    },
    topicId,
    status,
    type,
    created_at,
    updated_at,
  },
  {
    front: 'What is the event loop in JavaScript?',
    back: `The event loop is a core concept in JavaScript that manages the execution of asynchronous code. It is responsible for queuing and executing callback functions, and it ensures that JavaScript's single-threaded nature is maintained while still allowing for asynchronous operations.`,
    tags: {
      connect: [
        {
          name: 'asynchronous programming',
        },
        {
          name: 'js basics',
        },
      ],
    },
    reviews: {
      create: {
        reponse_type: 'GOOD',
        reviewd_at: daysAgo(2),
      },
    },
    topicId,
    status,
    type,
    created_at,
    updated_at,
  },
  {
    front: 'What is hoisting in JavaScript?',
    back: `Hoisting is a JavaScript mechanism that allows variables and function declarations to be used before they are declared in the code. Function declarations are hoisted before variables, and variable assignments are not hoisted. It is generally considered good practice to declare variables before using them to avoid unexpected behavior.`,
    tags: {
      connect: [
        {
          name: 'js basics',
        },
        {
          name: 'variable declaration',
        },
      ],
    },
    reviews: {
      create: {
        reponse_type: 'GOOD',
        reviewd_at: daysAgo(3),
      },
    },
    topicId,
    status,
    type,
    created_at,
    updated_at,
  },
  {
    front: 'What is the difference between a for loop and a forEach loop?',
    back: `A for loop is a traditional loop that allows you to iterate over an array or object, while a forEach loop is a method that is called on an array and iterates over its elements. For loops allow for more flexibility and control over the iteration process, while forEach loops provide a more concise syntax for simple iterations.`,
    tags: {
      connect: [
        {
          name: 'js basics',
        },
        {
          name: 'loops',
        },
      ],
    },
    reviews: {
      create: {
        reponse_type: 'HARD',
        reviewd_at: daysAgo(3),
      },
    },
    topicId,
    status,
    type,
    created_at,
    updated_at,
  },
  {
    front: 'What is the difference between null and undefined in JavaScript?',
    back: `null is an intentional absence of any object value, while undefined means a variable has been declared but has not been assigned a value. null is a value, while undefined is a type. In most cases, null and undefined can be used interchangeably.`,
    tags: {
      connect: [
        {
          name: 'js basics',
        },
        {
          name: 'variable declaration',
        },
        {
          name: 'data types',
        },
      ],
    },
    reviews: {
      create: {
        reponse_type: 'GOOD',
        reviewd_at: daysAgo(4),
      },
    },
    topicId,
    status,
    type,
    created_at,
    updated_at,
  },
];
