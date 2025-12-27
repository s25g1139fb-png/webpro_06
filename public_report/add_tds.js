"use strict";

const form = document.getElementById("form");
const anniversary = document.getElementById("anniversary");
const period = document.getElementById("period");
const theme = document.getElementById("theme");
const concept = document.getElementById("concept");
const catchphrase = document.getElementById("catchphrase");
const song = document.getElementById("song");
const show = document.getElementById("show");
const costume = document.getElementById("costume");

form.onsubmit = e => {
    e.preventDefault();

    fetch("/api/tds/items", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            anniversary: anniversary.value,
            period: period.value,
            theme: theme.value,
            concept: concept.value,
            catchphrase: catchphrase.value,
            song: song.value,
            show: show.value,
            costume: costume.value
        })
    }).then(() => {
        location.href = "tds.html";
    });
};