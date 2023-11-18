class SharePage extends Page {
    constructor(){
        super();
        $(document).ready(function(){
            const parsedUrl = new URL(window.location);
            console.log("Parsed URL")
            console.log(parsedUrl)
            // searchParams.get() will properly handle decoding the values.
            let url = parsedUrl.searchParams.get('description')
            $('#text').html(url)
            

            $.ajax({
                url: "https://inspiration.stei.ml:8080/upload?url=" + encodeURIComponent(url) + "&user_id=1234&time="+window.performance.now(),
                success: function(data){
                    let recipe = new Recipe();
                    recipe.load_recipe("#recipe-alternate",data)
                    recipe.load_recipe("#recipe-primary",data)
                    $('#recipe-detail').show(1000)
                    $('#share-dialog').hide(1000)
                },
                timeout: 30000 //in milliseconds
             });

             $('#recipe-detail').load('components/recipe.html', function(){
                let recipe = new Recipe();
            });
        })
    }
}