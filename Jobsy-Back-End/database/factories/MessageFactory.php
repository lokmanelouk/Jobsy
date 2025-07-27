<?php

namespace Database\Factories;

use App\Models\Customer;
use App\Models\JobRequest;
use Illuminate\Database\Eloquent\Factories\Factory;

class MessageFactory extends Factory
{

    public function definition(): array
    {
        $sender = Customer::inRandomOrder()->first()?->id ?? Customer::factory()->create()->id;
        $receiver = Customer::where('id', '!=', $sender)->inRandomOrder()->first()?->id ?? Customer::factory()->create()->id;
        
        return [
            'sender_id' => $sender,
            'receiver_id' => $receiver,
            'job_request_id' => JobRequest::inRandomOrder()->first()?->id ?? JobRequest::factory()->create()->id,
            'content' => $this->faker->paragraph,
        ];
    }
}
