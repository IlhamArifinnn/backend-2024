<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HewanController extends Controller
{
    public array $animals = ['Ayam', 'Burung', 'Cicak', 'Domba', 'Elang', 'Gajah', 'Hiu', 'Ikan',];


    public function index()
    {
        $animals = $this->animals;

        // foreach ($animals as $key => $animal) {
        //     echo "index: $key, name: $animal" . PHP_EOL;
        // }

        $response = array_map(function ($animal, $index) {
            return [
                'id' => $index,
                'name' => $animal,
            ];
        }, $animals, array_keys($animals));

        return response()->json($response);
    }

    public function store(Request $request)
    {

        $data = $request->name;
        array_push($this->animals, $data);

        return $this->index();
    }

    public function update(Request $request, int $id)
    {

        $this->animals[$id] = $request->name;

        return $this->index();
    }

    public function destroy(int $id)
    {
        unset($this->animals[$id]);

        return $this->index();
    }
}
