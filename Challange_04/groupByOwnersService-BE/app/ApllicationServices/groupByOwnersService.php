<?php

namespace App\ApllicationServices;

use Illuminate\Http\Request;
use App\Models\Company;
use App\Models\Document;

class groupByOwnersService
{
    public static function getGroupByOwners(Request $request)
    {
        $companies = Company::all();
        $sampleArray = [];
        foreach ($companies as $key => $element) {
            $documents = Document::where('company_id', '=', $element['id'])->pluck('document_name');
            $data[] = [$element['company_name'] => $documents];
        }
        return $data;

    }

}
