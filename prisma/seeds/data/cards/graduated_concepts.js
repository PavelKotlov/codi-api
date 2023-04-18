const { daysAgo, inXDays } = require('../../helper');

const created_at = daysAgo(60);
const updated_at = daysAgo(60);
const type = 'CONCEPT';
const topicId = '8e3399e6-1d94-11ec-9621-0242ac130002';
const status = 'GRADUATED';
module.exports = [
  // Graduated due Ruby Cards

  {
    front: 'What is one of the main benefits of using modules in Ruby?',
    back: " One of the main benefits of using modules in Ruby is that they provide a way to achieve multiple inheritance without the need for a class to inherit from the module's superclass.",
    tags: {
      connect: [
        {
          name: 'modules',
        },
        {
          name: 'oop',
        },
        {
          name: 'inheritance',
        },
      ],
    },
    reviews: {
      create: [
        {
          reponse_type: 'GOOD',
          reviewd_at: daysAgo(3),
        },
        {
          reponse_type: 'GOOD',
          reviewd_at: daysAgo(3),
        },
      ],
    },
    ease_factor: 2.5,
    interval: 1,
    due_at: daysAgo(2),
    topicId: 'b09a169e-dce8-11ed-afa1-0242ac120002',
    type,
    status,
    created_at,
    updated_at,
  },

  {
    front: 'What are Ruby datatypes?',
    back: `Numbers: integers and floating-point numbers
           Strings: sequences of characters
           Symbols: immutable identifiers
           Booleans: true or false values
           Arrays: ordered collections of objects
           Hashes: collections of key-value pairs
           Ranges: represents an interval of values
           Regular expressions: patterns for matching text
           Nil: a special value that represents "nothing" or "no value"`,

    tags: {
      connect: [
        {
          name: 'data types',
        },
      ],
    },
    reviews: {
      create: [
        {
          reponse_type: 'GOOD',
          reviewd_at: daysAgo(4),
        },
        {
          reponse_type: 'GOOD',
          reviewd_at: daysAgo(4),
        },
      ],
    },
    ease_factor: 2.5,
    interval: 1,
    due_at: daysAgo(3),
    topicId: 'b09a169e-dce8-11ed-afa1-0242ac120002',
    type,
    status,
    created_at,
    updated_at,
  },
  // Graduated due in the future Ruby card
  {
    front: 'What is code blocks in Ruby?',
    back: `In Ruby, a code block is a chunk of code that can be passed as an argument to a method.
     It is enclosed in either curly braces {} or the do..end keywords.
      When a method is called with a code block, the method can execute the block by yielding control to it.
      Code blocks are commonly used in Ruby to perform iterations,
      filters, and other types of operations on collections of data.
      They provide a concise and flexible way to pass behavior to a method
      without the need to define a separate class or function.`,
    tags: {
      connect: [
        {
          name: 'ruby basics',
        },
      ],
    },
    reviews: {
      create: [
        {
          reponse_type: 'GOOD',
          reviewd_at: daysAgo(1),
        },
        {
          reponse_type: 'GOOD',
          reviewd_at: daysAgo(1),
        },
      ],
    },
    ease_factor: 2.5,
    interval: 1,
    due_at: daysAgo(0),
    topicId: 'b09a169e-dce8-11ed-afa1-0242ac120002',
    type,
    status,
    created_at,
    updated_at,
  },

  // Graduated JS cards ////////////////////////////////////////////
  {
    front: 'What is the DOM in JavaScript?',
    back: `The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. With the DOM, JavaScript can access and modify all the elements of an HTML document.`,

    tags: {
      connect: [
        {
          name: 'dom',
        },
      ],
    },
    reviews: {
      create: [
        {
          reponse_type: 'GOOD',
          reviewd_at: daysAgo(4),
        },
        {
          reponse_type: 'GOOD',
          reviewd_at: daysAgo(4),
        },
        {
          reponse_type: 'GOOD',
          reviewd_at: daysAgo(3),
        },
      ],
    },
    ease_factor: 2.5,
    interval: 3,
    due_at: daysAgo(0),
    topicId,
    type,
    status,
    created_at,
    updated_at,
  },
  {
    front: 'What are JavaScript classes?',
    back: `Classes are a new feature in JavaScript, introduced in ES6, that allow for the creation of reusable, modular code. Classes are essentially blueprints for creating objects, and can include properties and methods that define the object's behavior. Classes provide a more intuitive way to work with objects in JavaScript, and make it easier to create complex applications.`,
    tags: {
      connect: [
        {
          name: 'es6',
        },
        {
          name: 'oop',
        },
        {
          name: 'classes',
        },
      ],
    },
    reviews: {
      create: [
        {
          reponse_type: 'EASY',
          reviewd_at: daysAgo(6),
        },
      ],
    },
    ease_factor: 2.65,
    interval: 4,
    due_at: daysAgo(2),
    topicId,
    type,
    status,
    created_at,
    updated_at,
  },
  {
    front: 'What is a JavaScript event?',
    back: `An event is a signal that something has happened in a web page or application, such as a mouse click, a keypress, or a page load. JavaScript can be used to respond to these events by executing code or changing the page's behavior. Event listeners are used to detect and handle events in JavaScript.`,
    tags: {
      connect: [
        {
          name: 'frontend js',
        },
        {
          name: 'events',
        },
      ],
    },
    reviews: {
      create: [
        {
          reponse_type: 'GOOD',
          reviewd_at: daysAgo(0),
        },
        {
          reponse_type: 'GOOD',
          reviewd_at: daysAgo(0),
        },
      ],
    },
    ease_factor: 2.5,
    interval: 1,
    due_at: inXDays(1),
    topicId,
    type,
    status,
    created_at,
    updated_at,
  },
  {
    front: 'What is a JavaScript callback hell?',
    back: `Callback hell is a term used to describe the problem of nested callbacks in asynchronous JavaScript code, which can make code difficult to read and maintain. Asynchronous code can lead to deeply nested callbacks, which can be hard to follow and debug. One solution to this problem is to use promises or async/await, which provide a more structured way to handle asynchronous code.`,
    tags: {
      connect: [
        {
          name: 'asynchronous programming',
        },
      ],
    },
    reviews: {
      create: [
        {
          reponse_type: 'HARD',
          reviewd_at: daysAgo(5),
        },
        {
          reponse_type: 'AGAIN',
          reviewd_at: daysAgo(5),
        },
        {
          reponse_type: 'GOOD',
          reviewd_at: daysAgo(4),
        },
        {
          reponse_type: 'GOOD',
          reviewd_at: daysAgo(4),
        },
        {
          reponse_type: 'GOOD',
          reviewd_at: daysAgo(3),
        },
        {
          reponse_type: 'GOOD',
          reviewd_at: daysAgo(0),
        },
      ],
    },
    ease_factor: 2.5,
    interval: 8,
    due_at: inXDays(8),
    topicId,
    type,
    status,
    created_at,
    updated_at,
  },
  {
    front: 'What is a JavaScript constructor function?',
    back: `A constructor function is a special type of function that is used to create objects in JavaScript. It's called with the 'new' keyword and returns a new object instance. Constructor functions define the properties and methods of the object being created, and can also take arguments to customize the object's behavior. Constructor functions are often used in object-oriented programming to create new instances of a class.`,
    tags: {
      connect: [
        {
          name: 'oop',
        },
      ],
    },
    reviews: {
      create: [
        {
          reponse_type: 'GOOD',
          reviewd_at: daysAgo(10),
        },
        {
          reponse_type: 'GOOD',
          reviewd_at: daysAgo(10),
        },
        {
          reponse_type: 'GOOD',
          reviewd_at: daysAgo(9),
        },
        {
          reponse_type: 'EASY',
          reviewd_at: daysAgo(6),
        },
      ],
    },
    ease_factor: 2.65,
    interval: 10,
    due_at: inXDays(4),
    topicId,
    type,
    status,
    created_at,
    updated_at,
  },
  {
    front:
      'What is the difference between a JavaScript function declaration and a function expression?',
    back: `A function declaration is a statement that declares a function and assigns it to a variable or property of an object. Function declarations are hoisted and can be used before they are declared. A function expression is an expression that defines a function and assigns it to a variable or property of an object. Function expressions are not hoisted and cannot be used before they are declared.`,
    tags: {
      connect: [
        {
          name: 'functions',
        },
      ],
    },
    reviews: {
      create: [
        {
          reponse_type: 'GOOD',
          reviewd_at: daysAgo(7),
        },
        {
          reponse_type: 'GOOD',
          reviewd_at: daysAgo(7),
        },
      ],
    },
    ease_factor: 2.5,
    interval: 1,
    due_at: daysAgo(6),
    topicId,
    type,
    status,
    created_at,
    updated_at,
  },
  {
    front: 'What is a JavaScript module?',
    back: `A module is a reusable piece of code that encapsulates related functionality and can be imported and exported in other parts of a JavaScript application. Modules provide a way to organize and modularize code, reducing complexity and improving maintainability. Modules were introduced in ES6 and can be defined using the import and export keywords.`,
    tags: {
      connect: [
        {
          name: 'modules',
        },
        {
          name: 'es6',
        },
      ],
    },
    reviews: {
      create: [
        {
          reponse_type: 'GOOD',
          reviewd_at: daysAgo(0),
        },
        {
          reponse_type: 'GOOD',
          reviewd_at: daysAgo(0),
        },
      ],
    },
    ease_factor: 2.5,
    interval: 1,
    due_at: inXDays(1),
    topicId,
    type,
    status,
    created_at,
    updated_at,
  },
];
