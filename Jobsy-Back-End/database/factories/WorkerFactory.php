<?php

namespace Database\Factories;

use App\Models\Customer;
use App\Models\ServiceCategory;
use Illuminate\Database\Eloquent\Factories\Factory;


class WorkerFactory extends Factory
{

    public function definition(): array
    {
        return [
            'customer_id' => Customer::where('role', 'worker')->inRandomOrder()->first()?->id ?? Customer::factory()->create(['role' => 'worker'])->id,
            'category_id' => ServiceCategory::inRandomOrder()->first()?->id ?? ServiceCategory::factory()->create()->id,
            'bio' => $this->faker->sentence,
        ];
    }
}
