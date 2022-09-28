<?php

namespace App\Http\Controllers;

use App\Attendance\Application\AttendanceService;
use Illuminate\Http\Request;

class AttendanceController extends Controller
{
    public function csvImport(Request $request)
    {
        $data = AttendanceService::uploadCSV($request);
        return $data;
    }

    public function returnAttendanceDetails(Request $request)
    {
        $data = AttendanceService::returnAttendanceDetails($request);
        return $data;
    }
}
