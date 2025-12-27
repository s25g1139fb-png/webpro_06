"use strict";


const params = new URLSearchParams(location.search);
const id = params.get("id");


document.getElementById("yes").onclick = () => {
    fetch(`/api/tdl/items/${id}/delete`, { method: "POST" })
        .then(() => {
            location.href = "tdl.html";
        });
};

document.getElementById("no").onclick = () => {
    history.back();
};