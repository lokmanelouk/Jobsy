<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Message extends Model
{

    use HasFactory;

    public function sender()
    {
        return $this->belongsTo(Customer::class, 'sender_id');
    }


    public function receiver()
    {
        return $this->belongsTo(Customer::class, 'receiver_id');
    }

    public function jobRequest()
    {
        return $this->belongsTo(JobRequest::class);
    }

}
