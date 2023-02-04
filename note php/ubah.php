<?php
require 'function.php';

$id = $_GET["id"];
$note = query("SELECT * FROM notes WHERE id = $id")[0];



if (isset($_POST['submit']) > 0) {
  if (ubah($_POST) > 0) {
    echo "
    <script>
      alert ('Sudah di edit ya dek');
      document.location.href = 'index.php';
    </script>
    ";
  } else {
    echo "
    <script>
      alert ('Sudah di edit ya dek');
      document.location.href = 'index.php';
    </script>
    ";
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
    <input type="hidden" name="id" value="<?= $note["id"]; ?>">
    <ul>
      <li>
        <label for="judul">Judul :</label>
        <input type="text" name="judul" id="judul" placeholder="Judul note" autofocus value="<?= $note["isi"] ?>">
      </li>
      <li>
        <label for="isi">Isi :</label>
        <input type="text" name="isi" id="isi" placeholder="isi note" value="<?= $note["judul"] ?>"">
      </li>
      <button type=" submit" name="submit">Editin kak!</button>
    </ul>

  </form>
</body>

</html>