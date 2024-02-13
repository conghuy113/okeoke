function toggleLetter() {
    var letter = document.getElementById("letterContent");
    letter.classList.toggle("open");
    
    
    var letterImage = document.querySelector(".letter-image");
    letterImage.style.opacity = "0"; // Biến mất hình ảnh sau khi click vào
    
    setTimeout(function() {
        letterImage.style.display = "none"; // Sau khi hình ảnh biến mất hoàn toàn
        letter.style.display = "block";
    }, 1000); // Thời gian chờ tương ứng với thời gian chuyển động opacity trong CSS
}

document.addEventListener("DOMContentLoaded", function() {
    document.body.style.opacity = 1; // Hiển thị trang web sau khi tất cả nội dung đã được tải
});
