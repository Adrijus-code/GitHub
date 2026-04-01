import Groq from "groq-sdk";

const groq = new Groq({ 
    apiKey: import.meta.env.VITE_GROQ_API_KEY, 
    dangerouslyAllowBrowser: true 
});

export async function getGroqChatCompletion() {
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: "Explain the importance of fast language models",
      },
    ],
    // Note: Ensure this model name is correct for your Groq tier
    model: "llama-3.3-70b-versatile", 
  });
}

export async function main() {
  console.log("Fetching completion...");
  try {
    const chatCompletion = await getGroqChatCompletion();
    const content = chatCompletion.choices[0]?.message?.content || "No response";
    console.log("AI Response:", content);
    
    // Optional: Display it on the webpage
    document.querySelector('#app').innerHTML = `<h1>AI says:</h1><p>${content}</p>`;
  } catch (error) {
    console.error("Groq API Error:", error);
  }
}

// THIS IS THE KEY: Call the function so it runs!
main();