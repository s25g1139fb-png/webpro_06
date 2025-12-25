"use strict";

const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public01"));

/* ===== データ（ここを書き換えるだけで完成） ===== */
let items = [
    {
        id: 1,
        anniversary: "20周年",
        period: "2003年1月25日〜2004年4月11日",
        theme: "Make a Wish",
        concept: "DREAM",
        catchphrase: "200％ディズニー！",
        song: "Make a Wish",
        parade: "ディズニー・ドリームス・オン・パレード",
        costume: "東京ディズニーランドの各テーマエリア"
    },
    {
        id: 2,
        anniversary: "25周年",
        period: "2008年4月14日〜2009年4月14日",
        theme: "The Dream Goes On",
        concept: "夢を開く魔法の鍵",
        catchphrase: "夢よ、ひらけ。",
        song: "魔法の鍵〜The Dream Goes On",
        parade: "ジュビレーション！",
        costume: "バージョンアップ"
    },
    {
        id: 3,
        anniversary: "30周年",
        period: "2013年4月15日〜2014年3月20日",
        theme: "ザ・ハピネス・イヤー",
        concept: "ハピネス・バルーン",
        catchphrase: "ハピネスはここに！",
        song: "Happiness is Here",
        parade: "ハピネス・イズ・ヒア",
        costume: "おもちゃ"
    },
    {
        id: 4,
        anniversary: "35周年",
        period: "2018年4月15日〜2019年3月25日",
        theme: "Happiest Celebration!",
        concept: "ドリーム・リボン",
        catchphrase: "夢は、どこまでも。",
        song: "Brand New Day",
        parade: "ドリーミング・アップ！",
        costume: "リボン"
    },
    {
        id: 5,
        anniversary: "40周年",
        period: "2023年4月15日〜2024年3月31日",
        theme: "ドリームゴーラウンド",
        concept: "ドリーム・ガーランド",
        catchphrase: "ずっと、待ってた！",
        song: "Living in Color",
        parade: "ディズニー・ハーモニー・イン・カラー",
        costume: "風車"
    }
];

let nextId = 6;


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
        parade: req.body.parade,
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
        item.parade = req.body.parade;
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
