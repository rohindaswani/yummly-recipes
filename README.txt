---------- goal ----------

Add CSS and JS to the included HTML file to fulfill the mocks and specs. Other than the contents of the STYLE and SCRIPT tags, DO NOT MODIFY THE HTML AT ALL.

---------- specs ----------

Mock 1 is how the page should look on first load. All mocks provided are exact. Your results should look as close as possible, including color, size, spacing, etc.

Mock 2 shows that clicking a recipe card (any of the blue areas) should show the ingredients. This is a toggle, so if the ingredients are already showing, clicking the recipe card again should hide them.

Mock 3 shows that the ingredients should be able to scroll if necessary.

The buttons at the top should reorder the elements on the page without breaking any other functionality. "Randomize" should pick a random order each time, "Sort by Name" should order them alphabetically by recipe name, and "Sort by Calories" should use the calories element inside each card.

When specifically clicking a recipe name, instead of toggling the ingredients, open a new window to its recipe page on Yummly. The URL format is https://www.yummly.com/recipe/NAME-ID where NAME is the recipe name with spaces replaced by hyphens, and ID is the data-id attribute in the recipe markup.
  For example, clicking "Grilled Shrimp Tacos" should open a new window to https://www.yummly.com/Grilled-Shrimp-Tacos-1102925

Clicking an ingredient should open a new window to an ingredient search on Yummly. the URL format is https://www.yummly.com/recipes?allowedIngredient=NAME where NAME is only the ingredient itself, not the amount.
  For example, clicking "2 tbsp ghee" should go to https://www.yummly.com/recipes?allowedIngredient=ghee

---------- bonus ----------

These features are not required, but would be fantastic to include:

- Animate showing and hiding the list of ingredients. Design details are up to you.

- If a list is already sorted, clicking the same button should REVERSE the order.
  For example, clicking "Sort by Calories" should start with Paneer Masala Dosa and end with Baked Macaroni and Cheese. If the list is already in this order, then clicking "Sort by Calories" again would start with Baked Macaroni and Cheese and end with Paneer Masala Dosa.

---------- note ----------

Yummly's data changes over time, so as long as you build the URLs the correct way, don't be concerned if a recipe page or ingredient search page appear broken on the Yummly side. You're only responsible for your page, not ours!

Please let me know if anything is unclear, or if you get stuck on any step. Though some of these requirements may be difficult to accomplish with the given HTML, there's nothing that's actually intended to trick you.

Thanks,
HB