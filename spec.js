/*index.htmlを開いてください*/

var ouputStr = ""

recipes.forEach( function( recipe ){
  ouputStr += recipe + "\n";
} );

alert( ouputStr );//アラートで表示
