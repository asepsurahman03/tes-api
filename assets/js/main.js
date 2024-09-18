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
