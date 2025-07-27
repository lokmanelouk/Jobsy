<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\JobRequestController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\ServiceCategoryController;
use App\Http\Controllers\WorkerController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);


Route::apiResource('customers', CustomerController::class);
Route::apiResource('workers', WorkerController::class);
Route::apiResource('job-requests', JobRequestController::class);
Route::apiResource('messages', MessageController::class);
Route::apiResource('reviews', ReviewController::class);
Route::apiResource('categories', ServiceCategoryController::class);


