class RecipeGrid {
    constructor() {
        $.ajax({
            url: "https://inspiration.stei.ml:8080/getRecommendations?user_id=1212&time="+window.performance.now(),
            success: function(data){
                let tuples = data.split("|")
                let grid_html = "";
                for (let x in tuples) {
                    let k = tuples[x].substring(1,tuples[x].length-1);
                    console.log(x);
                    console.log(k);
                    k = k.split(", ");

                    
                    grid_html += `<img src="./recipe_images/` +pad(k[0], 5) + `.png" 
                        name="` +  k[0] + `,`+  k[1] +`">`
                }
                $(".grid").html(grid_html)
                $('.grid img').click(function(context) {
                    console.log(context)
                    let recipe = new Recipe();
                    let recipe_ids = context['target']['name'].split(',')
                    recipe.load_recipe("#recipe-primary", recipe_ids[0])
                    recipe.load_recipe("#recipe-alternate", recipe_ids[1])
                    $("#recipe-detail").show(1000);
                    $('#recipe-grid').hide(1000);
                });
            },
            timeout: 30000 //in milliseconds
         });

        
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function pad(num, size) {
    var s = "000000000" + num;
    return s.substr(s.length-size);
}