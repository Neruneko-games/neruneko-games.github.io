---
layout: default
title: BIGGEST PIANO
description: 無料×短編×コミカルホラー
---

<link rel="stylesheet" href="../assets/styles.css">
<link rel="icon" href="/biggest-piano/assets/favicon.png" type="image/png">

<header>
  <img src="assets/images/Event Cover.png" alt="Event Cover.png" style="width:100%; max-height: 400px; object-fit: cover;">
</header>

# このピアノ、何かがおかしい。

ようこそ、特別なコンサートへ。

**『Biggest Piano』**はピアノがどんどん大きくなる違和感から始まる、短編×コミカルホラーです。

## <img src="assets/images/icon.png" alt="icon" style="width: 24px; height: 24px; vertical-align: middle;"> ゲーム紹介

霊能探偵・三田の元に届いた一通の手紙。

手紙の送り主は、音大生ショウコ。

閉鎖されたオペラ館で起こる異変に挑むため、協力者のタケル・マコトと共に探索を開始する。

しかしその静けさが、すでに異常だった──。

巨大化するピアノ。
現れる演奏者。
止まらない演奏。

果たして、ピアノの呪いを止めることはできるのか。

> **笑えるのに怖い、怖いのになぜか笑える。でも本当は、怖くない。**

---

## <img src="assets/images/icon.png" alt="icon" style="width: 24px; height: 24px; vertical-align: middle;"> ゲームスクリーンショット

<div class="slider-container">
    <div class="slide active">
        <img src="assets/images/Screenshot00000.jpg" alt="スクリーンショット1">
    </div>
    <div class="slide">
        <img src="assets/images/Screenshot00001.jpg" alt="スクリーンショット2">
    </div>
    <div class="slide">
        <img src="assets/images/Screenshot00002.jpg" alt="スクリーンショット3">
    </div>
    <div class="thumbnail-nav">
        <img src="assets/images/Screenshot00000.jpg" alt="サムネイル1" onclick="showSlide(0)" class="active">
        <img src="assets/images/Screenshot00001.jpg" alt="サムネイル2" onclick="showSlide(1)">
        <img src="assets/images/Screenshot00002.jpg" alt="サムネイル3" onclick="showSlide(2)">
    </div>
</div>

<script>
function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
    
    // サムネイルのアクティブ状態を更新
    const thumbnails = document.querySelectorAll('.thumbnail-nav img');
    thumbnails.forEach(thumb => thumb.classList.remove('active'));
    thumbnails[index].classList.add('active');
}

// 初期状態を設定
document.addEventListener('DOMContentLoaded', () => {
    showSlide(0);
});
</script>

---

## <img src="assets/images/icon.png" alt="icon" style="width: 24px; height: 24px; vertical-align: middle;"> プレイ時間・操作

- プレイ時間：約20分
- 操作：マウス＋WASD移動のみ
- エンディング：2種類（GOOD / BAD）

---

## <img src="assets/images/icon.png" alt="icon" style="width: 24px; height: 24px; vertical-align: middle;"> 無料で遊べます！

- Steam版：[リンクをここに貼ってください]
- ZIP版（ダウンロード）：[準備中 or URLをここに記載]

---

## <img src="assets/images/icon.png" alt="icon" style="width: 24px; height: 24px; vertical-align: middle;"> 配信について

配信・実況は大歓迎です！

---

{% include author.html %}

{% include footer.html %}

{% include back_to_home.html %}
