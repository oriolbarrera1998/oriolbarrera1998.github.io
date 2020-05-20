<?php

namespace App\Http\Controllers\Api;

use App\Models\skills;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use  App\Http\Resources\skillsResource;

class skillsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $skills = skills::all();
        return new skillsResource($skills);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\incidencias  $incidencias
     * @return \Illuminate\Http\Response
     */
    public function show($incidencias)
    {
        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\incidencias  $incidencias
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,  $id)
    {
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\incidencias  $incidencias
     * @return \Illuminate\Http\Response
     */
    public function destroy($id_ciudad)
    {
    }
}
