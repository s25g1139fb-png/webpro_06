"use strict";

const list = document.getElementById("list");

fetch("/api/food/items")
    .then(res => res.json())
    .then(items => {
        items.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item.food;
            li.onclick = () => {
                location.href = `detail_food.html?id=${item.id}`;
            };
            list.appendChild(li);
        });
    })
