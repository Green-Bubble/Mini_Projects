<?php
require 'function.php';
$notes = query("SELECT * FROM notes;");

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
  <a href="tambah.php">Tambah Note</a>

  <ul>
    <?php foreach ($notes as $note): ?>
      <li>
        <h3>
          <?php echo $note["judul"] ?>
        </h3>
        <p>
          <?php echo $note["isi"] ?>
        </p>
        <a href="ubah.php?id=<?= $note["id"] ?>">Edit</a>
        <a href="hapus.php?id=<?= $note["id"] ?>" onclick="confirm('yakin kamu deck?')">Hapus</a>
      </li>
    <?php endforeach; ?>
  </ul>
</body>

</html>