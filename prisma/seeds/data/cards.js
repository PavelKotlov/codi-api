module.exports = [
  // New JS card
  {
    topicId: '8e3399e6-1d94-11ec-9621-0242ac130002',
    front: 'What is a callback function in javascript?',
    back: 'In JavaScript, a callback function is a function that is passed as an argument to another function and is executed when that function finishes its task.',
    type: 'CONCEPT',
    created_at: new Date('Sep 22 2021 16:16:50'),
    updated_at: new Date('Sep 22 2021 16:16:50'),
    tags: {
      connect: {
        name: 'functions',
      },
    },
  },
  // New Ruby Card

  {
    topicId: 'b09a169e-dce8-11ed-afa1-0242ac120002',
    front: 'What is a Ruby symbol?',
    back: `A symbol is a data type that represents a name or identifier.
          Symbols are similar to strings in that they represent a sequence of characters,
          but they are immutable, meaning that once a symbol is created, its value cannot be changed.
          Symbols are often used in Ruby as keys in hashes, since they are more memory- efficient than strings
          and faster to compare.`,
    type: 'CONCEPT',
    created_at: new Date('Sep 22 2021 16:16:50'),
    updated_at: new Date('Sep 22 2021 16:16:50'),
    tags: {
      connect: {
        name: 'data types',
      },
    },
  },
  // Learning Ruby Card
  {
    topicId: 'b09a169e-dce8-11ed-afa1-0242ac120002',
    front: 'What is a module in Ruby?',
    back: 'A module in Ruby is a collection of related methods, classes, and constants that can be used to share functionality among multiple classes or to organize code within a single class.',
    status: 'LEARNING',
    type: 'CONCEPT',
    created_at: new Date('Sep 22 2021 16:16:50'),
    updated_at: new Date('Sep 22 2021 16:16:50'),
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
        reviewd_at: new Date('Sep 22 2021 18:16:50'),
      },
    },
  },
  // Graduated due Ruby Card

  {
    topicId: 'b09a169e-dce8-11ed-afa1-0242ac120002',
    front: 'What is one of the main benefits of using modules in Ruby?',
    back: " One of the main benefits of using modules in Ruby is that they provide a way to achieve multiple inheritance without the need for a class to inherit from the module's superclass.",
    status: 'GRADUATED',
    type: 'CONCEPT',
    created_at: new Date('Sep 22 2021 16:16:50'),
    updated_at: new Date('Sep 22 2021 16:16:50'),
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
          reviewd_at: new Date('Sep 22 2021 18:16:50'),
        },
        {
          reponse_type: 'GOOD',
          reviewd_at: new Date('Sep 22 2021 18:36:50'),
        },
      ],
    },
    ease_factor: 2.5,
    interval: 1,
    due_at: new Date('Sep 23 2021 18:36:50'),
  },
  // Graduated due Ruby Card

  {
    topicId: 'b09a169e-dce8-11ed-afa1-0242ac120002',
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
    status: 'GRADUATED',
    type: 'CONCEPT',
    created_at: new Date('Sep 22 2021 16:16:50'),
    updated_at: new Date('Sep 22 2021 16:16:50'),
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
          reviewd_at: new Date('Apr 15 2023 18:16:50'),
        },
        {
          reponse_type: 'GOOD',
          reviewd_at: new Date('Apr 15 2023 18:16:50'),
        },
      ],
    },
    ease_factor: 2.5,
    interval: 1,
    due_at: new Date('Apr 16 2023 18:16:50'),
  },
  // Graduated due in the future Ruby card
  {
    topicId: 'b09a169e-dce8-11ed-afa1-0242ac120002',
    front: 'What is code blocks in Ruby?',
    back: `In Ruby, a code block is a chunk of code that can be passed as an argument to a method.
     It is enclosed in either curly braces {} or the do..end keywords.
      When a method is called with a code block, the method can execute the block by yielding control to it.
      Code blocks are commonly used in Ruby to perform iterations,
      filters, and other types of operations on collections of data.
      They provide a concise and flexible way to pass behavior to a method
      without the need to define a separate class or function.`,
    status: 'GRADUATED',
    type: 'CONCEPT',
    created_at: new Date('Sep 22 2021 16:16:50'),
    updated_at: new Date('Sep 22 2021 16:16:50'),
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
          reviewd_at: new Date('Apr 17 2023 18:16:50'),
        },
        {
          reponse_type: 'GOOD',
          reviewd_at: new Date('Apr 17 2023 18:36:50'),
        },
      ],
    },
    ease_factor: 2.5,
    interval: 1,
    due_at: new Date('Apr 18 2023 18:36:50'),
  },
  /// New Js cards /////////////////////////////////////////////////////////////////////
  {
    topicId: '8e3399e6-1d94-11ec-9621-0242ac130002',
    front: 'What is a closure in JavaScript?',
    back: `A closure is a function that has access to its outer function's variables, even after the outer function has returned. This allows for private variables and functions to be created, as well as for function factories and currying`,
    status: 'NEW',
    type: 'CONCEPT',
    created_at: new Date('Sep 22 2022 16:16:50'),
    updated_at: new Date('Sep 22 2021 16:16:53'),
    tags: {
      connect: [
        {
          name: 'functions',
        },
        {
          name: 'closures',
        },
      ],
    },
  },
  {
    topicId: '8e3399e6-1d94-11ec-9621-0242ac130002',
    front: 'What is event bubbling in JavaScript?',
    back: `Event bubbling is the behavior in which an event triggered on an element is also triggered on all of its parent elements, up to the document level. This can cause unexpected behavior if not properly handled, but can also be useful in certain cases such as event delegation`,
    status: 'NEW',
    type: 'CONCEPT',
    created_at: new Date('Sep 22 2022 16:16:50'),
    updated_at: new Date('Sep 22 2021 16:16:53'),
    tags: {
      connect: [
        {
          name: 'dom',
        },
      ],
    },
  },
  {
    topicId: '8e3399e6-1d94-11ec-9621-0242ac130002',
    front: 'What is the difference between let and const in JavaScript?',
    back: `In JavaScript, let is used to declare variables that can be reassigned new values, while const is used to declare variables whose value cannot be reassigned once it is initialized. This means that if you try to change the value of a const variable, you will get an error. Use let for variables whose values are expected to change during program execution, and use const for variables whose values are intended to remain constant.`,
    status: 'NEW',
    type: 'CONCEPT',
    created_at: new Date('Sep 22 2022 16:16:50'),
    updated_at: new Date('Sep 22 2021 16:16:53'),
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
  },
  {
    topicId: '8e3399e6-1d94-11ec-9621-0242ac130002',
    front: 'What is the this keyword in JavaScript?',
    back: `The this keyword refers to the object that the function is a method of, or the global object if the function is not a method of any object. Its value can also be explicitly set using methods such as call() and apply().`,
    status: 'NEW',
    type: 'CONCEPT',
    created_at: new Date('Sep 22 2022 16:16:50'),
    updated_at: new Date('Sep 22 2021 16:16:53'),
  },
  {
    topicId: '8e3399e6-1d94-11ec-9621-0242ac130002',
    front: 'What is the difference between == and === in JavaScript?',
    back: `== is the loose equality operator, and performs type coercion before comparing two values,
       while ===       is the strict equality operator and does not perform any type coercion.
       It is generally recommended to use === for equality comparisons in JavaScript.`,
    status: 'NEW',
    type: 'CONCEPT',
    created_at: new Date('Sep 22 2022 16:16:50'),
    updated_at: new Date('Sep 22 2021 16:16:53'),
    tags: {
      connect: [
        {
          name: 'js basics',
        },
      ],
    },
  },
  {
    topicId: '8e3399e6-1d94-11ec-9621-0242ac130002',
    front: 'What is a promise in JavaScript?',
    back: `A promise is a special object in JavaScript that represents the eventual completion or failure of an asynchronous operation, and allows for easier handling of asynchronous code using the then() and catch() methods.`,
    status: 'NEW',
    type: 'CONCEPT',
    created_at: new Date('Sep 22 2022 16:16:50'),
    updated_at: new Date('Sep 22 2021 16:16:53'),
    tags: {
      connect: [
        {
          name: 'asynchronous programming',
        },
      ],
    },
  },
  {
    topicId: '8e3399e6-1d94-11ec-9621-0242ac130002',
    front: 'What is object destructuring in JavaScript?',
    back: `Object destructuring is a feature in JavaScript that allows for extracting properties of an object and assigning them to variables with the same name. This can make code more concise and readable, and is especially useful when dealing with complex objects`,
    status: 'NEW',
    type: 'CONCEPT',
    created_at: new Date('Sep 22 2022 16:16:50'),
    updated_at: new Date('Sep 22 2021 16:16:53'),
    tags: {
      connect: [
        {
          name: 'objects',
        },
        {
          name: 'es6',
        },
      ],
    },
  },

  // Learning js cards /////////////////////////////////////////////////////////////////////
  {
    topicId: '8e3399e6-1d94-11ec-9621-0242ac130002',
    front: 'What is a callback function in JavaScript?',
    back: `A callback function is a function that is passed as an argument to another function, and is invoked inside the other function. Callback functions are commonly used in JavaScript to handle asynchronous code and event handling.
`,
    status: 'LEARNING',
    type: 'CONCEPT',
    created_at: new Date('Sep 22 2022 16:16:50'),
    updated_at: new Date('Sep 22 2021 16:16:53'),
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
        reviewd_at: new Date('Apr 15 2023 18:16:50'),
      },
    },
  },
  {
    topicId: '8e3399e6-1d94-11ec-9621-0242ac130002',
    front: 'What is a higher-order function in JavaScript?',
    back: `A higher-order function is a function that takes another function as an argument, or returns a function as its result. This allows for the creation of more flexible and reusable code, and is commonly used in JavaScript for functional programming. 
`,
    status: 'LEARNING',
    type: 'CONCEPT',
    created_at: new Date('Sep 22 2022 16:16:50'),
    updated_at: new Date('Sep 22 2021 16:16:53'),
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
        reviewd_at: new Date('Apr 15 2023 18:16:51'),
      },
    },
  },
  {
    topicId: '8e3399e6-1d94-11ec-9621-0242ac130002',
    front:
      'What is the difference between synchronous and asynchronous JavaScript?',
    back: `Synchronous JavaScript executes code in a blocking manner, meaning that one line of code must finish executing before the next line can be executed. Asynchronous JavaScript allows multiple lines of code to execute at the same time, and it utilizes callback functions, promises, and async/await to manage the asynchronous code flow.
`,
    status: 'LEARNING',
    type: 'CONCEPT',
    created_at: new Date('Sep 22 2022 16:16:50'),
    updated_at: new Date('Sep 22 2021 16:16:53'),
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
        reviewd_at: new Date('Apr 15 2023 18:16:52'),
      },
    },
  },
  {
    topicId: '8e3399e6-1d94-11ec-9621-0242ac130002',
    front: 'What is the event loop in JavaScript?',
    back: `The event loop is a core concept in JavaScript that manages the execution of asynchronous code. It is responsible for queuing and executing callback functions, and it ensures that JavaScript's single-threaded nature is maintained while still allowing for asynchronous operations.
`,
    status: 'LEARNING',
    type: 'CONCEPT',
    created_at: new Date('Sep 22 2022 16:16:50'),
    updated_at: new Date('Sep 22 2021 16:16:53'),
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
        reviewd_at: new Date('Apr 15 2023 18:16:54'),
      },
    },
  },
  {
    topicId: '8e3399e6-1d94-11ec-9621-0242ac130002',
    front: 'What is hoisting in JavaScript?',
    back: `Hoisting is a JavaScript mechanism that allows variables and function declarations to be used before they are declared in the code. Function declarations are hoisted before variables, and variable assignments are not hoisted. It is generally considered good practice to declare variables before using them to avoid unexpected behavior.
`,
    status: 'LEARNING',
    type: 'CONCEPT',
    created_at: new Date('Sep 22 2022 16:16:50'),
    updated_at: new Date('Sep 22 2021 16:16:53'),
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
        reviewd_at: new Date('Apr 16 2023 18:16:56'),
      },
    },
  },
  {
    topicId: '8e3399e6-1d94-11ec-9621-0242ac130002',
    front: 'What is the difference between a for loop and a forEach loop?',
    back: `A for loop is a traditional loop that allows you to iterate over an array or object, while a forEach loop is a method that is called on an array and iterates over its elements. For loops allow for more flexibility and control over the iteration process, while forEach loops provide a more concise syntax for simple iterations.
`,
    status: 'LEARNING',
    type: 'CONCEPT',
    created_at: new Date('Sep 22 2022 16:16:50'),
    updated_at: new Date('Sep 22 2021 16:16:53'),
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
        reviewd_at: new Date('Apr 16 2023 18:16:52'),
      },
    },
  },
  {
    topicId: '8e3399e6-1d94-11ec-9621-0242ac130002',
    front: 'What is the difference between null and undefined in JavaScript?',
    back: `null is an intentional absence of any object value, while undefined means a variable has been declared but has not been assigned a value. null is a value, while undefined is a type. In most cases, null and undefined can be used interchangeably.`,
    status: 'LEARNING',
    type: 'CONCEPT',
    created_at: new Date('Sep 22 2022 16:16:50'),
    updated_at: new Date('Sep 22 2021 16:16:53'),
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
        reviewd_at: new Date('Apr 14 2023 18:16:52'),
      },
    },
  },
  // Graduated JS cards ////////////////////////////////////////////
  {
    topicId: '8e3399e6-1d94-11ec-9621-0242ac130002',
    front: 'What is the DOM in JavaScript?',
    back: `The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. With the DOM, JavaScript can access and modify all the elements of an HTML document.
`,
    status: 'GRADUATED',
    type: 'CONCEPT',
    created_at: new Date('Sep 24 2021 16:16:50'),
    updated_at: new Date('Sep 25 2021 16:16:50'),
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
          reviewd_at: new Date('Apr 16 2023 18:16:50'),
        },
        {
          reponse_type: 'GOOD',
          reviewd_at: new Date('Apr 16 2023 18:16:50'),
        },
        {
          reponse_type: 'GOOD',
          reviewd_at: new Date('Apr 17 2023 18:16:50'),
        },
      ],
    },
    ease_factor: 2.5,
    interval: 3,
    due_at: new Date('Apr 20 2023 18:16:50'),
  },
  {
    topicId: '8e3399e6-1d94-11ec-9621-0242ac130002',
    front: 'What are JavaScript classes?',
    back: `Classes are a new feature in JavaScript, introduced in ES6, that allow for the creation of reusable, modular code. Classes are essentially blueprints for creating objects, and can include properties and methods that define the object's behavior. Classes provide a more intuitive way to work with objects in JavaScript, and make it easier to create complex applications.
`,
    status: 'GRADUATED',
    type: 'CONCEPT',
    created_at: new Date('Sep 24 2021 16:16:50'),
    updated_at: new Date('Sep 25 2021 16:16:50'),
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
          reviewd_at: new Date('Apr 12 2023 18:16:50'),
        },
      ],
    },
    ease_factor: 2.65,
    interval: 4,
    due_at: new Date('Apr 16 2023 18:16:50'),
  },
  {
    topicId: '8e3399e6-1d94-11ec-9621-0242ac130002',
    front: 'What is a JavaScript event?',
    back: `An event is a signal that something has happened in a web page or application, such as a mouse click, a keypress, or a page load. JavaScript can be used to respond to these events by executing code or changing the page's behavior. Event listeners are used to detect and handle events in JavaScript.
`,
    status: 'GRADUATED',
    type: 'CONCEPT',
    created_at: new Date('Sep 24 2021 16:16:50'),
    updated_at: new Date('Sep 25 2021 16:16:50'),
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
          reviewd_at: new Date('Apr 11 2023 18:16:50'),
        },
        {
          reponse_type: 'GOOD',
          reviewd_at: new Date('Apr 11 2023 18:16:50'),
        },
      ],
    },
    ease_factor: 2.5,
    interval: 1,
    due_at: new Date('Apr 12 2023 18:16:50'),
  },
  {
    topicId: '8e3399e6-1d94-11ec-9621-0242ac130002',
    front: 'What is a JavaScript callback hell?',
    back: `Callback hell is a term used to describe the problem of nested callbacks in asynchronous JavaScript code, which can make code difficult to read and maintain. Asynchronous code can lead to deeply nested callbacks, which can be hard to follow and debug. One solution to this problem is to use promises or async/await, which provide a more structured way to handle asynchronous code.
`,
    status: 'GRADUATED',
    type: 'CONCEPT',
    created_at: new Date('Sep 24 2021 16:16:50'),
    updated_at: new Date('Sep 25 2021 16:16:50'),
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
          reviewd_at: new Date('Apr 09 2023 18:16:50'),
        },
        {
          reponse_type: 'AGAIN',
          reviewd_at: new Date('Apr 11 2023 18:16:50'),
        },
        {
          reponse_type: 'GOOD',
          reviewd_at: new Date('Apr 12 2023 18:16:50'),
        },
        {
          reponse_type: 'GOOD',
          reviewd_at: new Date('Apr 12 2023 18:16:50'),
        },
        {
          reponse_type: 'GOOD',
          reviewd_at: new Date('Apr 13 2023 18:16:50'),
        },
        {
          reponse_type: 'GOOD',
          reviewd_at: new Date('Apr 16 2023 18:16:50'),
        },
      ],
    },
    ease_factor: 2.5,
    interval: 8,
    due_at: new Date('Apr 24 2023 18:16:50'),
  },
  {
    topicId: '8e3399e6-1d94-11ec-9621-0242ac130002',
    front: 'What is a JavaScript constructor function?',
    back: `A constructor function is a special type of function that is used to create objects in JavaScript. It's called with the 'new' keyword and returns a new object instance. Constructor functions define the properties and methods of the object being created, and can also take arguments to customize the object's behavior. Constructor functions are often used in object-oriented programming to create new instances of a class.
`,
    status: 'GRADUATED',
    type: 'CONCEPT',
    created_at: new Date('Sep 24 2021 16:16:50'),
    updated_at: new Date('Sep 25 2021 16:16:50'),
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
          reviewd_at: new Date('Apr 02 2023 18:16:50'),
        },
        {
          reponse_type: 'GOOD',
          reviewd_at: new Date('Apr 02 2023 18:16:50'),
        },
        {
          reponse_type: 'GOOD',
          reviewd_at: new Date('Apr 03 2023 18:16:50'),
        },
        {
          reponse_type: 'EASY',
          reviewd_at: new Date('Apr 06 2023 18:16:50'),
        },
      ],
    },
    ease_factor: 2.65,
    interval: 10,
    due_at: new Date('Apr 16 2023 18:16:50'),
  },
  {
    topicId: '8e3399e6-1d94-11ec-9621-0242ac130002',
    front:
      'What is the difference between a JavaScript function declaration and a function expression?',
    back: `A function declaration is a statement that declares a function and assigns it to a variable or property of an object. Function declarations are hoisted and can be used before they are declared. A function expression is an expression that defines a function and assigns it to a variable or property of an object. Function expressions are not hoisted and cannot be used before they are declared.
`,
    status: 'GRADUATED',
    type: 'CONCEPT',
    created_at: new Date('Sep 24 2021 16:16:50'),
    updated_at: new Date('Sep 25 2021 16:16:50'),
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
          reviewd_at: new Date('Apr 15 2023 18:16:50'),
        },
        {
          reponse_type: 'GOOD',
          reviewd_at: new Date('Apr 15 2023 18:16:50'),
        },
      ],
    },
    ease_factor: 2.5,
    interval: 1,
    due_at: new Date('Apr 16 2023 18:16:50'),
  },
  {
    topicId: '8e3399e6-1d94-11ec-9621-0242ac130002',
    front: 'What is a JavaScript module?',
    back: `A module is a reusable piece of code that encapsulates related functionality and can be imported and exported in other parts of a JavaScript application. Modules provide a way to organize and modularize code, reducing complexity and improving maintainability. Modules were introduced in ES6 and can be defined using the import and export keywords.`,
    status: 'GRADUATED',
    type: 'CONCEPT',
    created_at: new Date('Sep 24 2021 16:16:50'),
    updated_at: new Date('Sep 25 2021 16:16:50'),
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
          reviewd_at: new Date('Apr 15 2023 18:16:50'),
        },
        {
          reponse_type: 'GOOD',
          reviewd_at: new Date('Apr 15 2023 18:16:50'),
        },
      ],
    },
    ease_factor: 2.5,
    interval: 1,
    due_at: new Date('Apr 16 2023 18:16:50'),
  },

  //// New Js challenge cards /////////////////////////
  {
    topicId: '8e3399e6-1d94-11ec-9621-0242ac130002',
    front:
      'Given an array arr of numbers, map each element of the array to its square and return a new array containing the squared elements.',
    back: `function squareElements(arr) {
               return arr.map((num) => num ** 2);
                    }

          The squareElements function takes an array arr as its input and uses the map method
          to transform each element of the array into its square.
          The arrow function (num) => num ** 2 calculates the square
          of each number and returns the squared value. The resulting array with
          squared elements is returned by the function.
          The solution has a time complexity of O(n) because it only needs to iterate through the input array once
          to map each element to its square, where n is the length of the input array.
              `,
    type: 'CHALLENGE',
    created_at: new Date('Sep 22 2022 16:16:50'),
    updated_at: new Date('Sep 22 2022 16:16:50'),
    tags: {
      connect: {
        name: 'arrays',
      },
    },
  },
  {
    topicId: '8e3399e6-1d94-11ec-9621-0242ac130002',
    front: `Given an array arr of strings, write a function filterWords that takes in the array
      and a callback function checkWord as arguments.
      The checkWord function should take in a string as input and return a boolean
      indicating whether the string should be included in the filtered array or not.
      The filterWords function should return a new array that contains only the strings
      that pass the check performed by the checkWord callback function.`,
    back: `function filterWords(arr, checkWord) {
            const filteredWords = [];
         for (let i = 0; i < arr.length; i++) {
          if (checkWord(arr[i])) {
            filteredWords.push(arr[i]);
          }
        }
        return filteredWords;
      }

        The filterWords function takes an array arr and a callback function checkWord as its inputs.
        The function initializes an empty array filteredWords that will hold the words that pass the check performed by the checkWord callback function.
        The function then iterates through each element of the input array arr using a for loop.
        For each element, the function calls the checkWord callback function with the element
        as input to check whether the element should be included in the filtered array or not.
        If the checkWord function returns true, the element is added to the filteredWords array using the push method.
        Finally, the filterWords function returns the filteredWords array that contains only the words that pass
        the check performed by the checkWord callback function.
        The solution has a time complexity of O(n) because it needs to iterate through the input array once, where n is the length of the input array.
              `,
    type: 'CHALLENGE',
    created_at: new Date('Sep 22 2022 16:16:50'),
    updated_at: new Date('Sep 22 2022 16:16:50'),
    tags: {
      connect: {
        name: 'functions',
      },
    },
  },
];
