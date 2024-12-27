let addButtonEl = document.getElementById("addButton")
let resetButtonEl = document.getElementById("resetButton")
let counterDisplayEl = document.getElementById("counterDisplay")

let counter = 0;
counterDisplayEl.textContent = counter;

addButtonEl.addEventListener("click", function() {
    counter += 1;
    counterDisplayEl.textContent = counter;
});

resetButtonEl.addEventListener("click", function() {
    counter = 0;
    counterDisplayEl.textContent = counter;
})

