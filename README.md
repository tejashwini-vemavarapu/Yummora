# 🍳 Yummora – AI-Powered Smart Cooking App

Yummora is a smart, elegant cooking web app designed to help fast-paced individuals create delicious, healthy meals quickly. By integrating Gemini AI, Yummora provides personalized meal recommendations based on your mood and the ingredients you have at home. Whether you're looking for a quick bite, a comforting meal, or something new to try, Yummora is here to make cooking a breeze.

---

## 🚀 Features

### **Personalized Setup**
- During the initial signup, Yummora asks for your **weight** and **height**.
- These details are used to make personalized meal suggestions that align with your nutritional goals.
- The data will also be used to refine the recommendations over time.

### **User Authentication**
- A **Landing Page** with easy-to-use **Sign Up** and **Login** options.
- Once logged in, users are redirected to a **Home Page**, where they can learn about the features and benefits of Yummora.

### **Home Page**
- The Home Page is a sleek, modern layout that explains what Yummora can do.
- After reading the features, the user can click on the **“Let’s Cook!”** button to begin the meal selection process.

### **Gemini AI-Powered Meal Suggestions**
- Users can input their **mood** (e.g., happy, stressed, relaxed) and **ingredients** available at home.
- Based on these inputs, Gemini AI recommends personalized meal ideas.
- The app suggests meals that fit the user's context, dietary preferences, and available ingredients, making it easy to decide what to cook.

### **Predefined Meal Options**
- If users aren’t sure what they want to eat, **predefined meals** are available as quick suggestions.
- These meal ideas are curated based on common preferences and ingredients, providing easy options for those in a rush or uncertain about what to cook.

### **Session Storage**
- All user inputs (such as mood, ingredients, and meal preferences) are **stored for future sessions**.
- This allows the app to remember user preferences and provide even more tailored suggestions with each visit.

### **Recipe Download**
- Once a meal is selected, the app provides a **downloadable PDF recipe**.
- The recipe PDF is beautifully formatted and includes step-by-step instructions, ingredients, and even nutrition information (based on the user’s input).

### **Elegant and Intuitive Design**
- The user interface is **eye-catching** and **user-friendly**, designed to make cooking a fun and pleasant experience.
- It’s responsive, ensuring that the app works smoothly across desktops, tablets, and mobile devices.
- The design features modern colors, easy navigation, and interactive elements that encourage users to engage with the app.

---

## ⚙️ Installation

### **Prerequisites**
To get started with Yummora, you will need to have the following installed on your system:
- A **code editor** (e.g., VSCode, Sublime Text)
- **Node.js** and **npm** (Node Package Manager) for managing dependencies.
- A **Gemini API key** (sign up on the Gemini API website to get access).

### **Steps to Set Up**

1. **Clone the Repository**
   - Copy the URL of the project and clone it to your local machine using the following command:
     ```bash
     git clone https://github.com/your-username/yummora.git
     ```

2. **Install Dependencies**
   - Navigate to the project folder in your terminal:
     ```bash
     cd yummora
     ```
   - Install all the necessary dependencies for the project:
     ```bash
     npm install
     ```

3. **Environment Variables**
   - Create a `.env` file in the root directory.
   - Add the Gemini API key and any other necessary environment variables (e.g., database connection strings).

4. **Run the App**
   - Once all dependencies are installed and the environment variables are set up, start the development server:
     ```bash
     npm start
     ```
   - Open the app in your browser to start exploring Yummora at `http://localhost:3000`.

### **App Flow**
- **Sign Up / Login** → **Home Page** → **Input Mood + Ingredients** → **Receive Meal Suggestions** → **Download Recipe PDF**

---

## 📜 License

Yummora is open-source and licensed under the **MIT License**. You can freely use, modify, and distribute this software, provided you include the original license file in your distributions.

---
