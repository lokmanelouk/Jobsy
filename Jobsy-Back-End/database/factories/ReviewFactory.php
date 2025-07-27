<?php

namespace Database\Factories;

use App\Models\Customer;
use App\Models\JobRequest;
use App\Models\Worker;
use Illuminate\Database\Eloquent\Factories\Factory;

class ReviewFactory extends Factory
{

    public function definition(): array
    {
        return [
        'customer_id' => Customer::where('role', 'customer')->inRandomOrder()->first()?->id ?? Customer::factory()->create(['role' => 'customer'])->id,
        'worker_id' => Worker::inRandomOrder()->first()?->id ?? Worker::factory()->create()->id,
        'job_request_id' => JobRequest::inRandomOrder()->first()?->id ?? JobRequest::factory()->create()->id,
            'rating' => rand(1, 5),
            'comment' => fake()->sentence(),
        ];
    }
}
