
/*let weight, length, bmi, health;

alert("BMI Calculator");
length = prompt("What's your length in m?");
weight = prompt("What's your weight in kg?");

bmi = weight/(length*length);
bmi = Math.round(bmi,2);


if(bmi < 20){
	health = "You are underweight."
}
else if(bmi < 25){
	gezondheid = "You have a normal weight."
}
else if(bmi < 30){
	gezondheid = "You are overweight.";
}
else{
	gezondheid = "You are obese.";
}

alert("You have a bmi of " + bmi + ". " + health); */

// var document.getElementByClass(days);
$(document).ready(()=>{

  $(".days button").css({"opacity":"0"});
  
  $(".days div").mouseenter(function(){
      $(this).css({"opacity":"0.5"});
      str = "#"+this.id+" button";
      $(str).css({"opacity":"1"});
      console.log(str)
  })

  $(".days div").mouseleave(function(){
      $(this).css({"opacity":"1"});
      str = "#"+this.id+" button";
      $(str).css({"opacity":"0"});
  })

});




$(document).ready(()=>{

  $(".days button").css({"opacity":"0"});

  
  $(".days div").mouseenter(function(){
      $(this).css({"opacity":"0.5"});
      str = "#"+this.id+" button";
      $(str).css({"opacity":"1"});
      console.log(str)
  })

  $(".days div").mouseleave(function(){
      $(this).css({"opacity":"1"});
      str = "#"+this.id+" button";
      $(str).css({"opacity":"0"});
  })

});


$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideToggle("slow");
  });
});

