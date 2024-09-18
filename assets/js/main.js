document.getElementById('joki-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form dari pengiriman default

    // Mengambil data dari form
    const akun = encodeURIComponent(document.getElementById('akun').value);
    const email = encodeURIComponent(document.getElementById('email').value);
    const password = encodeURIComponent(document.getElementById('password').value);
    const rankSekarang = encodeURIComponent(document.getElementById('rank-sekarang').value);
    const rankTujuan = encodeURIComponent(document.getElementById('rank-tujuan').value);
    const requestHero = encodeURIComponent(document.getElementById('request-hero').value);
    const catatan = encodeURIComponent(document.getElementById('catatan').value);

    // Membuat pesan WhatsApp
    const message = `Nama Akun: ${akun}%0AEmail: ${email}%0APassword: ${password}%0ARank Sekarang: ${rankSekarang}%0ARank Tujuan: ${rankTujuan}%0ARequest Hero: ${requestHero}%0ACatatan: ${catatan}`;
    
    // Nomor WhatsApp Anda
    const phoneNumber = '+6285659838977'; // Ganti dengan nomor WhatsApp Anda

    // Membuat URL WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    // Redirect ke URL WhatsApp
    window.location.href = whatsappUrl;
});
