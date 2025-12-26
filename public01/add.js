"use strict";

const form = document.getElementById("form");

form.onsubmit = e => {
    e.preventDefault();

    fetch("/api/items", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            anniversary: anniversary.value,
            period: period.value,
            theme: theme.value,
            concept: concept.value,
            catchphrase: catchphrase.value,
            song: song.value,
            parade: parade.value,
            costume: costume.value
        })
    }).then(() => {
        location.href = "index.html";
    });
};