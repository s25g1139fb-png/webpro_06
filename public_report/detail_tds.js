"use strict";

const params = new URLSearchParams(location.search);
const id = params.get("id");
const detail = document.getElementById("detail");
const editBtn = document.getElementById("edit_tds");
const deleteBtn = document.getElementById("delete");

fetch(`/api/tds/items/${id}`)
    .then(res => res.json())
    .then(item => {
        detail.innerHTML = `
    <p>開催期間：${item.period}</p>
    <p>メインテーマ：${item.theme}</p>
    <p>コンセプト：${item.concept}</p>
    <p>キャッチフレーズ：${item.catchphrase}</p>
    <p>テーマソング：${item.song}</p>
    <p>周年ショー：${item.show}</p>
    <p>衣装コンセプト：${item.costume}</p>
    `;
    });

document.getElementById("edit_tds").onclick = () => {
    location.href = `edit_tds.html?id=${id}`;
};


console.log("delete button:", deleteBtn);

document.getElementById("deleteBtn").onclick = () => {
    location.href = `delete_tdl.html?id=${id}`;
};