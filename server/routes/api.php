<?php

use App\Http\Controllers\TestobjectController;
use Illuminate\Support\Facades\Route;

// Testobject
Route::get('/testobject', [TestobjectController::class, 'index']);
Route::get('/testobject/{id}', [TestobjectController::class, 'show']);
Route::post('/testobject/create', [TestobjectController::class, 'store']);
Route::put('/testobject/update', [TestobjectController::class, 'update']);
Route::delete('/testobject/destroy', [TestobjectController::class, 'destroy']);

