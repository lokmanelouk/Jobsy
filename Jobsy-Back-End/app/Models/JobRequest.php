<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JobRequest extends Model
{

    use HasFactory;

    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }


    public function worker()
    {
        return $this->belongsTo(Worker::class);
    }

    public function messages()
    {
        return $this->hasMany(Message::class);
    }


    public function review()
    {
        return $this->hasOne(Review::class);
    }

}
