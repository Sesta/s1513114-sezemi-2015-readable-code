/*index.htmlを開いてください*/

function showRecipes( recipe_id ){
  alert( makeOutputStr() ); //アラートで表示

  function makeOutputStr(){
    var outputStr = ""

    recipes.forEach( function( recipe, index ){
      outputStr += index + ": " + recipe + "\n";
    } );

    if( typeof( recipe_id ) != "undefined" )
      return recipe_id + ": " + recipes[ recipe_id ];

    return outputStr;
  }
}
