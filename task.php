<?php

# membuat class Animal
class Animal
{
   # property animals
   public $animals = [];



   # method constructor - mengisi data awal
   # parameter: data hewan (array)
   public function __construct($data)
   {
      $this->animals = $data;
   }

   # method index - menampilkan data animals
   public function index()
   {
      # gunakan foreach untuk menampilkan data animals (array)
      foreach ($this->animals as $animal) {
         echo $animal . "<br>";
      }
   }

   # method store - menambahkan hewan baru
   # parameter: hewan baru
   public function store($data)
   {
      # gunakan method array_push untuk menambahkan data baru
      array_push($this->animals, $data);
   }

   # method update - mengupdate hewan
   # parameter: index dan hewan baru
   public function update($index, $data)
   {
      # gunakan method array_splice untuk mengganti data array
      array_splice($this->animals, $index, 1, $data);
   }

   # method delete - menghapus hewan
   # parameter: index
   public function destroy($index)
   {
      # gunakan method unset atau array_splice untuk menghapus data array
      unset($this->animals[$index]);
      $this->animals = array_values($this->animals);
   }
}

# membuat object
# kirimkan data hewan (array) ke constructor
$animal = new Animal(['ayam', 'ikan']);

echo "<h3>Index - Menampilkan seluruh hewan</h3>";
$animal->index();


echo "<h3>Store - Menambahkan hewan baru </h3>";
$animal->store('burung');
$animal->index();


echo "<h3>Update - Mengupdate hewan </h3>";
$animal->update(0, 'Kucing Anggora');
$animal->index();


echo "<h3>Destroy - Menghapus hewan </h3>";
$animal->destroy(1);
$animal->index();
