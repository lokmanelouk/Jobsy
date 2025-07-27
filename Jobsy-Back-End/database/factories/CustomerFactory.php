<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class CustomerFactory extends Factory
{

    public function definition(): array
    {
        return [
            'name' => $this->faker->name,
            'email' => $this->faker->unique()->safeEmail,
            'password' => bcrypt('password'),
            'profile_photo' => 'default.png',
            'role' => $this->faker->randomElement(['customer', 'worker', 'admin']),
        ];
    }
    
}
