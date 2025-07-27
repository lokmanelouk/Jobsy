<?php

namespace Database\Seeders;

use App\Models\Customer;
use App\Models\JobRequest;
use App\Models\Message;
use App\Models\Review;
use App\Models\ServiceCategory;
use App\Models\Worker;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CustomerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Customer::factory()->count(40)->create();
    }


}
