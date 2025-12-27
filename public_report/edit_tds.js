"use strict";

const params = new URLSearchParams(location.search);
const id = params.get("id");
const form = document.getElementById("form");


const period = document.getElementById("period");
const theme = document.getElementById("theme");
const concept = document.getElementById("concept");
const catchphrase = document.getElementById("catchphrase");
const song = document.getElementById("song");
const show = document.getElementById("show");
const costume = document.getElementById("costume");

fetch(`/api/tds/items/${id}`)
    .then(res => res.json())
    .then(item => {
        period.value = item.period;
        theme.value = item.theme;
        concept.value = item.concept;
        catchphrase.value = item.catchphrase;
        song.value = item.song;
        show.value = item.show;
        costume.value = item.costume;
    });

form.onsubmit = e => {
    e.preventDefault();

    fetch(`/api/tds/items/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            period: period.value,
            theme: theme.value,
            concept: concept.value,
            catchphrase: catchphrase.value,
            song: song.value,
            show: show.value,
            costume: costume.value
        })
    }).then(() => {
        location.href = `detail_tds.html?id=${id}`;
    });
};