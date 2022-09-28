<?php

namespace App\Attendance\Application;

use App\imports\AttendanceImport;
use App\Models\Attendance\Domain\Attendance;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class AttendanceService
{
    //Upload The CSV File

    public static function uploadCSV(Request $request)
    {
        Excel::import(new AttendanceImport, $request->file);

        return ('CSV file imported to Attendance table successfully');

    }

    public static function returnAttendanceDetails(Request $request)
    {
        $attendance = Attendance::with(['schedule.employee', 'schedule.shift'])->get();

        return ($attendance);
    }
}
