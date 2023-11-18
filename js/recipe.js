class Recipe {
    constructor(){
        this.current_recipe = 0;
        $('#alternate_toggle').click(this.set_alternate);
        $('#primary_toggle').click(this.set_primary);
    }

    set_primary(){
        this.current_recipe = 0;
        $('#recipe-primary').show();
        $('#recipe-alternate').hide();
        $('#alternate_toggle_tab').removeClass('is-active');
        $('#primary_toggle_tab').addClass('is-active');
    }

    set_alternate() {
        this.current_recipe = 1; 
        $('#recipe-primary').hide();
        $('#recipe-alternate').show();
        $('#primary_toggle_tab').removeClass('is-active');
        $('#alternate_toggle_tab').addClass('is-active');
    }

    load_recipe(prefix, recipe_id) {
        $.getJSON("https://inspiration.stei.ml:8080/getRecipe?recipe_id=" + recipe_id, function( data ) {
            console.log(data)
            $(prefix + " #recipe_title").html(data['name']);
            $(prefix + " #recipe_image").html(`<img src="./recipe_images/` +pad(recipe_id, 5) + `.png" />`);
            $(prefix + " #recipe_time").html(data['minutes'] + " min");
            let ingredients = data['ingredients'];
            ingredients = ingredients.replace(/'/g, '"');
            ingredients = JSON.parse(ingredients);
            let ingredient_html = ""
            for (let i in ingredients) {
                ingredient_html += `<tr class="is-selected">
                <td>` + ingredients[i] + `</td>
                <td><i class="fa-solid fa-triangle-exclamation"></i></td>
            </tr>`
            }
            $(prefix + " #recipe_ingredients").html(ingredient_html);

            let instructions = data['steps'];
            instructions = instructions.replace(/'/g, '"');
            instructions = JSON.parse(instructions);
            let step_html = `<p class="title is-5">Directions</p>`
            for (let i in instructions) {
                step_html += `<article class="media">
                <figure class="media-left">
                    <p class="title is-5">` + i + `</p>
                </figure>
                <div class="media-content">
                    <p>` + instructions[i] + `</p>
                    <span class="tag">
                        <p><i class="fa-solid fa-circle-play"></i> Watch video</p>
                    </span>
                </div>
            </article>`
            }
            $(prefix + " #recipe_steps").html(step_html);
            console.log(step_html)
          });
        
    }
}

function pad(num, size) {
    var s = "000000000" + num;
    return s.substr(s.length-size);
}