export const MOODS = [
  "Happy",
  "Energetic",
  "Relaxed",
  "Tired",
  "Stressed",
  "Romantic",
  "Celebratory",
  "Homesick",
  "Adventurous"
];

export const COMMON_INGREDIENTS = [
  "Chicken",
  "Beef",
  "Pasta",
  "Rice",
  "Eggs",
  "Milk",
  "Cheese",
  "Onions",
  "Garlic",
  "Tomatoes",
  "Potatoes",
  "Carrots",
  "Spinach",
  "Bell Peppers",
  "Olive Oil",
  "Butter",
  "Flour",
  "Sugar",
  "Salt",
  "Pepper"
];

export const PREDEFINED_RECIPES: Array<{
  id: string;
  title: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  imageUrl: string;
  prepTime: number;
  cookTime: number;
  servings: number;
  calories: number;
  tags: string[];
}> = [
  {
    id: "1",
    title: "Quick Pasta Primavera",
    description: "A light and fresh pasta dish loaded with seasonal vegetables.",
    ingredients: [
      "8 oz pasta",
      "1 cup cherry tomatoes, halved",
      "1 zucchini, sliced",
      "1 yellow squash, sliced",
      "1 bell pepper, chopped",
      "2 cloves garlic, minced",
      "3 tbsp olive oil",
      "1/4 cup grated parmesan cheese",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Bring a large pot of salted water to a boil. Cook pasta according to package directions.",
      "While pasta cooks, heat olive oil in a large skillet over medium-high heat.",
      "Add garlic and sauté for 30 seconds until fragrant.",
      "Add all vegetables and cook for 4-5 minutes until tender but still crisp.",
      "Drain pasta and add to the skillet with vegetables.",
      "Toss everything together with parmesan cheese, salt, and pepper.",
      "Serve immediately with additional parmesan if desired."
    ],
    imageUrl: "https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    prepTime: 10,
    cookTime: 15,
    servings: 4,
    calories: 320,
    tags: ["Quick", "Vegetarian", "Pasta"]
  },
  {
    id: "2",
    title: "15-Minute Chicken Stir Fry",
    description: "A fast and flavorful stir fry perfect for busy weeknights.",
    ingredients: [
      "1 lb boneless chicken breast, sliced",
      "2 cups mixed vegetables (bell peppers, broccoli, carrots)",
      "3 cloves garlic, minced",
      "1 tbsp ginger, minced",
      "3 tbsp soy sauce",
      "1 tbsp honey",
      "2 tbsp vegetable oil",
      "2 green onions, sliced",
      "Cooked rice for serving"
    ],
    instructions: [
      "In a small bowl, mix soy sauce and honey. Set aside.",
      "Heat oil in a large wok or skillet over high heat.",
      "Add chicken and cook for 3-4 minutes until browned.",
      "Add garlic and ginger, stir for 30 seconds.",
      "Add mixed vegetables and stir fry for 2-3 minutes until crisp-tender.",
      "Pour in sauce and cook for 1 minute until everything is well coated.",
      "Garnish with green onions and serve over rice."
    ],
    imageUrl: "https://images.pexels.com/photos/5900759/pexels-photo-5900759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    prepTime: 5,
    cookTime: 10,
    servings: 4,
    calories: 290,
    tags: ["Quick", "High-Protein", "Asian"]
  },
  {
    id: "3",
    title: "Avocado Toast with Egg",
    description: "A nutritious breakfast that's ready in minutes.",
    ingredients: [
      "2 slices whole grain bread",
      "1 ripe avocado",
      "2 eggs",
      "Salt and pepper to taste",
      "Red pepper flakes (optional)",
      "1 tsp olive oil"
    ],
    instructions: [
      "Toast bread to desired crispness.",
      "While bread is toasting, heat olive oil in a non-stick pan over medium heat.",
      "Crack eggs into the pan and cook to your preference (sunny-side up or over easy).",
      "Mash avocado and spread evenly on toast slices.",
      "Top each toast with an egg, then season with salt, pepper, and red pepper flakes if desired."
    ],
    imageUrl: "https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    prepTime: 5,
    cookTime: 5,
    servings: 1,
    calories: 350,
    tags: ["Breakfast", "Vegetarian", "High-Protein"]
  }
];