"use strict";

const params = new URLSearchParams(location.search);
const id = params.get("id");
const detail = document.getElementById("detail");

fetch(`/api/items/${id}`)
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

document.getElementById("edit").onclick = () => {
  location.href = `edit.html?id=${id}`;
};

document.getElementById("delete").onclick = () => {
  location.href = `delete.html?id=${id}`;
};