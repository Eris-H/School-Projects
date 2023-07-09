//ERYX HORTIZUELA 
var intervalid = 0;
//added seperate values for the x and y values, as well as a variable checking the direction of movement
var Xchange = 100;
var Ychange = 0;
var GoingDown = true;
var GoingRight = true;

function start()
{
    //grabs the buttons
    document.getElementById("starter").disabled = true;
    document.getElementById("stopper").disabled = false;
    
    //grabs the image
    var image = document.getElementById("diceGal");

    //where the magic happens
    intervalid = setInterval(function()
    {
        //checks it hasn't hit the right of the bounding box and that the variable is true
        if (Xchange < 1680 && GoingDown == true)
        {
            //if it hasn't yet, just move right
            image.style.left = Xchange + "px";
            Xchange += 5;
        }
        else
        {
            //if it has, switch the variable to false
            GoingDown = false;
        }
        //checks if the variable is false, also the image is not yet at the left edge
        if (Xchange > 5 && GoingDown == false)
        {
            //if so, just continue going left
            image.style.left = Xchange + "px";
            Xchange -= 5;
        }
        else
        {
            //if it has, switch the variable to true
            GoingDown = true;
        }

        //checks if variable is true and image hasn't hit the bottom of the box
        if (Ychange < 650 && GoingRight == true)
        {
            //if so, keep going down
            image.style.top = Ychange + "px";
            Ychange += 5;
        }
        else
        {
            //if it hit the bottom, switch the variable to false
            GoingRight = false;
        }
        //checks if variable is false and not hit the top of the box
        if (Ychange > 20 && GoingRight == false)
        {
            //if it hasn't keep going up
            image.style.top = Ychange + "px";
            Ychange -= 5;
        }
        else
        {
            //otherwise, switch the variable to true
            GoingRight = true;
        }

    }, 50);

}

function stop()
{
    //switch button enables
    document.getElementById("starter").disabled = false;
    document.getElementById("stopper").disabled = true;

    //clear the interval to stop it
    clearInterval(intervalid);

}