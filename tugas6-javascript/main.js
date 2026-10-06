import { index, store, destroy } from "./controller.js";

const main = () => {
    console.log("Data Awal:");
    index();

    store(
        {
            nama: "Data 11",
            umur: 30,
            alamat: "Jl. Data 11",
            email: "data11@gmail.com"
        },
        {
            nama: "Data 12",
            umur: 31,
            alamat: "Jl. Data 12",
            email: "data12@gmail.com"
        }
    );

    console.log("\nSetelah Menambah 2 Data:");
    index();

    destroy("Data 2");

    console.log("\nSetelah Menghapus Data 2:");
    index();
};

main();