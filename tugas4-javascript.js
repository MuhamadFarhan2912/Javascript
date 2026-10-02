class Pelanggan {
    constructor(nama, nomorTelepon) {
        this.nama = nama;
        this.nomorTelepon = nomorTelepon;
        this.kendaraanDisewa = null;
    }

    sewaKendaraan(kendaraan) {
        this.kendaraanDisewa = kendaraan;
    }
}

let pelanggan = [
    new Pelanggan("Farhan", "08123456789"),
    new Pelanggan("Budi", "08234567890"),
    new Pelanggan("Andi", "08345678901")
];

pelanggan[0].sewaKendaraan("Motor");
pelanggan[1].sewaKendaraan("Mobil");
pelanggan[2].sewaKendaraan("Motor");

console.log("Daftar Pelanggan yang Sedang Menyewa Kendaraan:");

pelanggan.forEach(function(data) {
    if (data.kendaraanDisewa !== null) {
        console.log("Nama: " + data.nama);
        console.log("No. Telepon: " + data.nomorTelepon);
        console.log("Kendaraan: " + data.kendaraanDisewa);
        console.log("------------------------------");
    }
});