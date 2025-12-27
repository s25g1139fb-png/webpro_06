"use strict";

const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public_report"));

/* ===== データ（ここを書き換えるだけで完成） ===== */
let tdlItems = [
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

let nextTdlId = 6;

let tdsItems = [
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
        show: "Be Magical!",
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
        show: "クリスタル・ウィッシュ・ジャーニー",
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
        show: "タイム・トュ・シャイン！",
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
        show: "スパークリング・ジュビリー・セレブレーション",
        costume: "ジュビリーブルー"
    }
];
let nextTdsId = 7;

let foodItems = [
    {
        id: 1,
        food: "スモークターキーレッグ",
        price: "900円",
        store: "カウボーイ・クックハウス（TDL）/ リフレスコス（TDS）",
        content: "スモーキーなターキーのレッグ",
    },
    {
        id: 2,
        food: "ガンボスープ",
        price: "700円",
        store: "カフェ・オーリンズ（TDL）",
        content: "映画「プリンセスと魔法のキス」でも登場したオクラを使ったスパイシーなスープ",
    },
    {
        id: 3,
        food: "チキンとトマトのカルツォーネ",
        price: "620円",
        store: "パン・ギャラクティック・ピザ・ポート（TDL）",
        content: "チキンにトマト、チーズが入ったフライドピザ",
    },
    {
        id: 4,
        food: "ベーコンとパイナップルのピザ",
        price: "550円",
        store: "キャプテンフックス・ギャレー（TDL）",
        content: "ディズニーで昔から親しまれてきたパイナップルが乗ったピザ",
    },
    {
        id: 5,
        food: "ギョウザドッグ",
        price: "600円",
        store: "ボイラールーム・バイツ（TDL）/ ノーチラスギャレー（TDS）",
        content: "生姜の効いた餃子の餡を包んだ餃子饅",
    },
    {
        id: 6,
        food: "ユカタンソーセージドッグ",
        price: "600円",
        store: "エクスペディション・イート（TDS）",
        content: "パンにソーセージを突っ込んだだけの簡易的なものだが、本当に美味しい",
    },
    {
        id: 7,
        food: "オーケンのフッフーブレッド（カルダモン＆ミート）",
        price: "850円",
        store: "オーケンのオーケーフード（TDS）",
        content: "カルダモンが香る北欧の味",
    },
];

let nextFoodId = 8;

app.get("/api/tdl/items", (req, res) => {
    res.json(tdlItems);
});

app.get("/api/tdl/items/:id", (req, res) => {
    res.json(tdlItems.find(i => i.id === Number(req.params.id)) || {});
});

app.post("/api/tdl/items", (req, res) => {
    const item = { id: nextTdlId++, ...req.body };
    tdlItems.push(item);
    res.json(item);
});

app.post("/api/tdl/items/:id", (req, res) => {
    const item = tdlItems.find(i => i.id === Number(req.params.id));
    if (item) Object.assign(item, req.body);
    res.json(item || {});
});

app.post("/api/tdl/items/:id/delete", (req, res) => {
    tdlItems = tdlItems.filter(i => i.id !== Number(req.params.id));
    res.json({ success: true });
});

/* ===============================
   API（TDS）
================================ */
app.get("/api/tds/items", (req, res) => {
    res.json(tdsItems);
});

app.get("/api/tds/items/:id", (req, res) => {
    res.json(tdsItems.find(i => i.id === Number(req.params.id)) || {});
});

app.post("/api/tds/items", (req, res) => {
    const item = { id: nextTdsId++, ...req.body };
    tdsItems.push(item);
    res.json(item);
});

app.post("/api/tds/items/:id", (req, res) => {
    const item = tdsItems.find(i => i.id === Number(req.params.id));
    if (item) Object.assign(item, req.body);
    res.json(item || {});
});

app.post("/api/tds/items/:id/delete", (req, res) => {
    tdsItems = tdsItems.filter(i => i.id !== Number(req.params.id));
    res.json({ success: true });
});

/* ===============================
   API（フード）
================================ */
app.get("/api/food/items", (req, res) => {
    res.json(foodItems);
});

app.get("/api/food/items/:id", (req, res) => {
    res.json(foodItems.find(i => i.id === Number(req.params.id)) || {});
});

app.post("/api/food/items", (req, res) => {
    const item = { id: nextFoodId++, ...req.body };
    foodItems.push(item);
    res.json(item);
});

app.post("/api/food/items/:id", (req, res) => {
    const item = foodItems.find(i => i.id === Number(req.params.id));
    if (item) Object.assign(item, req.body);
    res.json(item || {});
});

app.post("/api/food/items/:id/delete", (req, res) => {
    foodItems = foodItems.filter(i => i.id !== Number(req.params.id));
    res.json({ success: true });
});

/* ===============================
   起動
================================ */
app.listen(8080, () => {
    console.log("Example app listening on port 8080!");
});