let drinks = '';
let strDrinks = '';

var button = $('.button');
var inputValue = $('.inputValue');
var targetCalories = $(`.inputValue`);

// function myFunction() {
//     var x = document.getElementById("hide");
//     if (x.style.display == "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }

$(document).on("click", "#submitButton", function () {
    var height = $('#height').val();
    var age = $('.age').val();
    var gender = $('.gender').val();
    var weigth = $('.weight').val();
    getData(height, age, gender, weigth);
    $('#height').empty();
    $("input").empty();
    $('.gender').empty();
    $('.weight').empty();
});

// $(document).on("click", "#calorieBtn", function () {
//     getRecipe();
// });

// created variables for user to enter data to calculate daily calorie requirements

var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var height = document.querySelector('.height');
var age = document.querySelector('.age');
var gender = document.querySelector('.gender');
var weigth = document.querySelector('.weight');

// use may select drink choices
var drinkChoices = ["beer 12 oz", "red wine 5oz", "Spirits 1.5oz"];
var drinkCaloriesPerServing = ["132", "123", "100"];

for (i=0; i<drinkChoices.length; i++){
    $("#drinkSection").append(`<option value=${drinkCaloriesPerServing[i]}>${drinkChoices[i]} -- ${drinkCaloriesPerServing[i]} cal</option>`)
}

for(i=1; i<=20; i++) {
    $("#totalAlcoholCalories").append(`<option value=${i}>${i}</option>`)
}

// user enters number of drinks consumed per week according to choices
//var drinksPerWeek = prompt("how many drinks to you consume in a week")

// number of drinks entered is multiplied by the appropiate calorie value

var exerciseChoices = ["running", "swimmimg", "walking", "HIIT" ,"yoga" ,"strength training", "zumba"];

var exerciseCaloriesPerHalfHour = ["372", "300", "180", "374", "120", "90", "210"];

for (let i = 0; i < exerciseChoices.length; i++) {
    $("#exerciseSelections").append(`<option value=${exerciseCaloriesPerHalfHour[i]}> ${exerciseChoices[i]} -- ${exerciseCaloriesPerHalfHour[i]} Cal</option>`)
    }

function getData(height, age, gender, weight) {
    $.ajax({
        url: "https://fitness-calculator.p.rapidapi.com/dailycalory?heigth=" + height + "&age=" + age + "&gender=" + gender + "&weigth=" + weight,
        type: "GET",
        headers: {
            "x-rapidapi-host": "fitness-calculator.p.rapidapi.com",
            "x-rapidapi-key": "72625e52a9msha06ed784ebb8fe6p1c3b8ejsnd07a4dfa968e"
        }
    })
        .then(function (apiResponse) {
            console.log(apiResponse)
            $(".bmrResults").html(`
            <h4>Calories to maintain weight: ${apiResponse.data.BMR}</h4>`)
            $(".Goals").html(`<h4>Calories to lose weight: ${apiResponse.data.goals.BMR["Weight loss"].calory}</h4>`)
            localStorage.setItem("bmiResults", JSON.stringify(apiResponse))
        });


var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate?targetCalories=2000&timeFrame=day",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
		"x-rapidapi-key": "72625e52a9msha06ed784ebb8fe6p1c3b8ejsnd07a4dfa968e",
	}
};
$.ajax(settings).done(function (response) {
	console.log(response);
		$("targetCalories").append(`<div class=card>
		<p>Meal Name: ${response.meals.title}</p>
		<p>Calories: ${response.nutrients.calories}</p>
		`)
	});

	$(".targetCalories").on("click", function(response) {
		event.preventDefault()
		let weeklyCalories = $(".targetCalories").val()
		console.log(weeklyCalories)
	})};
// End of the Healthy Recipes API code (lines 48-70)

$(document).on("click", "#bevBtn", function(){
    var drinkUp = $('.drinkUp').val();
    

    console.log(drinkUp);


  

    $('#drinks').empty();
});
    
// Brad adding JQ for Healthy Recipes API: (lines 48-70)
$("#calorieBtn").on("click", function(event) {

    event.preventDefault()
    
    var userCalories = $("#userCalorieField").val()
    console.log("Calorie",userCalories)
    $.ajax({
        url: `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate?targetCalories=${userCalories}&timeFrame=day`,
        type: "GET",
        headers: {
            "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
            "x-rapidapi-key": "72625e52a9msha06ed784ebb8fe6p1c3b8ejsnd07a4dfa968e",
        }
    })
        .then(function (apiResponse) {
            console.log(apiResponse)
            var htmlText = ""
            for (i=0; i<apiResponse.meals.length; i++) {
            htmlText+=`
            <div class="recipeResponse"><h6>${apiResponse.meals[i].title}</h6>
            <a href="${apiResponse.meals[i].sourceURL}" target="_blank">Check Out This Recipe</a></div>`

            }
            $(".targetCalories").html(htmlText)
        })
});

   

    $('#drinks').empty();

// Brad adding JQ for Healthy Recipes API: (lines 48-70)
$("#calorieBtn").on("click", function(event) {

    event.preventDefault()
    var userCalories = $("#userCalorieField").val()
    console.log("Calorie",userCalories)
    $.ajax({
        url: `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate?targetCalories=${userCalories}&timeFrame=day`,
        type: "GET",
        headers: {
            "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
            "x-rapidapi-key": "72625e52a9msha06ed784ebb8fe6p1c3b8ejsnd07a4dfa968e",
        }
    })
        .then(function (apiResponse) {
            console.log(apiResponse)
            var htmlText = ""
            for (i=0; i<apiResponse.meals.length; i++) {
            htmlText+=`
            <div class="recipeResponse"><h6>${apiResponse.meals[i].title}</h6>
            <a href="${apiResponse.meals[i].sourceURL}" target="_blank">Check Out This Recipe</a></div>`

            }
            $(".targetCalories").html(htmlText)
        })
});


//drink button and alcohol calorie calc
$("#drinkSubmitButton").on("click", function(event){
    event.preventDefault();
    var drinkType = $("#drinkSection").val();
    var drinkAmt = $("#totalAlcoholCalories").val();
    var alcTotal = drinkType * drinkAmt
    function calorieTotal(drinkType, drinkAmt){
        return drinkType * drinkAmt
        
    }
    
    console.log(calorieTotal(drinkType, drinkAmt));
    $(".alcoholTotal").html(`
    <h4>Total Alcohol Calories: ${alcTotal} </h4>`)
    localStorage.setItem(".alcoholTotal", JSON.stringify(calorieTotal))
});


const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#modal-btn');
const closeBtn = document.querySelector('.close');


// Events
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);


// Open
function openModal() {
  modal.style.display = 'block';
}

// Close
function closeModal() {
  modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}


// ===================================================


$(".bev").on("click", function (event) {
    event.preventDefault();
    console.log("it worked");
    getRandomCocktail();
    document.querySelector(".center");
    // html = event.tabItem.attr("label");
  });
  
  function getRandomCocktail() {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then(function (response) {
        if (response.status !== 200) {
          console.log(
            "Looks like there was a problem. Status Code: " + response.status
          );
          return;
        }
  
        // Examine the text in the response
        response.json().then(function (data) {
          console.log(data);
          displayRandomCocktail(data);
        });
      })
      .catch(function (err) {
        console.log("Fetch Error :-S", err);
      });
  }
  // getRandomCocktail();
  
  function displayRandomCocktail(cocktail) {
    console.log(cocktail.drinks[0]);
  
    let drinkSection = document.querySelector("#drink-section");
    drinkSection.innerHTML = "";
  
    let drinkName = document.createElement("h2");
    drinkName.innerHTML = cocktail.drinks[0].strDrink;
    drinkSection.appendChild(drinkName);
    let img = document.createElement("img");
    img.src = cocktail.drinks[0].strDrinkThumb;
    drinkSection.appendChild(img);
  }

// $.ajax(settings).done(function (response)) {
//   console.log(response);
// }

