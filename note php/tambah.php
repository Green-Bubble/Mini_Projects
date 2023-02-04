<?php
require 'function.php';

if (isset($_POST["submit"])) {

  if (tambah($_POST) > 0) {
    echo "
      <script>
      alert('data berhasil ditambahkan');
      document.location.href = 'index.php';
    </script>
      ";
  } else {
    echo "
      <script>
      alert('data gagal ditambahkan');
      document.location.href = 'index.php';
    </script>
      ";
    echo '<br>';
    echo mysqli_error($conn);
  }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>CRUD Notes</title>
</head>

<body>
  <a href="index.php">Kembali ke notes</a>

  <br><br>

  <form action="" method="post">
    <ul>
      <li>
        <label for="judul">Judul :</label>
        <input type="text" name="judul" id="judul" placeholder="Judul note" autofocus>
      </li>
      <li>
        <label for="isi">Isi :</label>
        <input type="text" name="isi" id="isi" placeholder="isi note">
      </li>
      <button type="submit" name="submit">Tambah</button>
    </ul>

  </form>
</body>

</html>