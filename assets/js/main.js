// Function to load content dynamically
function loadPage(page) {
    fetch(page)
        .then(response => response.text())
        .then(html => {
            document.getElementById('content').innerHTML = html;
        })
        .catch(error => console.error('Error loading page:', error));
}

// Function to toggle menu visibility
function toggleMenu() {
    const popupMenu = document.getElementById('popup-menu');
    const overlay = document.querySelector('.popup-overlay');
    const content = document.getElementById('content'); // Elemen yang akan di-blur
    const closeButton = document.querySelector('.popup-close');
    const isHidden = popupMenu.classList.contains('popup-hidden');
    
    popupMenu.classList.toggle('popup-hidden', !isHidden);
    overlay.classList.toggle('popup-hidden', !isHidden);
    content.classList.toggle('blur', !isHidden);
}

// Fungsi untuk menutup menu pop-up
function closePopup() {
    document.getElementById('popup-menu').classList.add('popup-hidden');
    document.querySelector('.popup-overlay').classList.add('popup-hidden');
    document.getElementById('content').classList.remove('blur');
}

// Menambahkan event listener pada resize untuk menyesuaikan event listener close button
window.addEventListener('resize', () => {
    const closeButton = document.querySelector('.popup-close');
    if (window.innerWidth <= 768) {
        closeButton.removeEventListener('click', closePopup); // Nonaktifkan pada mobile
    } else {
        closeButton.addEventListener('click', closePopup); // Aktifkan pada desktop
    }
});

// Menambahkan event listener untuk menu toggle
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('mode-toggle').addEventListener('click', toggleDarkMode);
    document.querySelector('.fa-bars').addEventListener('click', toggleMenu);

    // Initialize the slideshow
    showSlides();
});




document.getElementById('jokiForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Ambil data dari form
    var namaAkun = document.getElementById('namaAkun').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var loginAkun = document.getElementById('loginAkun').value;
    var rankSekarang = document.getElementById('rankSekarang').value;
    var rankTujuan = document.getElementById('rankTujuan').value;
    var requestHero = document.getElementById('requestHero').value || 'Tidak ada';
    var catatan = document.getElementById('catatan').value || 'Tidak ada';
    
    // Format pesan yang akan dikirim
    var message = `Halo, berikut adalah data akun joki saya:\n\n`
                + `Nama Akun: ${namaAkun}\n`
                + `Email: ${email}\n`
                + `Password: ${password}\n`
                + `Log In Akun: ${loginAkun}\n`
                + `Rank Sekarang: ${rankSekarang}\n`
                + `Rank Tujuan: ${rankTujuan}\n`
                + `Request Hero: ${requestHero}\n`
                + `Catatan Untuk Penjoki: ${catatan}`;
    
    // Kirim pesan ke WhatsApp
    var whatsappURL = `https://wa.me/6285351221692?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
});



// Slideshow functionality
let slideIndex = 0;

function showSlides() {
    let slides = document.querySelectorAll(".slides");
    let dots = document.querySelectorAll(".dot");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// Function to handle slide navigation
function plusSlides(n) {
    let slides = document.querySelectorAll(".slides");
    let dots = document.querySelectorAll(".dot");
    slideIndex += n;
    if (slideIndex > slides.length) {slideIndex = 1}
    if (slideIndex < 1) {slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

// Load theme on page load
document.addEventListener('DOMContentLoaded', () => {
    loadTheme();
    document.getElementById('mode-toggle').addEventListener('click', toggleDarkMode);
});
