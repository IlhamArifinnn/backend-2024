<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AnimalController extends Controller
{

    private $animals = ['Ayam', 'Kucing', 'Harimau', 'kelinci'];

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(['isi array dari dari animals' => $this->animals]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validasi input
        $request->validate([
            'name' => 'required|string',
        ]);

        // Menambahkan data hewan ke array
        array_push($this->animals, $request->name);

        return response()->json(['pesan' => 'Berhasil menambahkan Hewan ke Array!', 'animals' => $this->animals]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        // Validasi input
        $request->validate([
            'name' => 'required|string',
        ]);

        if (isset($this->animals[$id])) {
            $this->animals[$id] = $request->name;
            return response()->json(['pesan' => 'Hewan berhasil diperbarui!', 'animals' => $this->animals]);
        } else {
            return response()->json(['pesan' => 'Hewan tidak ditemukan!'], 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        if (isset($this->animals[$id])) {
            unset($this->animals[$id]);
            $this->animals = array_values($this->animals);
            return response()->json(['Pesan' => 'Hewan berhasil dihapus!', 'animals' => $this->animals]);
        } else {
            return response()->json(['Pesan' => 'Hewan tidak ditemukan!'], 404);
        }
    }
}
