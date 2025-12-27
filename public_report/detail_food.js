"use strict";

const params = new URLSearchParams(location.search);
const id = params.get("id");
const detail = document.getElementById("detail");
const editBtn = document.getElementById("edit_food");
const deleteBtn = document.getElementById("delete");

fetch(`/api/food/items/${id}`)
    .then(res => res.json())
    .then(item => {
        detail.innerHTML = `
      <p>フード名：${item.food}</p>    
      <p>値段：${item.price}</p>
      <p>販売店舗：${item.store}</p>
      <p>フードの概要：${item.content}</p>
    `;
    });

document.getElementById("edit_food").onclick = () => {
    location.href = `edit_food.html?id=${id}`;
};


console.log("delete button:", deleteBtn);

document.getElementById("deleteBtn").onclick = () => {
    location.href = `delete_food.html?id=${id}`;
};