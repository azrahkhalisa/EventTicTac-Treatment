//format tanggal
function formatTanggal(dateStr) {
    const bulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    const d = new Date(dateStr);
    return d.getDate() + ' ' + bulan[d.getMonth()] + ' ' + d.getFullYear();
}

//Form Pemesanan
const form = document.getElementById("formPengajuan");
if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const nama = document.getElementById("nama").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const email = document.getElementById("email").value.trim();
        const tanggal = document.getElementById("tanggal").value;
        const tiket = document.getElementById("tiket").value;
        const kategori = document.getElementById("kategori").value;

        if (
            nama === "" ||
            phone === "" ||
            email === "" ||
            tanggal === "" ||
            tiket === "— Pilih Event —"
        ) {
            alert("Silakan lengkapi semua data terlebih dahulu.");
            return;
        }

        const booking = {
            nama,
            phone,
            email,
            tanggal,
            tiket,
            kategori,
        };

        let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
        bookings.push(booking);
        localStorage.setItem("bookings", JSON.stringify(bookings));
        alert("Pemesanan tiket berhasil!");
        window.location.href = "riwayat.html";
    });

}

//tampilkan riwayat
const tableBody = document.getElementById("tableBody");
const emptyState = document.getElementById("emptyState");
const dataCount = document.getElementById("datacount");

if (tableBody) {
    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    if (bookings.length === 0) {
        emptyState.style.display = "block";
        dataCount.textContent = "0 Pesanan Tiket";
    }
    
    else {
        emptyState.style.display = "none";
        dataCount.textContent = `${bookings.length} Pesanan Tiket`;

        bookings.forEach((booking, index) => {
            tableBody.innerHTML += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${booking.nama}</td>
                    <td>${booking.phone}</td>
                    <td>${booking.email}</td>
                    <td>${booking.tanggal}</td>
                    <td>${booking.tiket}</td>
                    <td>${booking.kategori || "-"}</td>
                </tr>
            `;
        });
    }
}