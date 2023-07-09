// ERYX HORTIZUELA
//ALL SOUNDS ARE RECORDED/PRODUCED BY ME

var SkinType = "none";

//health
var slimeHealth = 100;
var playHealth = 100;

//sound effects
var FailAudio = new Audio("fail.wav");
var SmashAudio = new Audio("smash.wav");
var SliceAudio = new Audio("slice.wav");
var PierceAudio = new Audio("pierce.wav");
var CritAudio = new Audio("crit.wav");
var playAudio = new Audio("playhit.wav");
var whiffAudio = new Audio("whiff.wav");
var WinAudio = new Audio("win.wav");
var LoseAudio = new Audio("lose.wav");

var backgroundAudio = new Audio("background.wav");

//started?
var initTrue = false;

//if 0 the player shouldn't be able to fight back yet, this is to prevent spamming and skipping slime turns
var turnWho = 0;

//player image
var PLimg = document.getElementById("PlayerImg");
//slime image
var Simg = document.getElementById("SlimeImg");

var PLchange = 100;





function initiate()
{
    //should only work once, starts the fight. 
    if (initTrue == false)
    {
        SkinChange();
        initTrue = true;
        //allows player to fight
        turnWho = 1;

        backgroundAudio.play();
    }

}


//wins or loses the game
function WinCheck()
{
    if (slimeHealth <= 0)
    {
        document.getElementById("narrate").innerHTML = "You have defeated the slime!";
        WinAudio.play();
        delete turnWho;
        alert("YOU WIN!");
    }
    if (playHealth <= 0)
    {
        document.getElementById("narrate").innerHTML = "The slime has defeated you!";
        LoseAudio.play();
        delete turnwho;
        alert("YOU LOSE!");
    }
}

function SkinChange()
{
    //randomizes armor
    var num1 = Math.ceil(Math.random() * 3);
    if (num1 == 1)
    {
        SkinType = "plate";
    }
    else if (num1 == 2)
    {
        SkinType = "Chain";
    }
    else
    {
        SkinType = "pad";
    }
    //updates the skin shower
    document.getElementById("SlimeSkin").innerHTML = "Slime skin: " + SkinType;
}



function SlimeTurn()
{
    //waits 1 second before slimeturn occurs
    setTimeout(function(){
        WinCheck();
        if (turnWho == 0)
        {
        //player gets hit, can be critted
        var slimedamage = Math.ceil(Math.random() * 5);
        //crits
        if (slimedamage == 1)
        {
            playHealth = playHealth - 20;
            CritAudio.play();
            playAudio.play();
            document.getElementById("narrate").innerHTML = "The slime slams into your face!";
        }
        //whiffs
        else if (slimedamage == 5)
        {
            whiffAudio.play();
            document.getElementById("narrate").innerHTML = "The slime flies off to the side!";
        }
        //strong hit
        else if (slimedamage == 4 || slimedamage == 3)
        {
            playHealth = playHealth - 10;
            playAudio.play();
            document.getElementById("narrate").innerHTML = "The slime bounces into you!";
        }
        //weak hit
        else
        {
            playHealth = playHealth - 5;
            playAudio.play();
            document.getElementById("narrate").innerHTML = "The slime bounces into you!";
        }
        //update the health display then move to player turn
        document.getElementById("DisplayHealth").innerHTML = "slime health: " + slimeHealth + "% | player health: " + playHealth + "%";
        SkinChange();
        turnWho = 1;
        WinCheck();
    }
    }, 1000);

}


//checks armor, damages slime if correct, calls slime turn, then calls armor randomizer
function smash()
{
    if (turnWho == 1){
    if (SkinType == "plate")
    {
        //randomizes if crit
        var damagenum = Math.ceil(Math.random() * 5);
        if (damagenum == 1)
        {
            //add crit sound if crit
            CritAudio.play();
            SmashAudio.play();
            slimeHealth = slimeHealth - 20;
            //show different message if critted
            document.getElementById("narrate").innerHTML = "You completely crush the slime!";
        }
        else{
            SmashAudio.play();
            slimeHealth = slimeHealth - 10;
            //show different message if hit
            document.getElementById("narrate").innerHTML = "You smash the slime!";
        }

    
    }
    else
    {
        //different audio if wrong option
        document.getElementById("narrate").innerHTML = "The slime deflected your attack!";
        FailAudio.play();
    }
    //update damage display then move to slime turn
    document.getElementById("DisplayHealth").innerHTML = "slime health: " + slimeHealth + "% | player health: " + playHealth + "%";
    turnWho = 0;
    WinCheck();
    if (turnWho != 2)
    {
        SlimeTurn();
    }    
    }
}

function slice()
{
    if (turnWho == 1){
    if (SkinType == "pad")
    {
        //randomizes if crit
        var damagenum = Math.ceil(Math.random() * 5);
        if (damagenum == 1)
        {
            //add crit sound if crit
            CritAudio.play();
            SliceAudio.play();
            slimeHealth = slimeHealth - 20;
            //show different message if critted
            document.getElementById("narrate").innerHTML = "You diced the slime up!";
        }
        else{
            SliceAudio.play();
            slimeHealth = slimeHealth - 10;
            //show different message if hit
            document.getElementById("narrate").innerHTML = "You cut the slime!";
        }
    }
    else
    {
        //differen audio if wrong choice
        document.getElementById("narrate").innerHTML = "The slime absorbed your attack!";
        FailAudio.play();
    }
    //update health display then move to slime turn
    document.getElementById("DisplayHealth").innerHTML = "slime health: " + slimeHealth + "% | player health: " + playHealth + "%";
    turnWho = 0;
    WinCheck();
    if (turnWho != 2)
    {
        SlimeTurn();
    }    
    }
}

function stab()
{
    if (turnWho == 1){
    if (SkinType == "Chain")
    {
        //randomizes if crit
        var damagenum = Math.ceil(Math.random() * 5);
        if (damagenum == 1)
        {
            //add crit sound if crit
            CritAudio.play();
            PierceAudio.play();
            slimeHealth = slimeHealth - 20;
            //show different message if critted
            document.getElementById("narrate").innerHTML = "You impale through slime!";
        }
        else{
            PierceAudio.play();
            slimeHealth = slimeHealth - 10;
            //show different message if hit
            document.getElementById("narrate").innerHTML = "You stab the slime!";
        }
    }
    else
    {
        //different audio if whiff
        document.getElementById("narrate").innerHTML = "The slime blocked your attack!";
        FailAudio.play();
    }
    //update damage display then move to slime turn
    document.getElementById("DisplayHealth").innerHTML = "slime health: " + slimeHealth + "% | player health: " + playHealth + "%";
    turnWho = 0;
    WinCheck();
    if (turnWho != 2)
    {
        SlimeTurn();
    }
    }
}



//NEW PARTS
function NameCheck()
{

    var fNam = document.getElementById("FirstName").value;
    var lNam = document.getElementById("LastName").value;

    var FullName = fNam + " " + lNam;

    if (FullName > 20)
    {

    }
    var ValidYes = "NOT VALID";

    document.getElementById("nameValid").innerHTML = "Name Entered = " + FullName + "is " + ValidYes;

}