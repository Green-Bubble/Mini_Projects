<?php

$conn = mysqli_connect("localhost", "root", "", "test");

function query($query)
{
  global $conn;
  $result = mysqli_query($conn, $query);
  $rows = [];

  while ($row = mysqli_fetch_assoc($result)) {
    $rows[] = $row;
  }
  return $rows;
}

function tambah($data)
{
  global $conn;

  $judul = htmlspecialchars($data["judul"]);
  $isi = htmlspecialchars($data['isi']);

  $query = "INSERT INTO notes VALUES ('', '$judul', '$isi')";
  mysqli_query($conn, $query);

  return mysqli_affected_rows($conn);
}

function hapus($id)
{
  global $conn;

  $query = "DELETE FROM notes WHERE id = $id";
  mysqli_query($conn, $query);

  return mysqli_affected_rows($conn);
}

function ubah($data)
{
  global $conn;

  $id = $data["id"];
  $judul = htmlspecialchars($data["judul"]);
  $isi = htmlspecialchars($data['isi']);

  $query = "UPDATE notes SET judul = '$judul', isi = '$isi' WHERE id = $id";
  mysqli_query($conn, $query);

  return mysqli_affected_rows($conn);
}

function cari($keyword)
{
  $query = "SELECT * FROM notes WHERE judul LIKE '%$keyword%' OR isi LIKE '%$keyword%'";
  return query($query);
}

function regis($data){
  global $conn;

  $username = strtolower(stripslashes($data["username"])) ;
  $password = mysqli_real_escape_string($conn, $data["password"]) ;
  $konfirmasi = mysqli_real_escape_string($conn, $data["konfirmasi"]);

  $queryCek = "SELECT username FROM pengguna WHERE username = '$username'";
  $result = mysqli_query($conn, $queryCek);

  if(mysqli_fetch_assoc($result)){
    echo "
      <script>
        alert('usernamenya dan dipake dek');
      </script>
    ";
    return false;
  }

  if($password !== $konfirmasi){
    echo "
    <script>
      alert ('konfirmasi password ga sesuai dek');
    </script>
    ";
    return false;
  }

  $password = password_hash($password, PASSWORD_DEFAULT);

  $queryMasukin = "INSERT INTO pengguna VALUES ('','$username', '$password')";
  mysqli_query($conn, $queryMasukin);

  return mysqli_affected_rows($conn);
}

?>