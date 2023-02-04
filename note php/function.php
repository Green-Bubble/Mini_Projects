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

?>