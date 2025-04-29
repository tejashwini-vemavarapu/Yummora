import { GoogleGenerativeAI } from "@google/generative-ai";
import { Recipe } from "../types";

// This would typically come from environment variables
const API_KEY = "YOUR_GEMINI_API_KEY"; // Replace with actual API key in production

// Initialize the Gemini API
const genAI = new GoogleGenerativeAI(API_KEY);

// Function to generate a recipe using Gemini
export const generateRecipeWithGemini = async (
  mood: string,
  ingredients: string[],
  height?: number,
  weight?: number
): Promise<Recipe> => {
  try {
    // For demo purposes, we'll return a mock recipe
    // In production, you would use the Gemini API here
    
    // Mock implementation
    console.log("Generating recipe with Gemini API:", { mood, ingredients, height, weight });
    
    // In a real implementation, you'd make a call like this:
    /*
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    
    let promptText = `Generate a recipe based on the following:
      - Mood: ${mood}
      - Available ingredients: ${ingredients.join(", ")}`;
      
    if (height && weight) {
      promptText += `
      - User height: ${height} cm
      - User weight: ${weight} kg
      Consider nutritional needs based on these metrics.`;
    }
    
    promptText += `
    Format the response as a JSON object with the following properties:
    title, description, ingredients (array), instructions (array), prepTime, cookTime, servings, calories, tags (array)
    `;
    
    const result = await model.generateContent(promptText);
    const response = await result.response.text();
    
    // Parse the JSON response
    const recipeData = JSON.parse(response);
    */
    
    // For demo, return a mock recipe
    await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API delay
    
    const mockRecipes = [
      {
        title: `${mood} ${ingredients[0]} Delight`,
        description: `A perfect dish for when you're feeling ${mood.toLowerCase()}, using ${ingredients.slice(0, 3).join(", ")}.`,
        ingredients: ingredients.map(ing => `1 cup ${ing}`),
        instructions: [
          "Preheat oven to 350°F (175°C).",
          `Combine ${ingredients[0]} and ${ingredients[1]} in a bowl.`,
          "Mix thoroughly and season to taste.",
          "Cook for 20 minutes until golden brown.",
          "Serve hot and enjoy!"
        ],
        imageUrl: "https://images.pexels.com/photos/1640771/pexels-photo-1640771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        prepTime: 10,
        cookTime: 20,
        servings: 4,
        calories: 350,
        tags: [mood, "Quick", ingredients[0]]
      },
      {
        title: `${ingredients[0]} ${ingredients.length > 1 ? ingredients[1] : ''} Bowl`,
        description: `A nutritious and satisfying dish that matches your ${mood.toLowerCase()} mood.`,
        ingredients: ingredients.map(ing => `2 tbsp ${ing}`),
        instructions: [
          `Dice ${ingredients[0]} into small cubes.`,
          `Heat oil in a pan and add ${ingredients[0]}.`,
          "Cook on medium heat for 10 minutes.",
          "Add remaining ingredients and stir well.",
          "Season with salt and pepper to taste.",
          "Garnish and serve immediately."
        ],
        imageUrl: "https://images.pexels.com/photos/1095550/pexels-photo-1095550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        prepTime: 15,
        cookTime: 15,
        servings: 2,
        calories: 400,
        tags: ["Healthy", mood, "Bowl"]
      }
    ];
    
    return {
      id: Date.now().toString(),
      ...mockRecipes[Math.floor(Math.random() * mockRecipes.length)]
    };
  } catch (error) {
    console.error("Error generating recipe with Gemini:", error);
    throw new Error("Failed to generate recipe");
  }
};