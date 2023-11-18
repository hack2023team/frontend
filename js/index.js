class IndexPage extends Page {
    constructor(){
        super();
        $('#meal-plan').load('components/meal-plan.html', function(){
            
        });
    }
}