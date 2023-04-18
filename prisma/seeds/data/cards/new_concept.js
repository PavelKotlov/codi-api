const { daysAgo } = require('../../helper');

const created_at = daysAgo(5);
const updated_at = daysAgo(5);
const type = 'CONCEPT';
const topicId = '8e3399e6-1d94-11ec-9621-0242ac130002';

module.exports = [
  // New Ruby Card

  {
    topicId: 'b09a169e-dce8-11ed-afa1-0242ac120002',
    front: 'What is a Ruby symbol?',
    back: `A symbol is a data type that represents a name or identifier.
          Symbols are similar to strings in that they represent a sequence of characters,
          but they are immutable, meaning that once a symbol is created, its value cannot be changed.
          Symbols are often used in Ruby as keys in hashes, since they are more memory- efficient than strings
          and faster to compare.`,
    type,
    created_at,
    updated_at,
    tags: {
      connect: {
        name: 'data types',
      },
    },
  },

  /// New Js cards /////////////////////////////////////////////////////////////////////
  {
    front: 'What is a callback function in javascript?',
    back: 'In JavaScript, a callback function is a function that is passed as an argument to another function and is executed when that function finishes its task.',
    tags: {
      connect: {
        name: 'functions',
      },
    },
    type,
    topicId,
    created_at,
    updated_at,
  },
  {
    front: 'What is a closure in JavaScript?',
    back: `A closure is a function that has access to its outer function's variables, even after the outer function has returned. This allows for private variables and functions to be created, as well as for function factories and currying`,
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
    type,
    topicId,
    created_at,
    updated_at,
  },
  {
    front: 'What is event bubbling in JavaScript?',
    back: `Event bubbling is the behavior in which an event triggered on an element is also triggered on all of its parent elements, up to the document level. This can cause unexpected behavior if not properly handled, but can also be useful in certain cases such as event delegation`,
    tags: {
      connect: [
        {
          name: 'dom',
        },
      ],
    },
    type,
    topicId,
    created_at,
    updated_at,
  },
  {
    front: 'What is the difference between let and const in JavaScript?',
    back: `In JavaScript, let is used to declare variables that can be reassigned new values, while const is used to declare variables whose value cannot be reassigned once it is initialized. This means that if you try to change the value of a const variable, you will get an error. Use let for variables whose values are expected to change during program execution, and use const for variables whose values are intended to remain constant.`,
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
    type,
    topicId,
    created_at,
    updated_at,
  },
  {
    front: 'What is the this keyword in JavaScript?',
    back: `The this keyword refers to the object that the function is a method of, or the global object if the function is not a method of any object. Its value can also be explicitly set using methods such as call() and apply().`,
    type,
    topicId,
    created_at,
    updated_at,
  },
  {
    front: 'What is the difference between == and === in JavaScript?',
    back: `== is the loose equality operator, and performs type coercion before comparing two values,
       while ===       is the strict equality operator and does not perform any type coercion.
       It is generally recommended to use === for equality comparisons in JavaScript.`,

    tags: {
      connect: [
        {
          name: 'js basics',
        },
      ],
    },
    type,
    topicId,
    created_at,
    updated_at,
  },
  {
    front: 'What is a promise in JavaScript?',
    back: `A promise is a special object in JavaScript that represents the eventual completion or failure of an asynchronous operation, and allows for easier handling of asynchronous code using the then() and catch() methods.`,
    tags: {
      connect: [
        {
          name: 'asynchronous programming',
        },
      ],
    },
    type,
    topicId,
    created_at,
    updated_at,
  },
  {
    front: 'What is object destructuring in JavaScript?',
    back: `Object destructuring is a feature in JavaScript that allows for extracting properties of an object and assigning them to variables with the same name. This can make code more concise and readable, and is especially useful when dealing with complex objects`,
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
    type,
    topicId,
    created_at,
    updated_at,
  },
  {
    front: 'What is an Event Handler in JavaScript?',
    back: `An event handler is a function in JavaScript that is triggered when an event occurs, such as a user clicking a button. Event handlers are used to perform actions in response to user input, such as changing the content of a web page or submitting a form. They are essential for creating interactive web pages and are used extensively in frontend development.`,
    tags: {
      connect: [
        {
          name: 'frontend js',
        },
        {
          name: 'event handlers',
        },
      ],
    },
    type,
    topicId,
    created_at,
    updated_at,
  },
  {
    front:
      'What is the difference between innerHTML and textContent in JavaScript?',
    back: `The innerHTML property in JavaScript is used to get or set the HTML content of an element, while textContent is used to get or set the text content of an element. The main difference is that innerHTML can include HTML tags and attributes, while textContent only includes the text content of an element. When setting the content of an element, it is generally safer to use textContent to prevent injection attacks.`,
    tags: {
      connect: [
        {
          name: 'frontend js',
        },
      ],
    },
    type,
    topicId,
    created_at,
    updated_at,
  },
  {
    front: 'What are Arrow Functions in JavaScript?',
    back: `Arrow functions are a shorthand syntax for defining functions in JavaScript. They are similar to traditional functions, but with a few differences. Arrow functions have a concise syntax that allows them to be defined in a single line of code, and they have a lexical this binding, which means that the value of this inside an arrow function is determined by its surrounding scope. Arrow functions are commonly used in JavaScript for their brevity and readability.`,
    tags: {
      connect: [
        {
          name: 'functions',
        },
      ],
    },
    type,
    topicId,
    created_at,
    updated_at,
  },
  {
    front:
      'What is the difference between a deep copy and a shallow copy in JavaScript?',
    back: `In JavaScript, a deep copy creates a completely new object with its own memory space and copies all of the values from the original object, while a shallow copy creates a new object that shares some or all of the memory space with the original object. The main difference is that changes made to the original object after a shallow copy is made may affect the new object, while changes to the original object after a deep copy is made will not affect the new object.`,
    tags: {
      connect: [
        {
          name: 'objects',
        },
      ],
    },
    type,
    topicId,
    created_at,
    updated_at,
  },
  {
    front:
      'What is the difference between a named export and a default export in JavaScript modules?',
    back: `In JavaScript modules, a named export is a specific function or variable that is exported from a module and can be imported using its exact name, while a default export is the primary function or value that is exported from a module and can be imported using any name. A module can have multiple named exports and only one default export. Named exports are useful for exporting specific functionality, while default exports are useful for exporting the primary functionality of a module.`,
    tags: {
      connect: [
        {
          name: 'modules',
        },
      ],
    },
    type,
    topicId,
    created_at,
    updated_at,
  },
  {
    front:
      'What is the difference between querySelector and getElementById in JavaScript?',
    back: ` querySelector is a method of the document object that returns the first element that matches a specified CSS selector. getElementById is a method of the document object that returns the element with the specified id attribute. querySelector can be used to select any element based on its attributes, while getElementById can only be used to select elements by their id attribute.`,
    tags: {
      connect: [
        {
          name: 'dom',
        },
        {
          name: 'frontend js',
        },
      ],
    },
    type,
    topicId,
    created_at,
    updated_at,
  },
  {
    front:
      'What is the difference between an arrow function and a regular function in JavaScript?',
    back: `An arrow function is a shorthand syntax for creating a function expression in JavaScript. Arrow functions are shorter and have an implicit return statement, which means they can be more concise than regular functions. Arrow functions also have a this value that is inherited from the surrounding context, whereas regular functions have a this value that is dependent on how the function is called.`,
    tags: {
      connect: [
        {
          name: 'functions',
        },
      ],
    },
    type,
    topicId,
    created_at,
    updated_at,
  },
  {
    front: 'What is the difference between slice and splice in JavaScript?',
    back: `slice and splice are both methods of arrays that are used to manipulate array values. slice returns a new array with a portion of the original array, based on the provided start and end indexes. splice changes the original array by adding or removing elements from the array, based on the provided start index and number of elements to remove.`,
    tags: {
      connect: [
        {
          name: 'arrays',
        },
      ],
    },
    type,
    topicId,
    created_at,
    updated_at,
  },
  {
    front:
      'What is the difference between a reference type and a value type in JavaScript?',
    back: `In JavaScript, primitive data types like numbers and strings are value types, which means that their values are copied when they are assigned to a variable or passed as an argument to a function. Objects, arrays, and functions are reference types, which means that their values are not copied, but are instead passed by reference. This can lead to unexpected behavior when modifying reference types, as multiple variables can reference the same value.`,
    tags: {
      connect: [
        {
          name: 'js basics',
        },
      ],
    },
    type,
    topicId,
    created_at,
    updated_at,
  },
  /// New Databases cards
  {
    front: 'What is a relational database?',
    back: `A relational database is a type of database that organizes data into one or more tables with a unique key for each row. This allows for efficient searching, sorting, and querying of data. Relational databases also enforce data integrity through the use of constraints, such as unique keys and foreign keys. `,
    tags: {
      connect: [
        {
          name: 'db basics',
        },
      ],
    },
    type,
    topicId,
    created_at,
    updated_at,
    topicId: 'c4644dde-dce8-11ed-afa1-0242ac120002',
  },
  {
    front: 'What is a primary key?',
    back: ` A primary key is a column or set of columns in a table that uniquely identifies each row. It is used to enforce data integrity and ensure that each row can be accessed and updated without ambiguity. A primary key can be a single column, or a combination of columns, and it should be chosen to be as simple and stable as possible.`,
    tags: {
      connect: [
        {
          name: 'db basics',
        },
      ],
    },
    type,
    topicId,
    created_at,
    updated_at,
    topicId: 'c4644dde-dce8-11ed-afa1-0242ac120002',
  },
  {
    front: 'What is a foreign key?',
    back: `A foreign key is a column in a table that refers to the primary key of another table. It is used to establish relationships between tables and ensure data integrity. A foreign key can be used to enforce referential integrity, which means that a row cannot be deleted or modified if it is referenced by a foreign key in another table.`,
    tags: {
      connect: [
        {
          name: 'db basics',
        },
      ],
    },
    type,
    topicId,
    created_at,
    updated_at,
    topicId: 'c4644dde-dce8-11ed-afa1-0242ac120002',
  },
  {
    front: 'What is normalization?',
    back: `Normalization is the process of organizing data in a database to eliminate redundancy and dependency. It involves breaking down tables into smaller, more specific tables, and creating relationships between them using primary and foreign keys. Normalization helps to ensure data consistency, reduce data duplication, and simplify data maintenance. There are several normal forms, ranging from first normal form (1NF) to fifth normal form (5NF). `,
    tags: {
      connect: [
        {
          name: 'normalization',
        },
      ],
    },
    type,
    topicId,
    created_at,
    updated_at,
    topicId: 'c4644dde-dce8-11ed-afa1-0242ac120002',
  },
  {
    front: 'What is denormalization?',
    back: `Denormalization is the process of adding redundant data to a database for performance or ease of use. It involves breaking normalization rules by duplicating data across tables, or by adding calculated or summary fields to a table. Denormalization can improve query performance by reducing the need for complex joins or aggregations, but it can also lead to data inconsistency and maintenance problems.`,
    tags: {
      connect: [
        {
          name: 'normalization',
        },
      ],
    },
    type,
    topicId,
    created_at,
    updated_at,
    topicId: 'c4644dde-dce8-11ed-afa1-0242ac120002',
  },
  {
    front: 'What is a view?',
    back: `A view is a virtual table that is based on the result of a query. It can be used to simplify data access and manipulation by providing a customized or simplified perspective on one or more tables. Views can be used to restrict access to sensitive data, or to provide a consistent interface for reporting or analysis.`,
    tags: {
      connect: [
        {
          name: 'db basics',
        },
      ],
    },
    type,
    topicId,
    created_at,
    updated_at,
    topicId: 'c4644dde-dce8-11ed-afa1-0242ac120002',
  },
  {
    front: 'What is a stored procedure?',
    back: `A stored procedure is a precompiled set of SQL statements that can be executed on demand. It is used to encapsulate complex or frequently used database operations, and can be called from within another SQL statement or from an application. Stored procedures can improve performance by reducing network traffic, and can enhance security by limiting direct access to database tables.`,
    tags: {
      connect: [
        {
          name: 'db basics',
        },
      ],
    },
    type,
    topicId,
    created_at,
    updated_at,
    topicId: 'c4644dde-dce8-11ed-afa1-0242ac120002',
  },
  {
    front: 'What is ACID?',
    back: `ACID stands for Atomicity, Consistency, Isolation, and Durability. It is a set of properties that guarantee reliable processing of database transactions. Atomicity ensures that a transaction is treated as a single unit of work, and is either fully completed or fully rolled back in case of failure. Consistency ensures that a transaction leaves the database in a valid state. Isolation ensures that each transaction is executed independently of other transactions, without interference or inconsistency. Durability ensures that once a transaction is committed, its changes are permanent and cannot be lost or undone. ACID compliance is a critical requirement for mission-critical database systems, such as those used in financial or healthcare applications. `,
    tags: {
      connect: [
        {
          name: 'db basics',
        },
      ],
    },
    type,
    topicId,
    created_at,
    updated_at,
    topicId: 'c4644dde-dce8-11ed-afa1-0242ac120002',
  },
  {
    front: 'What is NoSQL?',
    back: `NoSQL (Not Only SQL) is a type of database that is designed to handle unstructured or semi-structured data, such as social media posts, documents, or sensor data. NoSQL databases are characterized by their ability to scale horizontally across multiple servers or clusters, and their flexible schema design, which allows for easy data modeling and modification. NoSQL databases use different data models, such as key-value, document, graph, or column-family, and do not rely on SQL as their primary query language.`,
    tags: {
      connect: [
        {
          name: 'nosql',
        },
      ],
    },
    type,
    topicId,
    created_at,
    updated_at,
    topicId: 'c4644dde-dce8-11ed-afa1-0242ac120002',
  },
  {
    front: 'What is a schema?',
    back: `A schema is a logical container for database objects, such as tables, views, or stored procedures. It defines the structure of the database and the relationships between objects, and can be used to organize and manage database objects. Schemas can be used to separate different types of objects, or to partition data for security or performance reasons.`,
    tags: {
      connect: [
        {
          name: 'db basics',
        },
      ],
    },
    type,
    topicId,
    created_at,
    updated_at,
    topicId: 'c4644dde-dce8-11ed-afa1-0242ac120002',
  },
  {
    front: 'What is a transaction?',
    back: `A transaction is a unit of work that involves one or more database operations, such as inserts, updates, or deletes. It is a fundamental concept in database systems, and is used to ensure data consistency and reliability. A transaction should be atomic, meaning that it is either fully completed or fully rolled back in case of failure. Transactions can also be isolated and durable, to ensure that they are executed independently and that their changes are permanent.`,
    tags: {
      connect: [
        {
          name: 'db basics',
        },
      ],
    },
    type,
    topicId,
    created_at,
    updated_at,
    topicId: 'c4644dde-dce8-11ed-afa1-0242ac120002',
  },
  {
    front: 'What is indexing?',
    back: ` Indexing is the process of creating a data structure that allows for efficient searching and sorting of data in a database. An index is a separate object that maps values in one or more columns to the corresponding rows in a table. Indexes can be created on primary or foreign keys, or on any other column that is frequently used in queries. Indexing can significantly improve query performance, but can also increase storage and maintenance overhead. `,
    tags: {
      connect: [
        {
          name: 'db basics',
        },
      ],
    },
    type,
    topicId,
    created_at,
    updated_at,
    topicId: 'c4644dde-dce8-11ed-afa1-0242ac120002',
  },
  {
    front: 'What is a join?',
    back: `A join is a SQL operation that combines data from two or more tables in a database, based on a common column or set of columns. It is used to retrieve related data that is stored in different tables, and can be performed in different ways, such as inner join, left join, right join, or full join. Join performance can be optimized through indexing, query tuning, and other techniques.`,
    tags: {
      connect: [
        {
          name: 'joins',
        },
      ],
    },
    type,
    topicId,
    created_at,
    updated_at,
    topicId: 'c4644dde-dce8-11ed-afa1-0242ac120002',
  },
  {
    front: 'What is an inner join?',
    back: `An inner join is a type of SQL join that returns only the rows that have matching values in both tables being joined. It combines data from two or more tables based on a common column or set of columns, and excludes any rows where the matching values are not found in both tables. Inner joins can be used to retrieve related data from multiple tables and are commonly used in database applications.`,
    tags: {
      connect: [
        {
          name: 'joins',
        },
      ],
    },
    type,
    topicId,
    created_at,
    updated_at,
    topicId: 'c4644dde-dce8-11ed-afa1-0242ac120002',
  },
  {
    front: 'What is a left join?',
    back: `A left join is a type of SQL join that returns all the rows from the left table and the matching rows from the right table. If there are no matching rows in the right table, the result will contain null values for those columns. Left joins are used to retrieve all the data from the left table, even if there is no matching data in the right table, and are commonly used in database reporting and analysis.`,
    tags: {
      connect: [
        {
          name: 'joins',
        },
      ],
    },
    type,
    topicId,
    created_at,
    updated_at,
    topicId: 'c4644dde-dce8-11ed-afa1-0242ac120002',
  },
  {
    front: 'What is a right join?',
    back: `A right join is a type of SQL join that returns all the rows from the right table and the matching rows from the left table. If there are no matching rows in the left table, the result will contain null values for those columns. Right joins are used to retrieve all the data from the right table, even if there is no matching data in the left table, and are less commonly used than left joins.`,
    tags: {
      connect: [
        {
          name: 'joins',
        },
      ],
    },
    type,
    topicId,
    created_at,
    updated_at,
    topicId: 'c4644dde-dce8-11ed-afa1-0242ac120002',
  },
  {
    front: 'What is a GROUP BY clause in SQL?',
    back: `Answer: A GROUP BY clause is a SQL statement that is used to group the results of a SELECT statement based on one or more columns. It allows you to perform aggregate functions (such as COUNT, SUM, AVG, etc.) on each group of data, rather than on the entire dataset. The basic syntax of a GROUP BY clause is "GROUP BY column1, column2, ...", where "column1, column2, ..." is the list of columns you want to group by.`,
    tags: {
      connect: [
        {
          name: 'queries',
        },
      ],
    },
    type,
    topicId,
    created_at,
    updated_at,
    topicId: 'c4644dde-dce8-11ed-afa1-0242ac120002',
  },
  {
    front: 'What is an ORM?',
    back: `ORM stands for Object-Relational Mapping, and it is a technique for mapping objects in an object-oriented programming language to tables in a relational database. ORM frameworks allow developers to interact with the database using objects instead of SQL commands, which can simplify the code and make it more maintainable. Some common ORM frameworks include Hibernate for Java, Entity Framework for .NET, and Django ORM for Python.`,
    type,
    topicId,
    created_at,
    updated_at,
    topicId: 'c4644dde-dce8-11ed-afa1-0242ac120002',
  },
  /// New DSA cards
  {
    front: 'What is a stack?',
    back: `A stack is a linear data structure that follows the LIFO (Last-In-First-Out) principle, where the last element inserted is the first one to be removed. It supports two primary operations: push, which adds an element to the top of the stack, and pop, which removes the topmost element from the stack.`,
    tags: {
      connect: [
        {
          name: 'linear ds',
        },
      ],
    },
    type,
    topicId,
    created_at,
    updated_at,
    topicId: '5760c81c-dd73-11ed-b5ea-0242ac120002',
  },
  {
    front: 'What is a queue?',
    back: `A queue is a linear data structure that follows the FIFO (First-In-First-Out) principle, where the first element inserted is the first one to be removed. It supports two primary operations: enqueue, which adds an element to the rear of the queue, and dequeue, which removes the front element from the queue. `,
    tags: {
      connect: [
        {
          name: 'linear ds',
        },
      ],
    },
    type,
    topicId,
    created_at,
    updated_at,
    topicId: '5760c81c-dd73-11ed-b5ea-0242ac120002',
  },
  {
    front: 'What is a hash table?',
    back: `A hash table is a data structure that uses a hash function to map keys to values. It provides constant time complexity for insertion, deletion, and search operations on average. In case of hash collisions, separate chaining or open addressing can be used to handle collisions.`,
    tags: {
      connect: [
        {
          name: 'hash tables',
        },
      ],
    },
    type,
    topicId,
    created_at,
    updated_at,
    topicId: '5760c81c-dd73-11ed-b5ea-0242ac120002',
  },
  {
    front: 'What is a binary search tree?',
    back: `A binary search tree is a binary tree where each node has at most two children, and the value of every node in the left subtree is less than the value of the node itself, and the value of every node in the right subtree is greater than the value of the node itself. It supports efficient insertion, deletion, and search operations with an average time complexity of O(log n).`,
    tags: {
      connect: [
        {
          name: 'trees',
        },
      ],
    },
    type,
    topicId,
    created_at,
    updated_at,
    topicId: '5760c81c-dd73-11ed-b5ea-0242ac120002',
  },
  {
    front: 'What is a graph data structure?',
    back: `A graph is a non-linear data structure consisting of a set of vertices and edges. Vertices represent the entities, and edges represent the relationships between them. Graphs can be directed or undirected, weighted or unweighted, and can have cycles or be acyclic. Graphs can be represented using an adjacency matrix or an adjacency list.`,
    tags: {
      connect: [
        {
          name: 'graphs',
        },
      ],
    },
    type,
    topicId,
    created_at,
    updated_at,
    topicId: '5760c81c-dd73-11ed-b5ea-0242ac120002',
  },
  {
    front: 'What is a linked list data structure?',
    back: `A linked list is a linear data structure that consists of a sequence of nodes, where each node stores a value and a reference to the next node. It supports efficient insertion and deletion operations, but has poor performance for random access operations. Linked lists can be singly linked or doubly linked. `,
    tags: {
      connect: [
        {
          name: 'linear ds',
        },
      ],
    },
    type,
    topicId,
    created_at,
    updated_at,
    topicId: '5760c81c-dd73-11ed-b5ea-0242ac120002',
  },
  {
    front: 'What is a searching algorithm?',
    back: `A searching algorithm is a method for finding a particular value in a set of data elements. Searching algorithms can be classified as linear or logarithmic. Linear searching algorithms scan through the elements one by one until the target value is found, while logarithmic searching algorithms use a divide-and-conquer approach to search efficiently in large datasets. Some common searching algorithms include linear search, binary search, and interpolation search.`,
    tags: {
      connect: [
        {
          name: 'algorithms',
        },
      ],
    },
    type,
    topicId,
    created_at,
    updated_at,
    topicId: '5760c81c-dd73-11ed-b5ea-0242ac120002',
  },
  {
    front: 'What is a greedy algorithm?',
    back: `Greedy is a technique for solving optimization problems by making locally optimal choices at each step in the hope of finding a global optimum. Greedy algorithms do not always guarantee the optimal solution but can be efficient and easy to implement. Some common examples of greedy algorithms include the coin change problem, the knapsack problem, and the minimum spanning tree problem.`,
    tags: {
      connect: [
        {
          name: 'algorithms',
        },
      ],
    },
    type,
    topicId,
    created_at,
    updated_at,
    topicId: '5760c81c-dd73-11ed-b5ea-0242ac120002',
  },
];
