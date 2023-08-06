/* 
- When the form is submitted, capture the values for each of the inputs and append them to the DOM along with a button to remove each title and rating from the DOM.
- When the button to remove is clicked, remove each title and rating from the DOM.
*/

$("form").on("submit", (evt) => {
	evt.preventDefault();
   const title = $("#title").val();
   const rating = $("#rating").val();

   const list = $("<p>").text(`${title}: ${rating} `);

   $("#ratings-container").append(list.append($("<button>").text("delete").on("click", (evt) => {
      evt.target.parentElement.remove()
   })));

});
