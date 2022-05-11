function collect_ratings(){

    const ratings = new Object();
    ratings.count = 0;
    ratings.sum = 0;
    ratings. average = 0;

    let rating = 0;

    const elements = document.querySelectorAll(".rating");

    elements.forEach(function(element){

        element.replace('star',"");
        rating = parseInt(element);
        ratings.count += parseInt(element.value);
        ratings.sum += parseInt(element.value);

        });

        if(ratings.count !== 0){
            ratings.average = ratings.sum / ratings.count;
        }

        return ratings;

    }

    rating.addEventListener('change', function(){
        const ratings = collect_ratings();
        const final = document.querySelector('average');
        final.value = ratings.average.toFixed();

    });
