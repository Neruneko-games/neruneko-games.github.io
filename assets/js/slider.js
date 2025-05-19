document.addEventListener('DOMContentLoaded', function () {
    // 初期表示
    showSlide(0);
});

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');

    // サムネイルのアクティブ状態を更新
    const thumbnails = document.querySelectorAll('.thumbnail-nav img');
    thumbnails.forEach(thumb => thumb.classList.remove('active'));
    thumbnails[index].classList.add('active');
}
