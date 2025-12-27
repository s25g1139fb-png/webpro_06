"use strict";

const form = document.getElementById("form");
const food = document.getElementById("food");
const price = document.getElementById("price");
const store = document.getElementById("store");
const content = document.getElementById("content");

form.onsubmit = e => {
    e.preventDefault();

    fetch("/api/food/items", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            food: food.value,
            price: price.value,
            store: store.value,
            content: content.value
        })
    }).then(() => {
        location.href = "food.html";
    });
};