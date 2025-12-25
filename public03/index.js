"use strict";

const list = document.getElementById("list");

fetch("/api/items")
  .then(res => res.json())
  .then(items => {
    items.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item.anniversary;
      li.onclick = () => {
        location.href = `detail.html?id=${item.id}`;
      };
      list.appendChild(li);
    });
  });