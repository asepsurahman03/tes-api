// Buka modal ketika tombol "Daftar Sekarang" ditekan
document.getElementById("openModal").onclick = function() {
    document.getElementById("registerModal").style.display = "flex";
};

// Tutup modal ketika tombol "X" ditekan
document.getElementById("closeModal").onclick = function() {
    document.getElementById("registerModal").style.display = "none";
};

// Tutup modal jika area luar modal diklik
window.onclick = function(event) {
    if (event.target == document.getElementById("registerModal")) {
        document.getElementById("registerModal").style.display = "none";
    }
};

// Fungsi pendaftaran pengguna
document.getElementById("registerForm").onsubmit = function(e) {
    e.preventDefault(); // Cegah form submit

    // Ambil data dari form
    const username = document.getElementById("username").value;
    const deviceName = document.getElementById("deviceName").value;
    const whatsapp = document.getElementById("whatsapp").value;
    const email = document.getElementById("email").value;

    // Simpan data ke Local Storage
    const userData = { username, deviceName, whatsapp, email };
    localStorage.setItem("user", JSON.stringify(userData));

    alert("Pendaftaran berhasil!");
    document.getElementById("registerModal").style.display = "none";
};



document.getElementById("registerForm").onsubmit = function(e) {
    e.preventDefault(); // Cegah form submit

    // Ambil data dari form
    const username = document.getElementById("username").value;
    const deviceName = document.getElementById("deviceName").value;
    const whatsapp = document.getElementById("whatsapp").value;
    const email = document.getElementById("email").value;
    const startDateTime = document.getElementById("startDateTime").value;
    const endDateTime = document.getElementById("endDateTime").value;

    // Simpan data ke Local Storage
    const userData = { username, deviceName, whatsapp, email, startDateTime, endDateTime };
    localStorage.setItem("user", JSON.stringify(userData));

    // Buat pesan untuk WhatsApp
    const message = `Pendaftaran Baru:\n
    Nama Pengguna: ${username}\n
    Perangkat: ${deviceName}\n
    Nomor WhatsApp: ${whatsapp}\n
    Email: ${email}\n
    Waktu Mulai: ${startDateTime}\n
    Waktu Akhir: ${endDateTime}`;

    // Kirim ke nomor Anda melalui WhatsApp
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/6285659838977?text=${encodedMessage}`;
    
    // Buka link untuk mengirimkan pesan ke WhatsApp
    window.open(whatsappLink, "_blank");

    // Notifikasi dan tutup modal
    alert("Pendaftaran berhasil! Data telah dikirim ke WhatsApp.");
    document.getElementById("registerModal").style.display = "none";

    // Set timer untuk notifikasi 5 menit sebelum waktu akhir
    scheduleReminder(endDateTime);
};

// Fungsi untuk mengatur pengingat 5 menit sebelum waktu akhir
function scheduleReminder(endDateTime) {
    const end = new Date(endDateTime).getTime();

    // Waktu saat ini
    const now = new Date().getTime();

    // Hitung waktu tersisa dalam milidetik
    const timeRemaining = end - now;

    // Set pengingat 5 menit sebelum waktu habis
    const reminderTime = timeRemaining - (5 * 60 * 1000);

    if (reminderTime > 0) {
        setTimeout(() => {
            alert("Sisa waktu WiFi Anda tinggal 5 menit lagi.");
            sendReminderToWhatsApp();
        }, reminderTime);
    }
}

// Fungsi untuk mengirim notifikasi ke WhatsApp
function sendReminderToWhatsApp() {
    const userData = JSON.parse(localStorage.getItem("user"));
    const reminderMessage = `Halo ${userData.username},\nSisa waktu WiFi Anda tinggal 5 menit lagi.`;
    const encodedReminderMessage = encodeURIComponent(reminderMessage);
    const whatsappReminderLink = `https://wa.me/${userData.whatsapp}?text=${encodedReminderMessage}`;
    window.open(whatsappReminderLink, "_blank");
}
