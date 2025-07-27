<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        $this->call([
            ServiceCategorySeeder::class,
            CustomerSeeder::class,
            WorkerSeeder::class,
            JobRequestSeeder::class,
            MessageSeeder::class,
            ReviewSeeder::class
        ]);
    }
}
