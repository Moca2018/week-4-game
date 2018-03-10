window.onload = (function() {


//create variables

    var random_result;
    var lost = 0;
    var win = 0;
    var previous = 0;
    console.log(random_result, lost,win, previous);

    var resetAndStart = function () {
        $(".crystals").empty();
        
// add 4 crystal images.There will be four crystals displayed as buttons on the page.

    var crystals = [
        'http://adamchampagne.com/crystal-collector/assets/images/purple-crystal.png',
        'http://adamchampagne.com/crystal-collector/assets/images/pink-crystal.png',
        'http://adamchampagne.com/crystal-collector/assets/images/orange-crystal.png',
        'https://young-woodland-31972.herokuapp.com/assets/images/green_gem.png'];
    
    

//The random number shown at the start of the game should be between 19 - 120.
    random_result = Math.floor(Math.random()* 101) + 19;
    console.log(random_result);
    $("#result").html('Random Result: ' + random_result);
   


// Each crystal should have a random hidden value between 1 - 12.
   
    for (var i = 0; i < 4; i++){
        var random = Math.floor(Math.random() * 1) + 12;
        console.log(random);

        var crystal = $("<div>");
            crystal.attr({
                "class": 'crystal',
                "data-random": random
            });
        
        console.log(result); 
        crystal.css({
            "background-image":"url" + (images[i]) + "')",
            "background-size":"cover"
            });
                

        $(".crystals").append(crystal);

        $("#previous").html("final Score: " + previous);
    }
    
//clear and start over
    resetAndStart();
    
$(document).on('click',".crystal", function() {
    
                var num = parseInt($(this)).attr('data-random');
    
                previous += num;
    
                    $("#previous").html("final Score: " + previous);
    
                    console.log(previous);
    
            if(previous > random_result) {
    
                lost++;
    
                $("#lost").html("You lost: " + lost);
    
                previous = 0;
    

//clear and start over
    resetAndStart();
                }
            else if(previous === random_result){
                win++;
                $("#win").html("You win: " + win);
                previous = 0;


    resetAndStart();
                }
            })
}});