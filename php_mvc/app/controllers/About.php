<?php

class About
{
  public function index($nama = 'Vincent', $pekerjaan = 'Developer')
  {
    echo "Halp, nama saya $nama, saya adalah seorang $pekerjaan";
  }
  public function page()
  {
    echo "About/page";
  }
}