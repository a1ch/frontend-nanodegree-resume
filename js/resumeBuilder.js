//$("#main").append("a1ch");
var awesomeThoughts = "I am a1ch and i am awesome";
var age = 34;
console.log(awesomeThoughts);
var funThoughts = awesomeThoughts.replace("awesome", "fun");
console.log(funThoughts);
//$("#main").append(funThoughts);
var name = "a1ch";
var role = "Whisky Drinker"
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
	"name" : "a1ch",
	"role" : "Whisky Drinker",
	"contact" : "shawn@ingotsolutions.com",
	"pURL" : "https://jumpingpolarbear.files.wordpress.com/2012/11/picture-perfect.jpg",
	"welcome" : "howdy",
	"age" : 34,
	"skills" : ["numchucks", "whisky"]
};

$("#main").prepend(bio.contact);

//HTMLHeaderRole.replace("%data%", formattedRole);
//$("#")