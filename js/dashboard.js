// dashboard.js
document.addEventListener("DOMContentLoaded", function() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
        document.getElementById("usernameDisplay").innerText = user.username;
        // Logika untuk menunjukkan paket yang sedang aktif
        const paketAktif = localStorage.getItem("paketAktif");
        document.getElementById("paketAktif").innerText = paketAktif ? paketAktif : "Belum ada paket aktif";
    }
});

function pilihPaket(paket) {
    localStorage.setItem("paketAktif", paket);
    alert(`Paket ${paket} berhasil diaktifkan!`);
    window.location.href = "dashboard.html";
}
