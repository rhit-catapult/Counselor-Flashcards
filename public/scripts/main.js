var rhit = rhit || {};

rhit.main = function () {
	console.log("Ready!!!!");

	names = ["Aaron", "Anahita", "Anthony", "Brayden", "Claire", "Eathan", "Eli", "Elley", "Emmet", "Eric", "Fox", "Kali", "Michael", "Reid", "Ruby", "Tyler"];

	document.querySelector("#roll").onclick = () => {
		console.log("You clicked the button");
		// document.querySelector("#main-image").src = "images/aaron.png"
		let name = names[Math.floor(Math.random() * names.length)];
		document.querySelector("#main-image").src = `images/${name.toLowerCase()}.png`
		document.querySelector("#name-goes-here").innerHTML = "";
		setTimeout(() => {
			document.querySelector("#name-goes-here").innerHTML = name;
		}, 1500);

	};
};

rhit.main();
