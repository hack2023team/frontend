class MealPlan {
    constructor() {
        $.ajax({
            url: "https://inspiration.stei.ml:8080/getMealPlan?user_id=1212&time="+window.performance.now(),
            success: function(data){
                let tuples = data.split("|")
                let mealplan_html = "";
                for (let x in tuples) {
                    let k = tuples[x].substring(1,tuples[x].length-1);
                    console.log(x);
                    console.log(k);
                    k = k.split(", ");

                    
                    mealplan_html += `<section class="hero">
                    <div class="hero-body">
                        <article class="media">
                            <figure class="media-left">
                                <p class="title is-5">`+k[0].replace("'", "").replace("'", "")+`</p>
                            </figure>
                            <div class="media-content">
                                <article class="media">
                                    <figure class="media-left">
                                        <p class="image is-64x64">
                                            <img src="./recipe_images/` +pad(k[1], 5) + `.png">
                                          </p>
                                    </figure>
                                    <div class="media-content">
                                        <p>` + k[2].replace("'", "").replace("'", "") + `</p>
                                        <span class="tag">
                                            <p><i class="fa-solid fa-circle-play"></i> Watch video</p>
                                        </span>
                                    </div>
                                </article>
                            </div>
                        </article>
                    </div>
                </section>`
                
                }
                console.log(mealplan_html)
                $('#meal-plan').html(mealplan_html);
            },
            timeout: 30000 //in milliseconds
         });

    }
}

function pad(num, size) {
    var s = "000000000" + num;
    return s.substr(s.length-size);
}