// format tanggal
function formatTanggal(dateStr) {
    const bulan = [
        "Januari", "Februari", "Maret", "April", "Mei", "Juni",
        "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];

    const d = new Date(dateStr);
    return d.getDate() + " " + bulan[d.getMonth()] + " " + d.getFullYear();
}

// local storage
function getData() {
    return JSON.parse(localStorage.getItem("bookings")) || [];
}

function saveData(data) {
    localStorage.setItem("bookings", JSON.stringify(data));
}

// form
function initForm() {

    const form = document.getElementById("formPengajuan");

    if (!form) return;

    const urlParams = new URLSearchParams(window.location.search);
    const editIndex = urlParams.get("edit");

    let bookings = getData();

    // MODE EDIT
    if (editIndex !== null) {

        const booking = bookings[editIndex];

        if (booking) {

            document.getElementById("nama").value = booking.nama;
            document.getElementById("phone").value = booking.phone;
            document.getElementById("email").value = booking.email;
            document.getElementById("tanggal").value = booking.tanggal;
            document.getElementById("tiket").value = booking.tiket;
            document.getElementById("kategori").value = booking.kategori;

            form.querySelector("button[type='submit']").textContent =
                "✏️ Simpan Perubahan";
        }
    }

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

        const booking = {
            nama,
            phone,
            email,
            tanggal,
            tiket,
            kategori
        };

        if (editIndex !== null) {
            bookings[editIndex] = booking;
            alert("Data berhasil diperbarui!");
        } else {
            bookings.push(booking);
            alert("Pemesanan tiket berhasil!");
        }

        saveData(bookings);

        window.location.href = "riwayat.html";

    });

}

// riwayat
function initRiwayat() {
    const tableBody = document.getElementById("tableBody");
    if (!tableBody) return;

    renderTable();

}

// tampilkan tabel
function renderTable() {

    const tableBody = document.getElementById("tableBody");
    const emptyState = document.getElementById("emptyState");
    const dataCount = document.getElementById("datacount");
    const btnHapusSemua = document.getElementById("btnHapusSemua");

    const bookings = getData();

    tableBody.innerHTML = "";

    if (bookings.length === 0) {

        emptyState.style.display = "block";
        dataCount.textContent = "0 Pesanan Tiket";

        if (btnHapusSemua)
            btnHapusSemua.style.display = "none";

        return;
    }

    emptyState.style.display = "none";
    dataCount.textContent = bookings.length + " Pesanan Tiket";

    if (btnHapusSemua)
        btnHapusSemua.style.display = "inline-block";

    for (let i = 0; i < bookings.length; i++) {
        const booking = bookings[i];
        const tr = document.createElement("tr");

        tr.innerHTML =
            "<td>" + (i + 1) + "</td>" +
            "<td>" + booking.nama + "</td>" +
            "<td>" + booking.phone + "</td>" +
            "<td>" + booking.email + "</td>" +
            "<td>" + formatTanggal(booking.tanggal) + "</td>" +
            "<td>" + booking.tiket + "</td>" +
            "<td>" + booking.kategori + "</td>" +
            "<td>" +
            '<button class="btn-edit" onclick="editData(' + i + ')">✏️ Edit</button> ' +
            '<button class="btn-delete" onclick="hapusData(' + i + ')">🗑️ Hapus</button>' +
            "</td>";
        tableBody.appendChild(tr);
    }
}

// edit
function editData(index) {
    window.location.href = "pesantiket.html?edit=" + index;

}

// hapus
function hapusData(index) {
    if (!confirm("Yakin ingin menghapus data ini?")) return;
    const bookings = getData();
    bookings.splice(index, 1);
    saveData(bookings);
    renderTable();
}

// hapus semua
function hapusSemua() {
    if (!confirm("Yakin ingin menghapus semua data?")) return;
    saveData([]);
    renderTable();
}

const btnHapusSemua = document.getElementById("btnHapusSemua");

if (btnHapusSemua) {
    btnHapusSemua.addEventListener("click", hapusSemua);
}

// jalankan
initForm();
initRiwayat();