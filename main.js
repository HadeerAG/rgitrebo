
var recipes = [
  {
    id: 1,
    name: "Caprese Sandwich",
    description: "A fresh Italian sandwich made with mozzarella, tomatoes, basil, and pesto.",
    difficulty: "Easy",
    cuisine: "Italian",
    image: "Caprese-Sandwich.jpeg",
    rating: 4.5,
    reviewsCount: 189,
    servings: 1,
    prepTime: "10 minutes",
    cookTime: "0 minutes",
    ingredients: [
      "1 ciabatta bread",
      "200g fresh mozzarella, sliced",
      "2 large tomatoes, sliced",
      "Fresh basil leaves",
      "3 tablespoons pesto",
      "2 tablespoons balsamic glaze",
      "Olive oil",
      "Salt and pepper"
    ],
    instructions: [
      "Slice the ciabatta bread in half.",
      "Spread pesto on both sides.",
      "Layer tomatoes, mozzarella, and basil.",
      "Drizzle with olive oil and balsamic glaze.",
      "Season with salt and pepper.",
      "Close the sandwich and serve."
    ],
    nutrition: {
      calories: 450,
      protein: "20g",
      carbs: "40g",
      fat: "22g",
      fiber: "3g",
      sodium: "400mg"
    },
    tips: [
      "Use fresh mozzarella for the best texture.",
      "Toast the bread lightly if you prefer more crunch."
    ]
  },
  {
    id: 2,
    name: "Chicken Caesar Wrap",
    description: "A creamy wrap filled with grilled chicken, crisp lettuce, and Caesar dressing.",
    difficulty: "Easy",
    cuisine: "American",
    image: "Chicken-Caesar-Wrap.jpeg",
    rating: 4.7,
    reviewsCount: 95,
    servings: 1,
    prepTime: "15 minutes",
    cookTime: "10 minutes",
    ingredients: [
      "2 tortilla wraps",
      "1 grilled chicken breast, sliced",
      "1 cup chopped romaine lettuce",
      "3 tablespoons Caesar dressing",
      "Parmesan shavings",
      "Salt and black pepper"
    ],
    instructions: [
      "Place lettuce and chicken on the tortilla.",
      "Add Caesar dressing and parmesan.",
      "Season lightly.",
      "Roll the wrap tightly and slice in half."
    ],
    nutrition: {
      calories: 390,
      protein: "28g",
      carbs: "33g",
      fat: "15g",
      fiber: "3g",
      sodium: "400mg"
    },
   
    tips: [
      "Add croutons for extra crunch.",
      "Use whole-grain wraps for a healthier version."
    ]
  },
  {
    id: 3,
    name: "Pesto Pasta Salad",
    description: "A refreshing cold pasta salad mixed with pesto, cherry tomatoes, and mozzarella.",
    difficulty: "Easy",
    cuisine: "Italian",
    image: "Pesto-Pasta-Salad.jpeg",
    rating: 4.6,
    reviewsCount: 122,
    servings: 2,
    prepTime: "15 minutes",
    cookTime: "0 minutes",
    ingredients: [
      "2 cups cooked pasta",
      "1/2 cup pesto",
      "1 cup cherry tomatoes, halved",
      "1 cup mini mozzarella balls",
      "Salt and pepper",
      "Olive oil"
    ],
    instructions: [
      "In a large bowl, mix pasta with pesto.",
      "Add cherry tomatoes and mozzarella.",
      "Season and drizzle with olive oil.",
      "Chill for 10 minutes before serving."
    ],
    nutrition: {
      calories: 480,
      protein: "18g",
      carbs: "55g",
      fat: "22g",
      fiber: "3g",
      sodium: "400mg"
    },
    tips: [
      "Add grilled chicken to make it a full meal.",
      "Use homemade pesto for stronger flavor."
    ]
  },
  {
    id: 4,
    name: "Mediterranean Quinoa Salad",
    description: "A healthy salad with quinoa, cucumbers, tomatoes, olives, and feta cheese.",
    difficulty: "Easy",
    cuisine: "Mediterranean",
    image: "Mediterranean-Quinoa-Salad.jpeg",
    rating: 4.8,
    reviewsCount: 150,
    servings: 3,
    prepTime: "15 minutes",
    cookTime: "10 minutes",
    ingredients: [
      "1 cup cooked quinoa",
      "1 cucumber, diced",
      "1 cup cherry tomatoes, halved",
      "1/2 cup black olives, sliced",
      "100g feta cheese, crumbled",
      "2 tablespoons olive oil",
      "1 tablespoon lemon juice",
      "Salt and pepper"
    ],
    instructions: [
      "Combine quinoa, cucumber, tomatoes, olives, and feta in a bowl.",
      "Mix olive oil and lemon juice, then pour over salad.",
      "Season with salt and pepper.",
      "Toss gently and serve chilled."
    ],
    nutrition: {
      calories: 350,
      protein: "12g",
      carbs: "40g",
      fat: "15g",
      fiber: "3g",
      sodium: "400mg"
    },
    tips: [
      "Add fresh mint or parsley for extra freshness.",
      "Use homemade lemon juice dressing for best taste."
    ]
  },
  {
    id: 5,
    name: "Spicy Shrimp Tacos",
    description: "Tacos filled with spicy shrimp, fresh slaw, and a creamy sauce.",
    difficulty: "Medium",
    cuisine: "Mexican",
    image: "Spicy-Shrimp-Tacos.jpeg",
    rating: 4.9,
    reviewsCount: 210,
    servings: 2,
    prepTime: "15 minutes",
    cookTime: "15 minutes",
    ingredients: [
      "12 medium shrimp, peeled and deveined",
      "1 teaspoon chili powder",
      "1/2 teaspoon cumin",
      "Salt and pepper",
      "6 small tortillas",
      "1 cup shredded cabbage",
      "1/4 cup mayonnaise",
      "1 tablespoon lime juice",
      "Fresh cilantro"
    ],
    instructions: [
      "Season shrimp with chili powder, cumin, salt, and pepper.",
      "Cook shrimp in a skillet until pink.",
      "Mix mayonnaise with lime juice to make sauce.",
      "Fill tortillas with shrimp, cabbage, and drizzle sauce.",
      "Garnish with cilantro and serve."
    ],
    nutrition: {
      calories: 420,
      protein: "30g",
      carbs: "35g",
      fat: "18g",
      fiber: "3g",
      sodium: "400mg"
    },
    
    tips: [
      "Add avocado slices for creaminess.",
      "Use corn tortillas for gluten-free option."
    ]
  },
  {
    id: 6,
    name: "Vegetable Stir Fry",
    description: "A colorful stir fry with fresh vegetables and a savory soy sauce glaze.",
    difficulty: "Easy",
    cuisine: "Asian",
    image: "Vegetable-Stir-Fry.jpeg",
    rating: 4.4,
    reviewsCount: 130,
    servings: 2,
    prepTime: "10 minutes",
    cookTime: "10 minutes",
    ingredients: [
      "1 bell pepper, sliced",
      "1 cup broccoli florets",
      "1 carrot, julienned",
      "1 zucchini, sliced",
      "2 tablespoons soy sauce",
      "1 tablespoon sesame oil",
      "2 cloves garlic, minced",
      "1 teaspoon ginger, grated"
    ],
    instructions: [
      "Heat sesame oil in a wok or skillet.",
      "Add garlic and ginger, sauté briefly.",
      "Add vegetables and stir fry until tender-crisp.",
      "Pour soy sauce over and mix well.",
      "Serve hot with rice or noodles."
    ],
    nutrition: {
      calories: 280,
      protein: "7g",
      carbs: "35g",
      fat: "12g",
      fiber: "3g",
      sodium: "400mg"
    },
    tips: [
      "Add tofu or chicken for extra protein.",
      "Use fresh ginger for better aroma."
    ]
  },
  {
    id: 7,
    name: "Classic Beef Burger",
    description: "Juicy beef patty served with lettuce, tomato, cheese, and special sauce in a bun.",
    difficulty: "Medium",
    cuisine: "American",
    image: "Classic-Beef-Burger.jpeg",
    rating: 4.7,
    reviewsCount: 250,
    servings: 1,
    prepTime: "10 minutes",
    cookTime: "15 minutes",
    ingredients: [
      "200g ground beef",
      "1 hamburger bun",
      "Lettuce leaves",
      "2 tomato slices",
      "1 slice cheddar cheese",
      "1 tablespoon mayonnaise",
      "1 teaspoon ketchup",
      "Salt and pepper"
    ],
    instructions: [
      "Shape ground beef into a patty and season.",
      "Grill or pan-fry patty to desired doneness.",
      "Toast bun lightly.",
      "Assemble burger with lettuce, tomato, cheese, and sauces.",
      "Serve immediately."
    ],
    nutrition: {
      calories: 550,
      protein: "35g",
      carbs: "40g",
      fat: "30g",
      fiber: "3g",
      sodium: "400mg"
    },
    tips: [
      "Let the patty rest for a few minutes after cooking.",
      "Use brioche buns for a richer taste."
    ]
  },
  {
  id: 8,
  name: "Sheet Pan Lemon Herb Chicken and Potatoes",
  description: "An easy, one-pan dinner featuring tender chicken and roasted potatoes with bright lemon and herbs.",
  difficulty: "Easy",
  cuisine: "American/Mediterranean",
  image: "Sheet-Pan-Lemon-Herb-Chicken-Potatoes.jpeg",
  rating: 4.7,
  reviewsCount: 85,
  servings: 4,
  prepTime: "15 minutes",
  cookTime: "30-35 minutes",
  ingredients: [
    "4 boneless, skinless chicken breasts",
    "1.5 lbs small red or yellow potatoes, halved",
    "1/4 cup olive oil",
    "2 tablespoons dried Italian herbs (or mixture of rosemary, thyme, oregano)",
    "2 cloves garlic, minced",
    "Juice of 1 large lemon",
    "Salt and black pepper to taste"
  ],
  instructions: [
    "Preheat oven to 400°F (200°C) and line a sheet pan with parchment paper.",
    "In a large bowl, toss potatoes with half of the olive oil, 1 tablespoon of herbs, salt, and pepper.",
    "Spread potatoes on the sheet pan and roast for 15 minutes.",
    "While potatoes roast, mix remaining olive oil, herbs, garlic, lemon juice, salt, and pepper in a small bowl.",
    "Toss chicken breasts in the marinade mixture.",
    "After 15 minutes, add the chicken to the sheet pan among the potatoes.",
    "Continue roasting for another 15-20 minutes, or until the chicken is cooked through (internal temperature of 165°F / 74°C) and potatoes are tender."
  ],
  nutrition: {
    calories: 450,
    protein: "45g",
    carbs: "35g",
    fat: "17g",
   fiber: "3g",
  sodium: "400mg"
  },
  tips: [
    "Cut potatoes into roughly equal sizes for even cooking.",
    "Add quick-cooking vegetables like broccoli florets during the last 10-15 minutes of roasting."
  ]
},
  {
    id: 9,
    name: "Margherita Pizza",
    description: "Classic Italian pizza topped with tomato sauce, mozzarella, and fresh basil.",
    difficulty: "Medium",
    cuisine: "Italian",
    image: "Margherita-Pizza.jpeg",
    rating: 4.8,
    reviewsCount: 275,
    servings: 2,
    prepTime: "20 minutes",
    cookTime: "20 minutes",
    ingredients: [
      "1 pizza dough base",
      "1/2 cup tomato sauce",
      "150g fresh mozzarella, sliced",
      "Fresh basil leaves",
      "Olive oil",
      "Salt"
    ],
    instructions: [
      "Preheat oven to 220°C (430°F).",
      "Spread tomato sauce over the dough.",
      "Top with mozzarella slices and basil leaves.",
      "Drizzle olive oil and sprinkle salt.",
      "Bake for 12-15 minutes until crust is golden."
    ],
    nutrition: {
      calories: 600,
      protein: "25g",
      carbs: "70g",
      fat: "20g",
      fiber: "3g",
      sodium: "400mg"
    },
    tips: [
      "Use a pizza stone for crispier crust.",
      "Add a sprinkle of chili flakes for heat."
    ]
  },
  {
    id: 10,
    name: "Avocado Toast",
    description: "Creamy mashed avocado spread on toasted bread with seasoning.",
    difficulty: "Easy",
    cuisine: "American",
    image: "Avocado-Toast.jpeg",
    rating: 4.5,
    reviewsCount: 220,
    servings: 1,
    prepTime: "5 minutes",
    cookTime: "5 minutes",
    ingredients: [
      "1 ripe avocado",
      "2 slices whole grain bread",
      "1 teaspoon lemon juice",
      "Salt and pepper",
      "Chili flakes (optional)"
    ],
    instructions: [
      "Toast the bread slices.",
      "Mash avocado with lemon juice, salt, and pepper.",
      "Spread the avocado mixture on toast.",
      "Sprinkle chili flakes if desired.",
      "Serve immediately."
    ],
    nutrition: {
      calories: 320,
      protein: "7g",
      carbs: "30g",
      fat: "18g",
      fiber: "3g",
      sodium: "400mg"
    },
    tips: [
      "Use ripe avocados for smooth texture.",
      "Add a poached egg on top for extra protein."
    ]
  },
  {
  id: 11,
  name: "Creamy Tomato and Spinach Pasta",
  description: "A quick and comforting pasta dish with a rich tomato cream sauce and fresh spinach.",
  difficulty: "Easy",
  cuisine: "Italian",
  image: "Creamy-Tomato-Spinach-Pasta.jpeg",
  rating: 4.9,
  reviewsCount: 210,
  servings: 4,
  prepTime: "5 minutes",
  cookTime: "20 minutes",
  ingredients: [
    "1 lb pasta (penne, rotini, or fettuccine)",
    "1 tablespoon olive oil",
    "1 small onion, diced",
    "3 cloves garlic, minced",
    "28 oz can crushed tomatoes",
    "1/2 cup heavy cream (or full-fat coconut milk for dairy-free)",
    "4 oz fresh spinach",
    "1/4 cup Parmesan cheese, grated (optional)",
    "1 teaspoon dried oregano",
    "Salt and red pepper flakes to taste"
  ],
  instructions: [
    "Cook pasta according to package directions; reserve 1/2 cup of the pasta water before draining.",
    "In a large saucepan, heat olive oil over medium heat. Add onion and cook until soft, about 5 minutes.",
    "Add garlic and red pepper flakes (if using); cook for 1 minute until fragrant.",
    "Pour in the crushed tomatoes and oregano. Bring to a simmer, then reduce heat and cook for 10 minutes.",
    "Stir in the heavy cream and Parmesan cheese (if using). Season with salt.",
    "Stir in the fresh spinach until it wilts completely, about 1-2 minutes.",
    "Toss the drained pasta into the sauce. Add a tablespoon or two of the reserved pasta water to reach your desired consistency."
  ],
  nutrition: {
    calories: 550,
    protein: "20g",
    carbs: "70g",
    fat: "22g",
    fiber: "3g",
    sodium: "400mg"
  },
  tips: [
    "Use **San Marzano tomatoes** for a sweeter, less acidic sauce.",
    "For an extra protein boost, stir in grilled chicken or canned chickpeas."
  ]
},
  {
    id: 12,
    name: "Tomato Basil Soup",
    description: "A warm, creamy tomato soup flavored with fresh basil.",
    difficulty: "Easy",
    cuisine: "American",
    image: "Tomato-Basil-Soup.jpeg",
    rating: 4.7,
    reviewsCount: 190,
    servings: 3,
    prepTime: "10 minutes",
    cookTime: "25 minutes",
    ingredients: [
      "6 large tomatoes, chopped",
      "1 onion, chopped",
      "2 cloves garlic, minced",
      "2 cups vegetable broth",
      "1/2 cup heavy cream",
      "Fresh basil leaves",
      "Salt and pepper",
      "Olive oil"
    ],
    instructions: [
      "Sauté onion and garlic in olive oil until soft.",
      "Add tomatoes and cook until broken down.",
      "Pour in broth and simmer for 20 minutes.",
      "Blend soup until smooth.",
      "Stir in cream and chopped basil.",
      "Season and serve hot."
    ],
    nutrition: {
      calories: 220,
      protein: "5g",
      carbs: "20g",
      fat: "12g",
      fiber: "3g",
      sodium: "400mg"
    },
    tips: [
      "Use fresh, ripe tomatoes for best flavor.",
      "Garnish with a basil leaf or drizzle of cream."
    ]
  },
  {
    id: 13,
    name: "Garlic Butter Salmon",
    description: "Tender salmon fillets cooked in a garlic butter sauce.",
    difficulty: "Medium",
    cuisine: "Seafood",
    image: "Garlic-Butter-Salmon.jpeg",
    rating: 4.9,
    reviewsCount: 210,
    servings: 2,
    prepTime: "10 minutes",
    cookTime: "15 minutes",
    ingredients: [
      "2 salmon fillets",
      "3 tablespoons butter",
      "3 cloves garlic, minced",
      "1 tablespoon lemon juice",
      "Salt and pepper",
      "Fresh parsley, chopped"
    ],
    instructions: [
      "Season salmon with salt and pepper.",
      "Melt butter in skillet and sauté garlic.",
      "Add salmon fillets, cook skin-side down for 4-5 minutes.",
      "Flip and cook other side for 3-4 minutes.",
      "Drizzle lemon juice and sprinkle parsley.",
      "Serve hot."
    ],
    nutrition: {
      calories: 450,
      protein: "40g",
      carbs: "0g",
      fat: "30g",
      fiber: "3g",
      sodium: "400mg"
    },
    tips: [
      "Don’t overcook salmon to keep it moist.",
      "Serve with steamed vegetables or rice."
    ]
  },
  {
    id: 14,
    name: "Chickpea Curry",
    description: "A flavorful and creamy curry made with chickpeas and spices.",
    difficulty: "Medium",
    cuisine: "Indian",
    image: "Chickpea-Curry.jpeg",
    rating: 4.6,
    reviewsCount: 160,
    servings: 3,
    prepTime: "15 minutes",
    cookTime: "25 minutes",
    ingredients: [
      "2 cups cooked chickpeas",
      "1 onion, chopped",
      "2 tomatoes, pureed",
      "2 cloves garlic, minced",
      "1 tablespoon ginger, grated",
      "1 teaspoon cumin",
      "1 teaspoon turmeric",
      "1 teaspoon garam masala",
      "1 cup coconut milk",
      "Salt",
      "Oil"
    ],
    instructions: [
      "Sauté onion, garlic, and ginger in oil.",
      "Add spices and cook until fragrant.",
      "Add tomato puree and cook until oil separates.",
      "Add chickpeas and coconut milk, simmer 15 minutes.",
      "Season with salt and serve with rice or naan."
    ],
    nutrition: {
      calories: 400,
      protein: "15g",
      carbs: "45g",
      fat: "15g",
      fiber: "3g",
      sodium: "400mg"
    },
    tips: [
      "Use fresh spices for better aroma.",
      "Garnish with fresh cilantro."
    ]
  },
{
  id: 15,
  name: "Quick Black Bean and Corn Chili",
  description: "A hearty, plant-based chili that's ready in under 30 minutes, full of flavor and fiber.",
  difficulty: "Easy",
  cuisine: "Mexican/Southwestern (Vegetarian)",
  image: "Quick-Black-Bean-Corn-Chili.jpeg",
  rating: 4.6,
  reviewsCount: 155,
  servings: 6,
  prepTime: "10 minutes",
  cookTime: "15 minutes",
  ingredients: [
    "1 tablespoon vegetable oil",
    "1 medium bell pepper (any color), chopped",
    "1 medium onion, chopped",
    "2 (15 oz) cans black beans, rinsed and drained",
    "1 (15 oz) can diced tomatoes, undrained",
    "1 cup frozen corn",
    "2 cups vegetable broth",
    "2 tablespoons chili powder",
    "1 teaspoon ground cumin",
    "1/2 teaspoon smoked paprika",
    "Salt and pepper to taste"
  ],
  instructions: [
    "Heat oil in a large pot or Dutch oven over medium heat.",
    "Add onion and bell pepper and cook until soft, about 5-7 minutes.",
    "Stir in chili powder, cumin, and smoked paprika. Cook for 1 minute until fragrant.",
    "Add the rinsed black beans, diced tomatoes (undrained), corn, and vegetable broth.",
    "Bring the mixture to a boil, then reduce heat to low and simmer for 10-15 minutes, allowing flavors to meld.",
    "Season with salt and pepper. Serve hot with your favorite toppings (e.g., avocado, shredded cheese, sour cream, or cilantro)."
  ],
  nutrition: {
    calories: 280,
    protein: "14g",
    carbs: "50g",
    fat: "3g",
    fiber: "3g",
    sodium: "400mg"
  },
  tips: [
    "For a thicker chili, mash about **half a cup of the beans** against the side of the pot before simmering.",
    "Add a dash of **hot sauce or cayenne pepper** for extra heat."
  ]
}
]


localStorage.setItem("allRecipes", JSON.stringify(recipes))

var Recipe = JSON.parse(localStorage.getItem("allRecipes"))



var oldValue;

function display(){

var randomIndex = Math.floor(Math.random() * Recipe.length);

while(randomIndex == oldValue){
  var randomIndex = Math.floor(Math.random() * Recipe.length);
}
oldValue == randomIndex

var randomRecipe = Recipe[randomIndex];


document.getElementById("meal-recipes").innerHTML =`

    <div class="container-fluid ">
      <div class="row ">

       <!-- Left Side -->

        <div class="col-lg-5 col-md-12 position-relative p-0">
          <div class="meal-img ">
            <img class="w-100" src="./Images/${randomRecipe.image}" alt="">

          </div>

          <div class="meal-review d-flex align-items-center justify-content-center position-absolute rounded-4 mx-3 px-2">
            <i class="fa-solid fa-star fs-6 mx-1 "></i>
            <h5 class="mx-1 pt-2 fs-6">${randomRecipe.rating}</h5>
            <span class="py-1">(${randomRecipe.reviewsCount} reviews)</span>
          </div>
                       
           
          <div class="meal-info py-2 d-flex justify-content-between align-items-center position-absolute rounded-4 ">

            <div class="prep-time text-center mx-5">
              <i class="fa-solid fa-clock fs-4 my-2"></i>
              <p class="text-center mb-1">Prep Time</p>
              <h6 class="m-0 p-0">${randomRecipe.prepTime}</h6>
            </div>

            <div class="cook-time text-center mx-5">
              <i class="fa-solid fa-fire-burner fs-4 my-2"></i>
              <p class="text-center mb-1">Cook Time</p>
              <h6 class="m-0 p-0">${randomRecipe.cookTime}</h6>
            </div>

            <div class="serving  text-center mx-5">
              <i class="fa-solid fa-users fs-4 my-2"></i>
              <p class="text-center mb-1">Servings</p>
              <h6 class="m-0 p-0">${randomRecipe.servings}</h6>
            </div>

          </div>
                   

        </div>

        <!-- Right Side -->

        <div class="col-lg-7 col-md-12 p-4">

          <div class="meal-icons d-flex py-3">
            <span class="mx-3 px-2 rounded-2 d-flex align-items-center justify-content-center">${randomRecipe.difficulty}</span>
            <span class="mx-3 px-2 rounded-2 d-flex align-items-center justify-content-center">${randomRecipe.cuisine}</span>
          </div>

          <div class="meal-name d-flex justify-content-around ">
            <div class="meal-name-txt">
              <h3 class="fs-1">${randomRecipe.name}</h3>
              <p>${randomRecipe.description}</p>

            </div>
            
            <div class="meal-name-icons align-self-center">
                <span class="p-3 mx-2 rounded-3"><i class="fa-solid fa-bookmark fs-6"></i></span>
              
              <span class="p-3 mx-1 rounded-3"> <i class="fa-solid fa-share-nodes fs-6"></i></span>

            </div>
            

          </div>

          <div class="meal-notes">
            <div class="alert-icon">

            </div>

            <div class="notes-txt">

            </div>
          </div>

          <!-- recipies section -->

   <ul class="nav nav-tabs nav-tabs-meals my-4 mx-3 position-relative" id="myTab" role="tablist">
  <li class="nav-item pb-2" role="presentation">
    <button class="nav-link active meals-nav-recipe fw-semibold" id="ingred-tab" data-bs-toggle="tab" data-bs-target="#ingred-tab-pane" type="button" role="tab" aria-controls="ingred-tab-pane" aria-selected="true">
     <i class="fa-solid fa-list-check"></i>
     <span> Ingredients</span>
    </button>
  </li>
  <li class="nav-item pb-2" role="presentation">
    <button class="nav-link meals-nav-recipe fw-semibold" id="instruc-tab" data-bs-toggle="tab" data-bs-target="#instruc-tab-pane" type="button" role="tab" aria-controls="instruc-tab-pane" aria-selected="false">
     <i class="fa-solid fa-book-open"></i>
     Instructions

    </button>
  </li>
  <li class="nav-item pb-2" role="presentation">
    <button class="nav-link meals-nav-recipe fw-semibold" id="Nutri-tab" data-bs-toggle="tab" data-bs-target="#Nutri-tab-pane" type="button" role="tab" aria-controls="Nutri-tab-pane" aria-selected="false">
      <i class="fa-solid fa-chart-pie"></i>
      Nutrition
    </button>
  </li>
  <li class="nav-item pb-2" role="presentation">
    <button class="nav-link meals-nav-recipe fw-semibold" id="chef-tab" data-bs-toggle="tab" data-bs-target="#chef-tab-pane" type="button" role="tab" aria-controls="chef-tab-pane" aria-selected="false">
      <i class="fa-solid fa-lightbulb"></i>
      Chef's Tips
    </button>
  </li>
  
</ul>
<div class="tab-content mx-1" id="myTabContent">
  <div class="tab-pane fade show active" id="ingred-tab-pane" role="tabpanel" aria-labelledby="ingred-tab" tabindex="0">
    <ul class="list-unstyled ingred-list p-3 rounded-3">
    
      <li class="d-flex align-items-center fs-6 my-2"><div class="rounded-circle me-3 ms-1 p-2 fw-semibold d-flex justify-content-center align-items-center num">1</div>
         ${randomRecipe.ingredients[0]}</li>
      <li class="d-flex align-items-center fs-6 my-2"><div class="rounded-circle me-3 ms-1 p-2 fw-semibold d-flex justify-content-center align-items-center num">2</div>
        ${randomRecipe.ingredients[1]}</li>
      <li class="d-flex align-items-center fs-6 my-2"><div class="rounded-circle me-3 ms-1 p-2 fw-semibold d-flex justify-content-center align-items-center num">3</div>
        ${randomRecipe.ingredients[2]}</li>
      <li class="d-flex align-items-center fs-6 my-2"><div class="rounded-circle me-3 ms-1 p-2 fw-semibold d-flex justify-content-center align-items-center num">4</div>
        ${randomRecipe.ingredients[3]}</li>
      <li class="d-flex align-items-center fs-6 my-2"><div class="rounded-circle me-3 ms-1 p-2 fw-semibold d-flex justify-content-center align-items-center num">5</div>
        ${randomRecipe.ingredients[4]}</li>
      
         ${randomRecipe.ingredients[5] ? `
<li class="d-flex align-items-center fs-6 my-2">
  <div class="rounded-circle me-3 ms-1 p-2 fw-semibold d-flex justify-content-center align-items-center num">6</div>
  ${randomRecipe.ingredients[5]}
</li>
` : ''}
         ${randomRecipe.ingredients[6] ? `
<li class="d-flex align-items-center fs-6 my-2">
  <div class="rounded-circle me-3 ms-1 p-2 fw-semibold d-flex justify-content-center align-items-center num">7</div>
  ${randomRecipe.ingredients[6]}
</li>
` : ''}

      ${randomRecipe.ingredients[7] ? `
<li class="d-flex align-items-center fs-6 my-2">
  <div class="rounded-circle me-3 ms-1 p-2 fw-semibold d-flex justify-content-center align-items-center num">8</div>
  ${randomRecipe.ingredients[7]}
</li>
` : ''}

${randomRecipe.ingredients[8] ? `
<li class="d-flex align-items-center fs-6 my-2">
  <div class="rounded-circle me-3 ms-1 p-2 fw-semibold d-flex justify-content-center align-items-center num">9</div>
  ${randomRecipe.ingredients[8]}
</li>
` : ''}

    </ul>
  </div>
  <div class="tab-pane fade" id="instruc-tab-pane" role="tabpanel" aria-labelledby="instruc-tab" tabindex="0">
    <ul class="instruc-list mb-4">
      <li class="d-flex align-items-center  my-2">
      <div class="num-instruc fs-5 rounded-2 me-3 ms-1 p-2 fw-semibold d-flex justify-content-center align-items-center num">1</div> 
      ${randomRecipe.instructions[0]}</li>
      <li class="d-flex align-items-center  my-2">
      <div class="num-instruc fs-5 rounded-2 me-3 ms-1 p-2 fw-semibold d-flex justify-content-center align-items-center num">2</div>
      ${randomRecipe.instructions[1]} </li>
      <li class="d-flex align-items-center  my-2"> 
      <div class="num-instruc fs-5 rounded-2 me-3 ms-1 p-2 fw-semibold d-flex justify-content-center align-items-center num">3</div>
       ${randomRecipe.instructions[2]}</li>
       ${randomRecipe.instructions[3] ? `
<li class="d-flex align-items-center  my-2">
  <div class="num-instruc fs-5 rounded-2 me-3 ms-1 p-2 fw-semibold d-flex justify-content-center align-items-center num">4</div>
  ${randomRecipe.instructions[3]}
</li>
` : ''}

${randomRecipe.instructions[4] ? `
<li class="d-flex align-items-center  my-2">
  <div class="num-instruc fs-5 rounded-2 me-3 ms-1 p-2 fw-semibold d-flex justify-content-center align-items-center num">5</div>
  ${randomRecipe.instructions[4]}
</li>
` : ''}
      
${randomRecipe.instructions[5] ? `
<li class="d-flex align-items-center  my-2">
  <div class="num-instruc fs-5 rounded-2 me-3 ms-1 p-2 fw-semibold d-flex justify-content-center align-items-center num">6</div>
  ${randomRecipe.instructions[5]}
</li>
` : ''}

${randomRecipe.instructions[6] ? `
<li class="d-flex align-items-center  my-2">
  <div class="num-instruc fs-5 rounded-2 me-3 ms-1 p-2 fw-semibold d-flex justify-content-center align-items-center num">7</div>
  ${randomRecipe.instructions[6]}
</li>
` : ''}
     

    </ul>

  </div>
  <div class="tab-pane fade" id="Nutri-tab-pane" role="tabpanel" aria-labelledby="Nutri-tab" tabindex="0">
    <div class="container">
      <div class="row g-3 mx-0 mb-5 w-100 justify-content-between">
        <div class="col-6 rounded-4 d-flex align-items-center justify-content-between nutrition">
          <div class="calories d-flex align-items-center">
          <div class="mx-3 rounded-3 d-flex align-items-center justify-content-center">
            <i class="fa-solid fa-fire"></i>
          </div>
          <h5>Calories</h5>

          </div>

          <h4>${randomRecipe.nutrition.calories} kcal</h4>

        </div>
        <div class="col-5 rounded-4 d-flex align-items-center justify-content-between nutrition">
          <div class="protein d-flex align-items-center">
          <div class="mx-3 rounded-3 d-flex align-items-center justify-content-center">
            <i class="fa-solid fa-dumbbell"></i>
          </div>
          <h5>Protein</h5>

          </div>

          <h4>${randomRecipe.nutrition.protein}</h4>

        </div>
        <div class="col-6 rounded-4 d-flex align-items-center justify-content-between nutrition">
          <div class="carbs d-flex align-items-center">
          <div class="mx-3 rounded-3 d-flex align-items-center justify-content-center">
            <i class="fa-solid fa-wheat-awn"></i>
          </div>
          <h5>Carbs</h5>

          </div>

          <h4>${randomRecipe.nutrition.carbs}</h4>

        </div>
        <div class="col-5 rounded-4 d-flex align-items-center justify-content-between nutrition">
          <div class="fat d-flex align-items-center">
          <div class="mx-3 rounded-3 d-flex align-items-center justify-content-center">
           <i class="fa-solid fa-droplet"></i>
          </div>
          <h5>Fat</h5>

          </div>

          <h4>${randomRecipe.nutrition.fat}</h4>

        </div>
        <div class="col-6 rounded-4 d-flex align-items-center justify-content-between nutrition">
          <div class="fiber d-flex align-items-center">
          <div class="mx-3 rounded-3 d-flex align-items-center justify-content-center">
            <i class="fa-solid fa-seedling"></i>
          </div>
          <h5>Fiber</h5>

          </div>

          <h4>${randomRecipe.nutrition.fiber}</h4>

        </div>
        <div class="col-5 rounded-4 d-flex align-items-center justify-content-between nutrition">
          <div class="sodium d-flex align-items-center">
          <div class="mx-3 rounded-3 d-flex align-items-center justify-content-center">
            <i class="fa-solid fa-cube"></i>
          </div>
          <h5>Sodium</h5>

          </div>

          <h4>${randomRecipe.nutrition.sodium}</h4>

        </div>
       
      </div>
    </div>
  </div>
  <div class="tab-pane fade" id="chef-tab-pane" role="tabpanel" aria-labelledby="chef-tab" tabindex="0">
    <ul class="Tips-list mb-5">
      <li class="d-flex align-items-center my-2 p-3"><div class="fs-6 rounded-circle me-3 ms-1 p-2 fw-semibold d-flex justify-content-center align-items-center text-white check">✔</div>
        ${randomRecipe.tips[0]}</li>
        <li class="d-flex align-items-center my-2 p-3"><div class="fs-6 rounded-circle me-3 ms-1 p-2 fw-semibold d-flex justify-content-center align-items-center text-white check">✔</div>
          ${randomRecipe.tips[1]}</li>
          ${randomRecipe.tips[2] ? `<li class="d-flex align-items-center my-2 p-3"><div class="fs-6 rounded-circle me-3 ms-1 p-2 fw-semibold d-flex justify-content-center align-items-center text-white check">✔</div>
          ${randomRecipe.tips[2]} </li> ` : ''}
          ${randomRecipe.tips[3] ? `<li class="d-flex align-items-center my-2 p-3"><div class="fs-6 rounded-circle me-3 ms-1 p-2 fw-semibold d-flex justify-content-center align-items-center text-white check">✔</div>
          ${randomRecipe.tips[3]} </li> ` : ''}


    </ul>
  </div>
  
</div>

<!-- choosing button section -->

<div class="trying-button mx-3">
  <button onclick="display()" class="btn d-flex rounded-3 fs-5 py-2 px-4">
    <a class="text-decoration-none text-white fs-6" href="">
      <i class="fa-solid fa-rotate fs-6 mx-1"></i>
      Try Another Recipe
    </a>

  </button>

</div>

        </div>
      </div>
    </div>




` 


  }
