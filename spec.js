/*index.htmlを開いてください*/

showRecipes();


function showRecipes(){
  alert( makeOutputStr() ); //アラートで表示

  function makeOutputStr(){
    var outputStr = ""

    recipes.forEach( function( recipe, index ){
      outputStr += index + ": " + recipe + "\n";
    } );

    return outputStr;
  }
}
