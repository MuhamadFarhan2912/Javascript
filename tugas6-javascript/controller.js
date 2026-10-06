import users from "./data.js";

const index = () => {
    users.map((user) => {
        console.log(
            "Nama: " + user.nama +
            " | Umur: " + user.umur +
            " | Alamat: " + user.alamat +
            " | Email: " + user.email
        );
    });
};

const store = (...data) => {
    users.push(...data);
};

const destroy = (nama) => {
    const indexData = users.findIndex((user) => user.nama === nama);

    if (indexData !== -1) {
        users.splice(indexData, 1);
    }
};

export { index, store, destroy };