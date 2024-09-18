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








document.addEventListener('DOMContentLoaded', function() {
    const rankSekarang = document.getElementById('rankSekarang');
    const rankTujuan = document.getElementById('rankTujuan');

    function updateOptions(event) {
        const selectedValue = event.target.value;
        const options = getSubRanks(selectedValue);

        const targetSelect = event.target;
        const lastOption = targetSelect.querySelector('option[value=""]');
        // Remove old sub-rank options
        targetSelect.querySelectorAll('option[data-subrank]').forEach(option => option.remove());
        
        if (options.length > 0) {
            // Insert new sub-rank options
            options.forEach(option => {
                const newOption = document.createElement('option');
                newOption.textContent = option;
                newOption.value = option;
                newOption.dataset.subrank = true;
                targetSelect.insertBefore(newOption, lastOption);
            });
        }
    }

    function getSubRanks(rank) {
        switch (rank) {
            case 'GrandMaster':
                return ['Grand Master I', 'Grand Master II', 'Grand Master III', 'Grand Master IV', 'Grand Master V'];
            case 'Epic':
                return ['Epic I', 'Epic II', 'Epic III', 'Epic IV', 'Epic V'];
            case 'Legend':
                return ['Legend I', 'Legend II', 'Legend III', 'Legend IV', 'Legend V'];
            case 'Mythic':
                return ['Mythic I', 'Mythic II', 'Mythic III', 'Mythic IV', 'Mythic V'];
            case 'Honnor':
                return ['Honnor I', 'Honnor II', 'Honnor III', 'Honnor IV', 'Honnor V'];
            case 'Glory':
                return ['Glory I', 'Glory II', 'Glory III', 'Glory IV', 'Glory V'];
            case 'Immortal':
                return ['Immortal I', 'Immortal II', 'Immortal III', 'Immortal IV', 'Immortal V'];
            case 'MCL Weakly':
                return ['MCL Weakly I', 'MCL Weakly II', 'MCL Weakly III', 'MCL Weakly IV', 'MCL Weakly V'];
            case 'MCL Season':
                return ['MCL Season I', 'MCL Season II', 'MCL Season III', 'MCL Season IV', 'MCL Season V'];
            default:
                return [];
        }
    }

    rankSekarang.addEventListener('change', updateOptions);
    rankTujuan.addEventListener('change', updateOptions);
});






document.getElementById('jokiForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah form agar tidak submit secara default

    // Mengambil data dari form
    const namaAkun = document.getElementById('namaAkun').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const loginAkun = document.getElementById('loginAkun').value;
    const rankSekarang = document.getElementById('rankSekarang').value;
    const rankTujuan = document.getElementById('rankTujuan').value;
    const requestHero = document.getElementById('requestHero').value || "Tidak ada";
    const catatan = document.getElementById('catatan').value || "Tidak ada catatan tambahan";

    // Membuat pesan WhatsApp
    const pesan = `Halo, saya ingin memesan jasa joki MLBB dengan format berikut:
    - Nama Akun: ${namaAkun}
    - Email: ${email}
    - Password: ${password}
    - Log In Akun: ${loginAkun}
    - Rank Sekarang: ${rankSekarang}
    - Rank Tujuan: ${rankTujuan}
    - Request Hero: ${requestHero}
    - Catatan: ${catatan}`;

    // Membuat URL WhatsApp (gunakan format nomor internasional)
    const whatsappURL = `https://wa.me/6285351221602?text=${encodeURIComponent(pesan)}`;

    // Redirect ke WhatsApp
    window.location.href = whatsappURL;
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
