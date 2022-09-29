<?php

namespace App\Http\Controllers;

use App\Application\MultipleOccurrenceService;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
    public function returnMultipleOccurrence(Request $request){
        $data = MultipleOccurrenceService::popularElement($request);
        return $data;
    }
}
