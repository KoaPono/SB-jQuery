// 1.
$(document).ready(() => {
	console.log("Let’s get ready to party with jQuery!");
});

// 2.
$("article img").addClass("image-center");

// 3.
$("article p:last-child").remove();

// 4.
$("#title").css("font-size", Math.random() * 100);

// 5.
$("ol").append($("<li>", { text: "It can say whatever you want." }));

// 6.
$("aside")
	.empty()
	.append($("<p>", { text: "Lists are silly, I appologize" }));

// 7.
$(".form-control").on("keyup blur change", () => {
	let red = $(".form-control").eq(0).val();
	let blue = $(".form-control").eq(1).val();
	let green = $(".form-control").eq(2).val();
	$("body").css(
		"background-color",
		"rgb(" + red + "," + green + "," + blue + ")"
	);
});

// 8.
$("img").on("click", (evt) => {
	$(evt.target).remove();
});
