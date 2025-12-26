"use strict";

const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public01"));

/* ===== データ（ここを書き換えるだけで完成） ===== */
let items = [
    {
        id: 1,
        price: "900円",
        store: "カウボーイ・クックハウス（TDL）/ リフレスコス（TDS）",
        content: "スモーキーなターキーのレッグ",
    },
    {
        id: 2,
        price: "700円",
        store: "カフェ・オーリンズ（TDL）",
        content: "映画「プリンセスと魔法のキス」でも登場したオクラを使ったスパイシーなスープ",
    },
    {
        id: 3,
        price: "620円",
        store: "パン・ギャラクティック・ピザ・ポート（TDL）",
        content: "チキンにトマト、チーズが入ったフライドピザ",
    },
    {
        id: 4,
        price: "550円",
        store: "キャプテンフックス・ギャレー（TDL）",
        content: "ディズニーで昔から親しまれてきたパイナップルが乗ったピザ",
    },
    {
        id: 5,
        price: "600円",
        store: "ボイラールーム・バイツ（TDL）/ ノーチラスギャレー（TDS）",
        content: "生姜の効いた餃子の餡を包んだ餃子饅",
    },
    {
        id: 6,
        price: "600円",
        store: "エクスペディション・イート（TDS）",
        content: "パンにソーセージを突っ込んだだけの簡易的なものだが、本当に美味しい",
    },
    {
        id: 7,
        price: "850円",
        store: "オーケンのオーケーフード（TDS）",
        content: "カルダモンが香る北欧の味",
    },
];

let nextId = 8;


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
        store: req.body.store,
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
