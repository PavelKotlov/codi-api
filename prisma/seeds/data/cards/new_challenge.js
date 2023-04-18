const { daysAgo } = require('../../helper');

const created_at = daysAgo(5);
const updated_at = daysAgo(5);
const type = 'CHALLENGE';
const topicId = '8e3399e6-1d94-11ec-9621-0242ac130002';

module.exports = [
  //// New Js challenge cards /////////////////////////
  {
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

    tags: {
      connect: {
        name: 'arrays',
      },
    },
    type,
    topicId,
    created_at,
    updated_at,
  },
  {
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
];
