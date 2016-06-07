

(function(){
	"use strict"
	console.log("App started");

	
	function writeToFirstPara(){
		console.log("Executing");

		var firstPara = document.getElementById("firstPara");
		firstPara.textContent = "It's Alive";
		firstPara.addEventListner("click",  firstParaClicked);
	}
	writeToFirstPara();

	function firstParaClicked(e){
		console.log(e.target.id)
	}
	
})();
