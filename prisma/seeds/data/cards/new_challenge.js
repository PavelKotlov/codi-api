const { daysAgo } = require("../../helper");

const created_at = daysAgo(5);
const updated_at = daysAgo(5);
const type = "CHALLENGE";
const topicId = "8e3399e6-1d94-11ec-9621-0242ac130002";

module.exports = [
  //// New Js challenge cards /////////////////////////
  {
    front:
      "Given an array arr of numbers, map each element of the array to its square and return a new array containing the squared elements.",
    back: `function squareElements(arr) {
               return arr.map((num) => num ** 2);
                    }
              `,

    tags: {
      connect: {
        name: "arrays",
      },
    },
    type,
    topicId,
    created_at,
    updated_at,
    due_at: daysAgo(0),
    status: "LEARNING",
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
              `,

    tags: {
      connect: {
        name: "functions",
      },
    },
    type,
    topicId,
    created_at,
    updated_at,
  },
];
