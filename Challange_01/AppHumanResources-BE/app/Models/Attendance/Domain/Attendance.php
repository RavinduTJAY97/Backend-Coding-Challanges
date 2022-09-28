<?php

namespace App\Models\Attendance\Domain;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Attendance extends Model
{
    use HasFactory;
    protected $fillable = [
        'employee_id',
        'schedule_id',
    ];

    public function schedule()
    {
        return $this->belongsTo('App\Models\Attendance\Domain\Schedule');
    }
}
