document
  .getElementById("daftarButton")
  .addEventListener("click", function (event) {
    event.preventDefault();

    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var alamat = document.getElementById("alamat").value;

    if (nama === "" || email === "" || alamat === "") {
      alert("Anda Harus Mengisi Data Dengan Lengkap !");
    } else {
      alert("Data berhasil disubmit.");

    }
  });