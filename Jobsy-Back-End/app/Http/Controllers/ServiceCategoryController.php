<?php

namespace App\Http\Controllers;

use App\Models\ServiceCategory;
use Illuminate\Http\Request;

class ServiceCategoryController extends Controller
{

    public function index()
    {
        $categories = ServiceCategory::all();
        return response()->json($categories , 200);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        //
    }

    public function show(ServiceCategory $serviceCategory)
    {
        //
    }

    public function edit(ServiceCategory $serviceCategory)
    {
        //
    }

    public function update(Request $request, ServiceCategory $serviceCategory)
    {
        //
    }

    public function destroy(ServiceCategory $serviceCategory)
    {
        //
    }
}
