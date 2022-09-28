<?php

namespace App\Http\Controllers;

use App\ApllicationServices\groupByOwnersService;
use Illuminate\Http\Request;

class GroupByOwnerController extends Controller
{
    public function getGroupByOwners(Request $request)
    {
        $data = GroupByOwnersService:: getGroupByOwners($request);
        return $data;

    }
}
