const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const generateFlashcards = async (type, text) => {
  let content = '';

  if (type === 'CONCEPT') {
    content = `Generate flashcards (json format) (question and answer) of concepts from this note: ${text}`
  }
  if (type === 'CHALLENGE') {
    content = `Create one flashcard (json format) with a coding exercise and its answer based on this note: ${text}` 
  }

  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{
      role: "user",
      content
    }],
  });

  return completion.data.choices[0].message.content;
}

module.exports = generateFlashcards;