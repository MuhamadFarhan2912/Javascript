let produkToko = [
    { id: 1, nama: "Laptop", harga: 7000000, stok: 5 },
    { id: 2, nama: "Mouse", harga: 200000, stok: 10 },
    { id: 3, nama: "Keyboard", harga: 350000, stok: 7 }
];

function tambahProduk(nama, harga, stok) {
    let idBaru = produkToko.length + 1;

    produkToko.push({
        id: idBaru,
        nama: nama,
        harga: harga,
        stok: stok
    });
}

function hapusProduk(id) {
    produkToko = produkToko.filter(function(produk) {
        return produk.id !== id;
    });
}

function tampilkanProduk() {
    console.log("Daftar Produk:");

    produkToko.forEach(function(produk) {
        console.log(
            "ID: " + produk.id +
            " | Nama: " + produk.nama +
            " | Harga: Rp" + produk.harga +
            " | Stok: " + produk.stok
        );
    });
}

tampilkanProduk();

tambahProduk("Monitor", 1500000, 4);

console.log("\nSetelah menambahkan produk:");
tampilkanProduk();

hapusProduk(2);

console.log("\nSetelah menghapus produk ID 2:");
tampilkanProduk();