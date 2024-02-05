
// Tipe any adalah tipe data yang bisa menerima jenis tipe data yang lain
// Menggunakan any sebenernya tidak direkomendasikan
// biasanya tipe data any digunakan misal dari library orang lain yang sudah tidak bisa diubah
// atau memang attributnya tidak pastinya tipe datanya

// pada kasus ini saya membuat tipe data JavaScript object sendiri
// kita bisa membuat alias untuk struktur tipe ata objectnya

describe('Any', function () {
    it('should support in typescript', function () {

        const person: any = {
            id: 1,
            name: "Eko Kurniawan Khannedy",
            age: 30
        };

        person.age = 31;
        person.address = "Indonesia";

        console.info(person);

    });
});