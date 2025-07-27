<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;

    public function getProfilePhotoUrlAttribute()
    {
        return asset('images/' . ($this->profile_photo ?? 'default.png'));
    }

    public function jobRequests()
    {
        return $this->hasMany(JobRequest::class);
    }

    public function sentMessages()
    {
        return $this->hasMany(Message::class, 'sender_id');
    }

    public function receivedMessages()
    {
        return $this->hasMany(Message::class, 'receiver_id');
    }

    public function reviews()
    {
        return $this->hasMany(Review::class);
    }

    protected $fillable = ['name', 'email', 'password', 'role'];

}
