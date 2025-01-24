<?php

namespace App\Http\Controllers;

use App\Models\Testobject;
use Illuminate\Http\Request;

class TestobjectController extends Controller
{
    public function index(): \Illuminate\Http\JsonResponse
    {
        $testobjects = Testobject::all();

        return response()->json($testobjects, 200);
    }

    public function show($id): \Illuminate\Http\JsonResponse
    {
        $testobject = Testobject::findOrFail($id);

        return response()->json($testobject, 200);
    }

    public function store(Request $request): \Illuminate\Http\JsonResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
        ]);

        $testobject = Testobject::create($request->all());

        return response()->json($testobject, 201);
    }

    public function update(Request $request, $id): \Illuminate\Http\JsonResponse
    {
        $testobject = Testobject::findOrFail($id);
        $testobject->update($request->all());

        return response()->json($testobject, 200);
    }

    public function destroy($id): \Illuminate\Http\JsonResponse
    {
        Testobject::destroy($id);

        return response()->json(null, 204);
    }
}
