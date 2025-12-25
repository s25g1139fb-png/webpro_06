"use strict";

const params = new URLSearchParams(location.search);
const id = params.get("id");

document.getElementById("yes").onclick = () => {
    fetch(`/api/items/${id}/delete`, { method: "POST" })
        .then(() => {
            location.href = "index.html";
        });
};

document.getElementById("no").onclick = () => {
    history.back();
};