"use strict";

const params = new URLSearchParams(location.search);
const id = params.get("id");
const form = document.getElementById("form");


const price = document.getElementById("price");
const store = document.getElementById("store");
const content = document.getElementById("content");

fetch(`/api/food/items/${id}`)
    .then(res => res.json())
    .then(item => {
        price.value = item.price;
        store.value = item.store;
        content.value = item.content;
    });


form.onsubmit = e => {
    e.preventDefault();

    fetch(`/api/food/items/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            price: price.value,
            store: store.value,
            content: content.value
        })
    }).then(() => {
        location.href = `detail_food.html?id=${id}`;
    });
};