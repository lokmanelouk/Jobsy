<?php

namespace Database\Factories;

use App\Models\Customer;
use App\Models\Worker;
use Illuminate\Database\Eloquent\Factories\Factory;


class JobRequestFactory extends Factory
{

    public function definition(): array
    {
        return [
            'customer_id' => Customer::where('role', 'customer')->inRandomOrder()->first()?->id ?? Customer::factory()->create(['role' => 'customer'])->id,
            'worker_id' => Worker::inRandomOrder()->first()?->id ?? Worker::factory()->create()->id,
            'title' => $this->faker->jobTitle,
            'description' => $this->faker->paragraph,
            'status' => $this->faker->randomElement(['pending', 'accepted', 'completed', 'cancelled']),
            'address' => $this->faker->address,
            'requested_date' => $this->faker->dateTimeBetween('now', '+1 month'),
        ];
    }
}
