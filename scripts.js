// This stores the product list for the page.
var products = [
  // This is the first product object.
  { name: "Classic White Gi", price: "$79", category: "Gi", image: "images/White-gi.png" },
  // This is the second product object.
  { name: "Blue Training Gi", price: "$85", category: "Gi", image: "images/blue-training-gi.png" },
  // This is the third product object.
  { name: "Black No-Gi Rash Guard", price: "$42", category: "No-Gi", image: "images/black-nogi-rashguard.png" },
  // This is the fourth product object.
  { name: "Red Grappling Shorts", price: "$38", category: "No-Gi", image: "images/red-grappling-shorts.png" },
  // This is the fifth product object.
  { name: "Bolo Sport Belt", price: "$18", category: "Accessories", image: "images/bolo-sport-belt.png" },
  // This is the sixth product object.
  { name: "Gym Backpack", price: "$44", category: "Accessories", image: "images/gym-backpack.png" },
  // This is the seventh product object.
  { name: "Competition Gi", price: "$99", category: "Gi", image: "images/competition-gi.png" },
  // This is the eighth product object.
  { name: "No-Gi Leggings", price: "$35", category: "No-Gi", image: "images/nogi-leggings.png" },
  // This is the ninth product object.
  { name: "Water Bottle", price: "$12", category: "Accessories", image: "images/water-bottle.png" }
];
// This keeps track of which category is being shown.
var currentCategory = "All";
// This shows the cards when the page finishes loading.
document.addEventListener("DOMContentLoaded", showCards);
// This function shows product cards on the page.
function showCards() {
  // This gets the place where cards go.
  var cardContainer = document.getElementById("card-container");
  // This clears out the old cards first.
  cardContainer.innerHTML = "";
  // This finds the hidden sample card.
  var templateCard = document.querySelector(".card");
  // This starts a loop for every product.
  for (var i = 0; i < products.length; i++) {
    // This gets one product from the array.
    var product = products[i];
    // This checks if all products should be shown.
    if (currentCategory === "All") {
      // This makes a copy of the sample card.
      var nextCard = templateCard.cloneNode(true);
      // This fills the copied card with product info.
      editCardContent(nextCard, product);
      // This adds the new card to the page.
      cardContainer.appendChild(nextCard);
    // This checks if the product matches the chosen category.
    } else if (product.category === currentCategory) {
      // This makes a copy of the sample card.
      var nextCard = templateCard.cloneNode(true);
      // This fills the copied card with product info.
      editCardContent(nextCard, product);
      // This adds the new card to the page.
      cardContainer.appendChild(nextCard);
    }
  }
}
// This function changes the copied card content.
function editCardContent(card, product) {
  // This makes the copied card visible.
  card.style.display = "block";
  // This finds the title area inside the card.
  var cardHeader = card.querySelector("h2");
  // This puts the product name in the title.
  cardHeader.textContent = product.name;
  // This finds the image inside the card.
  var cardImage = card.querySelector("img");
  // This sets the image source.
  cardImage.src = product.image;
  // This finds all list items in the card.
  var cardListItems = card.querySelectorAll("li");
  // This puts the price in the first list item.
  cardListItems[0].textContent = "Price: " + product.price;
  // This puts the category in the second list item.
  cardListItems[1].textContent = "Category: " + product.category;
}
// This function changes the chosen category.
function filterProducts(categoryName) {
  // This saves the new category choice.
  currentCategory = categoryName;
  // This shows the cards again with the new filter.
  showCards();
}
// This function shows a simple message.
function quoteAlert() {
  // This shows an alert box on the page.
  alert("Bolo Sport has simple gear for gi, no-gi, and training accessories.");
}
// This function removes the last product.
function removeLastCard() {
  // This removes the last product from the array.
  products.pop();
  // This shows the cards again after removing one.
  showCards();
}
