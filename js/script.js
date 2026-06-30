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

// ===============================
// TAMPILKAN DATA DI RIWAYAT
// ===============================

const tableBody = document.getElementById("tableBody");

if (tableBody) {

    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];

    tableBody.innerHTML = "";

    bookings.forEach((booking, index) => {

        tableBody.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${booking.nama}</td>
                <td>${booking.phone}</td>
                <td>${booking.email}</td>
                <td>${booking.tanggal}</td>
                <td>${booking.tiket}</td>
                <td>${booking.keterangan || "-"}</td>
            </tr>
        `;

    });

}

const dataCount = document.getElementById("datacount");

if (dataCount) {

    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];

    dataCount.textContent = `${bookings.length} Pesanan Tiket`;

}

const btnHapusSemua = document.getElementById("btnHapusSemua");

if (btnHapusSemua) {

    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];

    if (bookings.length > 0) {
        btnHapusSemua.style.display = "inline-block";
    }

    btnHapusSemua.addEventListener("click", () => {

        if (confirm("Yakin ingin menghapus semua data?")) {

            localStorage.removeItem("bookings");

            location.reload();

        }

    });

}

// ===============================
// SIMPAN DATA PEMESANAN
// ===============================

const form = document.getElementById("formPengajuan");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const booking = {
            nama: document.getElementById("nama").value,
            phone: document.getElementById("phone").value,
            email: document.getElementById("email").value,
            tanggal: document.getElementById("tanggal").value,
            tiket: document.getElementById("tiket").value,
            kategori: document.getElementById("kategori").value
        };

        let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

        bookings.push(booking);

        localStorage.setItem("bookings", JSON.stringify(bookings));

        alert("Pemesanan tiket berhasil!");

        window.location.href = "riwayat.html";
    });
}

// ===============================
// TAMPILKAN RIWAYAT
// ===============================

const tableBody = document.getElementById("tableBody");
const emptyState = document.getElementById("emptyState");
const dataCount = document.getElementById("datacount");
const btnHapusSemua = document.getElementById("btnHapusSemua");

if (tableBody) {

    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

    if (bookings.length === 0) {

        emptyState.style.display = "block";
        dataCount.textContent = "0 Pesanan Tiket";
        btnHapusSemua.style.display = "none";

    } else {

        emptyState.style.display = "none";
        dataCount.textContent = `${bookings.length} Pesanan Tiket`;
        btnHapusSemua.style.display = "inline-block";

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

// ===============================
// HAPUS SEMUA DATA
// ===============================

if (btnHapusSemua) {

    btnHapusSemua.addEventListener("click", function () {

        const yakin = confirm("Apakah Anda yakin ingin menghapus semua data?");

        if (yakin) {

            localStorage.removeItem("bookings");

            location.reload();

        }

    });

}

// ==============================
// FORM PEMESANAN EVENTTICTAC
// ==============================

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
            alert("Silakan lengkapi semua data.");
            return;
        }

        const data = {
            nama,
            phone,
            email,
            tanggal,
            tiket,
            kategori
        };

        let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

        bookings.push(data);

        localStorage.setItem("bookings", JSON.stringify(bookings));

        alert("Pemesanan berhasil!");

        window.location.href = "riwayat.html";

    });

}