<?php

function hitungLuasLingkaran($jari)
{
   $phi = pi();
   $luasLingkaran = $phi * $jari * $jari;
   return $luasLingkaran;
}

hitungLuasLingkaran(7);
hitungLuasLingkaran(9);
hitungLuasLingkaran(13);
