<?php

namespace Database\Seeders;

use App\Models\JobRequest;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class JobRequestSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        JobRequest::factory()->count(20)->create();
    }
}
