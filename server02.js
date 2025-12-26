"use strict";

const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public02"));

/* ===== データ（ここを書き換えるだけで完成） ===== */
let items = [
    {
        id: 1,
        anniversary: "1周年",
        period: "2002年9月4日〜2002年10月20日",
        theme: "サンクス・トュ・ユー",
        concept: "東京ディズニーシー",
        catchphrase: "冒険とイマジネーションの海へ",
        song: "Thanks to You",
        show: "1stアニバーサリー・セレブレーション",
        costume: "提督＆セーラー"
    },
    {
        id: 2,
        anniversary: "5周年",
        period: "2006年7月14日〜2007年5月31日",
        theme: "シー・オブ・ドリームス",
        concept: "東京ディズニーシー",
        catchphrase: "さぁ、祝祭の海へ",
        song: "Sea Of Dream",
        show: "レジェンド・オブ・ミシカ",
        costume: "冒険"
    },
    {
        id: 3,
        anniversary: "10周年",
        period: "2011年9月4日〜2012年3月19日",
        theme: "Be Magical!",
        concept: "マジカル・ハット",
        catchphrase: "Be Magical!",
        song: "It'll Be Magical!",
        parade: "Be Magical!",
        costume: "魔法使い"
    },
    {
        id: 4,
        anniversary: "15周年",
        period: "2016年4月15日〜2017年3月17日",
        theme: "ザ・イヤー・オブ・ウィッシュ",
        concept: "願いを輝かせる冒険の旅立ち",
        catchphrase: "Wish",
        song: "When Your Heart Makes a Wish",
        parade: "クリスタル・ウィッシュ・ジャーニー",
        costume: "ウィッシュ・クリスタル"
    },
    {
        id: 5,
        anniversary: "20周年",
        period: "2021年9月4日〜2022年9月3日",
        theme: "タイム・トュ・シャイン！",
        concept: "キラキラ輝く特別な1年",
        catchphrase: "みんなの笑顔が輝く時",
        song: "Time to Shine",
        parade: "タイム・トュ・シャイン！",
        costume: "シャイニーホワイト"
    },
    {
        id: 6,
        anniversary: "25周年",
        period: "2026年4月15日〜2027年3月31日",
        theme: "スパークリング・ジュビリー",
        concept: "きらめく祝祭",
        catchphrase: "きらめきを、これからも。",
        song: "✨Coming soon✨",
        parade: "スパークリング・ジュビリー・セレブレーション",
        costume: "ジュビリーブルー"
    }
];

let nextId = 7;


/* ===== API ===== */

// 一覧取得
app.get("/api/items", (req, res) => {
    res.json(items);
});

// 詳細取得
app.get("/api/items/:id", (req, res) => {
    const id = Number(req.params.id);
    const item = items.find(i => i.id === id);
    res.json(item || {});
});

// 追加
app.post("/api/items", (req, res) => {
    const item = {
        id: nextId++,
        anniversary: req.body.anniversary,
        period: req.body.period,
        theme: req.body.theme,
        concept: req.body.concept,
        catchphrase: req.body.catchphrase,
        song: req.body.song,
        show: req.body.show,
        costume: req.body.costume
    };
    items.push(item);
    res.json(item);
});

// 更新
app.post("/api/items/:id", (req, res) => {
    const id = Number(req.params.id);
    const item = items.find(i => i.id === id);

    if (item) {
        item.period = req.body.period;
        item.theme = req.body.theme;
        item.concept = req.body.concept;
        item.catchphrase = req.body.catchphrase;
        item.song = req.body.song;
        item.show = req.body.show;
        item.costume = req.body.costume;
    }

    res.json(item || {});
});

// 削除
app.post("/api/items/:id/delete", (req, res) => {
    const id = Number(req.params.id);
    items = items.filter(i => i.id !== id);
    res.json({ success: true });
});


app.listen(8080, () => console.log("Example app listening on port 8080!"));
