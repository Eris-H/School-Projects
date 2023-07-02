//ERYX HORTIZUELA

function PalinCheck()
{

    //grabs the input
    var Palin = document.getElementById("Palindrome").value;
    
    //prepares the variable for the check
    var palinYes;

    //makes it lowercase so that capitalization cannot effect whether or not its a palindrome
    Palin = Palin.toLowerCase();

    //splits, reverses, then rejoins the palendrome to invert it
    var splitPal = Palin.split("");
    var revPal = splitPal.reverse();
    var joinPal = revPal.join("");
    
    //if input is palendrome, sets to is so that is can be inserted into the update
    if (joinPal == Palin)
    {
        palinYes = " is ";
    } else{
        palinYes = " is not ";
    }

    //updates the page to tell the user if the palindrome they entered is in fact a palindrome
    document.getElementById("palinValid").innerHTML = "the word " + Palin + palinYes + " a palindrome";

}

//creates variable to use for name and zipcheck, cont no means zipcheck can't run
var cont = "no";

function NameCheck()
{

    //finds the names inputed
    var fNam = document.getElementById("FirstName").value;
    var lNam = document.getElementById("LastName").value;

    //creates the combination of names
    var FullName = fNam + " " + lNam;
    var ValidYes;

    //checks the total name length
    if (FullName.length > 20)
    {
        cont = "yes";
        ValidYes = "VALID";
    }
    else 
    {
        ValidYes = "NOT VALID";
    }

    //shows whether or not the name inputed is valid
    document.getElementById("nameValid").innerHTML = "Name Entered " + FullName + " is " + ValidYes;

}

function ZipCheck()
{

    //grabs the zip number
    var Zips = document.getElementById("Zips").value;

    //shows the secret message if the name was valid and zip was 5 digits
    if (cont == "yes" && Zips.length == 5)
    {
        //i found out that mark works even if put inside the javascript file
        document.getElementById("revealText").innerHTML = "<mark> YOU HAVE BEEN GRANTED ACCESS TO THE EMPIRES RAILWAY SYSTEM, PROCEED WITH CAUTION </mark>";
        document.getElementById("secretText").innerHTML = " ";
    }
    else
    {

    }

}