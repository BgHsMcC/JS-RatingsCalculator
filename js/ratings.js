function collect_ratings(){

    const ratings = {

    count : 0,
    sum: 0,
    average: 0
    }

    let rating = 0;

    const elements = document.querySelectorAll(".rating");

    elements.forEach(function(element){

        
        rating = parseInt(element.id.replace('star',""));
        ratings.count += parseInt(element.value);
        ratings.sum += rating * parseInt(element.value);

        });

        if(ratings.count !== 0){
            ratings.average = (ratings.sum / ratings.count).toFixed();
        }
        console.log("First project!!!!");

        return ratings;

    }

    document.addEventListener('change', function(){
        const ratings = collect_ratings();
        const final_val = document.querySelector("#average");
        final_val.value = ratings.average;
        console.log (final_val.value); 
       
    
    });
