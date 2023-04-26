const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const generateFlashcards = async (type, text) => {
  let content = "";

  if (type === "CONCEPT") {
    content =
    `Generate an array of objects (json format) that each object consists of two keys: first key is named question, and the second one is named answer.  This array will be used as flashcards (question and answer) of concepts. Generate the array based on this note: ${text}`
  }
  
  if (type === "CHALLENGE") {
    content = 
    `Can you generate a flashcard for me in the following format?

    The flashcard should be a JSON object with two keys:
    
    1. "question" which will contain a coding exercise related to the concept in the note.
    2. "answer" which will contain the implementation of the coding exercise.
    Please ensure that the object is easily parsable into JSON format and return only the object.
    
    Here is the note: ${text}`
  }

  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content,
      },
    ],
  });

  return completion.data.choices[0].message.content;
};

module.exports = generateFlashcards;
