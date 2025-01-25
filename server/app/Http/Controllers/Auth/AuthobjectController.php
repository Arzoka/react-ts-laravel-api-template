<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Authobject;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class AuthobjectController extends Controller
{
    public function index() : JsonResponse
    {
        $authobjects = Authobject::all();

        return response()->json($authobjects, 200);
    }

    public function show($id) : JsonResponse
    {
        $authobject = Authobject::findOrFail($id);

        return response()->json($authobject, 200);
    }

    public function store(Request $request) : JsonResponse
    {
        $request->validate([
            'name' => 'required|string',
        ]);

        $authobject = Authobject::create($request->all());

        return response()->json($authobject, 201);
    }

    public function update(Request $request, $id) : JsonResponse
    {
        $authobject = Authobject::findOrFail($id);
        $authobject->update($request->all());

        return response()->json($authobject, 200);
    }

    public function destroy($id) : JsonResponse
    {
        Authobject::destroy($id);

        return response()->json(null, 204);
    }

}
