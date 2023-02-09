<?php
session_start();
require 'function.php';

if(isset($_SESSION["login"])){
  header("Location: index.js");
}

if (isset($_POST["login"])) {
  $username = $_POST["username"];
  $password = $_POST["password"];

  $result = mysqli_query($conn, "SELECT * FROM pengguna WHERE username = '$username'");

  if (mysqli_num_rows($result) === 1) {
    $row = mysqli_fetch_assoc($result);
    var_dump($row["password"]);
    if (password_verify($password, $row["password"])) {
      $_SESSION["login"] = true;
      header("Location: index.js");
      exit;
    }
  }
  $error = true;
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Login</title>
  <style>
    label {
      display: block;
    }
  </style>
</head>

<body>
  <h1>Halaman Login</h1>

  <?php if (isset($error)): ?>
    <p style="color: red;">Username atau Password salah dekkk dekk</p>
  <?php endif; ?>

  <form action="" method="post">
    <ul>
      <li>
        <label for="username">Username :</label>
        <input type="text" name="username" id="username" required>
      </li>
      <li>
        <label for="password">Password :</label>
        <input type="password" name="password" id="password" required>
      </li>
      <br>
      <li>
        <button type="submit" name="login">Login</button>
      </li>
    </ul>
  </form>
  <a href="registrasi.php">Regis</a>
</body>

</html>