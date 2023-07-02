//ERYX HORTIZUELA
function PalinCheck()
{

    var Palin = document.getElementById("Palindrome").value;
    
    var palinYes;

        //1. split 2. reverse string 3. join string
        var splitPal = Palin.split("");
        //alert ("split " + splitStr);
        var revPal = splitPal.reverse();
        //alert ("reverse " + revStr);
        var joinPal = revPal.join("");
        //alert ("backwards string: " + joinStr);
    

    if (joinPal == Palin)
    {
        palinYes = " is ";
    } else{
        palinYes = " is not ";
    }
    document.getElementById("palinValid").innerHTML = "the word " + Palin + palinYes + " a palindrome";

}


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