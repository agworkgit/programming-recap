/* JS distinguishes not just global and local bindings. Blocks and functions can be created inside other blocks and functions, producing multiple degrees of locality */

const hummus = function (factor) {
  const ingredient = function (amount, unit, name) {
    let ingredientAmount = amount * factor;
    if (ingredientAmount > 1) {
      unit += "s";
    }
    console.log(`${ingredientAmount} ${unit} ${name}`);
  };
  // amount, unit, name
  ingredient(1, "can", "chickpeas");
  ingredient(0.25, "cup", "tahini");
  ingredient(0.25, "cup", "lemon juice");
  ingredient(1, "clove", "garlic");
  ingredient(2, "tablespoon", "olive oil");
  ingredient(0.5, "teaspoon", "cumin");
};

// hummus(2);

/* The code inside the 'ingredient' func can see the 'factor' binding of the outer function, but it's local bindings are not visible to the outer func */

/* Each local scope can also see all the local scopes that contain it, and all scopes can see the global scope. This approach to binding visibility is called 'lexical scoping' */
