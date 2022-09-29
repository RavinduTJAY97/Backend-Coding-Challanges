<?php

namespace App\Application;

use http\Env\Request;

class MultipleOccurrenceService
{
        public  static function popularElement($request){
        $array = json_decode($request->input('insertArray'),true);
        $values = array_count_values($array);
        $output =[];
        foreach ($values as $key => $value){
            if ($value>1) {
                array_push($output,$key);
            }
        }
        return $output;


    }

}
