<?php

use App\Http\Controllers\AnimalController;
use App\Http\Controllers\HewanController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::get('/animals', [AnimalController::class, 'index']);
Route::post('/animals', [AnimalController::class, 'store']);
Route::put('/animals/{id}', [AnimalController::class, 'update']);
Route::delete('/animals/{id}', [AnimalController::class, 'destroy']);



Route::get('/hewans', [HewanController::class, 'index']);
Route::post('/hewans', [HewanController::class, 'store']);
Route::patch('/hewans/{id}', [HewanController::class, 'update']);
Route::delete('/hewans/{id}', [HewanController::class, 'destroy']);
