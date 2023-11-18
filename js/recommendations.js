class RecommendationPage extends Page {
    
    constructor(){
        super();

        $('#recipe-grid').load('components/recipe-grid.html', function(){
            let grid = new RecipeGrid();

        });
        $('#recipe-detail').load('components/recipe.html', function(){
            $('#recipe-detail .delete').click(function() {
                $("#recipe-detail").hide(1000);
                $('#recipe-grid').show(1000);
            });
            let recipe = new Recipe();
        });
    }
}