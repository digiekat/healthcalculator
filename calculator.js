// FUNCTIONS FOR FORMULAS

// BMI FUNCTION
function countBMI() 
{
        weightBmi = parseFloat(document.getElementById("weight").value);
        heightBmi = parseFloat(document.getElementById("height").value) / 100;
        document.getElementById("result").innerHTML = Math.round(weightBmi / (heightBmi * heightBmi));
}
// EVENT LISTENER ENTER KEY
document.getElementById("height")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("bmiButton").click();
    }
});

// THR FUNCTION
function countTHR() 
{
        maxHR = parseInt(document.getElementById("maxHR").value);
        restHR = parseInt(document.getElementById("restHR").value);
        intensity = parseFloat(document.getElementById("intensity").value);
        document.getElementById("resultTHR").innerHTML = Math.round((maxHR - restHR) * (intensity / 100) + restHR);
}

// EVENT LISTENER ENTER KEY
document.getElementById("intensity")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("thrButton").click();
    }
});

// BMR FUNCTION
function countBMR() 
{
        weightBmr = document.getElementById("weight1").value;   
        heightBmr = document.getElementById("height1").value;   
        ageBmr = document.getElementById("age").value;  
        femaleInput = document.getElementById("female");
        maleInput = document.getElementById("male");

        if (femaleInput.checked) {
                document.getElementById("resultBMR").innerHTML = Math.round(10 * weightBmr + 6.25 * heightBmr - 5 * ageBmr - 161);
        } else {
                document.getElementById("resultBMR").innerHTML = Math.round(10 * weightBmr + 6.25 * heightBmr - 5 * ageBmr + 5);
        }
}
 
// EVENT LISTENER ENTER KEY + AUTOFILL TO THE NEXT FORM

function processKeyup(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("bmrButton").click();
        var text = document.getElementById("resultBMR").textContent;
        document.getElementById("bmr").value = text;
    }
}

document.getElementById("female") 
.addEventListener("keyup", processKeyup);
document.getElementById("male") 
.addEventListener("keyup", processKeyup);


// MACROS FUNCTION
function countCalorieIntake() {

        var selector = document.getElementById('activity_selector');
        var selectedValue = selector[selector.selectedIndex].value;
        var bmrValue = document.getElementById("bmr").value; 

        document.getElementById("resultCalorieIntake").innerHTML = Math.floor(bmrValue * selectedValue);
}


function macrosSelect(event) {
    // var object = activity_selector.value; 
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("macrosButton").click();
    }
}


// GO TO TOP BUTTON

// When the user scrolls down 40px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        document.getElementById("upBtn").style.display = "block";
    } else {
        document.getElementById("upBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

