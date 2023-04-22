const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const generateFlashcards = async (type, text) => {
  let content = "";

  if (type === "CONCEPT") {
    content = `Generate flashcards (json format) (question and answer) of concepts from this note: ${text}`;
  }
  if (type === "CHALLENGE") {
    content = `Create one flashcard in json format (Mandatory) with two keys. Key 1 will be question,  which is a coding exercise, and Key 2 will be answer which will be the solution to the coding exercise created based on this note: ${text}`;
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
