function IngredientList(options) {
  var ingredients = options.ingredients;

  function onSearchKeypress() {
    var value = $("ingredient_search").value;
    var shown = [];
    if(value.length > 0) {
      var search = new RegExp(value.toLowerCase());
      var i = ingredients.length;
      while(i > 0) {
        i--;
        $(ingredients[i].ingredient.slug + "_thumbs").hide();
        if(search.exec(ingredients[i].ingredient.name.toLowerCase()) !== null) {
          $(ingredients[i].ingredient.slug).show();
          shown.push(ingredients[i]);
        } else {
          $(ingredients[i].ingredient.slug).hide();
        }
      }
    } else {
      ingredients.each(function(i) {
        $(i.ingredient.slug).show();
      });
    }
    if(shown.length <= 5) {
      $A(shown).each(function(o) {
        $(o.ingredient.slug + "_thumbs").show();
      });
    } 
  }

  this.init = function() {
    $("ingredient_search").observe("keyup", onSearchKeypress);
    return this;
  }
}