<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Worker extends Model
{

    use HasFactory;
    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }

    
    public function category()
    {
        return $this->belongsTo(ServiceCategory::class, 'category_id');
    }

    
    public function jobRequests()
    {
        return $this->hasMany(JobRequest::class);
    }


    public function reviews()
    {
        return $this->hasMany(Review::class);
    }
}
