<?php

namespace App\Http\Controllers;

use App\Navmenu;
use Illuminate\Http\Request;

class NavmenuController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return   [
             [
             'name'=> 'Home', 'url'=> '/', 'icon'=> 'icon-home' 
             ],
             [
             'name'=> 'Home', 'url'=> '/', 'icon'=> 'icon-home' 
             ],
          
            ];
        
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Navmenu  $navmenu
     * @return \Illuminate\Http\Response
     */
    public function show(Navmenu $navmenu)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Navmenu  $navmenu
     * @return \Illuminate\Http\Response
     */
    public function edit(Navmenu $navmenu)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Navmenu  $navmenu
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Navmenu $navmenu)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Navmenu  $navmenu
     * @return \Illuminate\Http\Response
     */
    public function destroy(Navmenu $navmenu)
    {
        //
    }
}
