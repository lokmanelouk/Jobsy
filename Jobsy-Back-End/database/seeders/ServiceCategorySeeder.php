<?php

namespace Database\Seeders;

use App\Models\ServiceCategory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ServiceCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            ['name' => 'Carpenter', 'icon' => 'FaHammer'],
            ['name' => 'Blacksmith', 'icon' => 'GiAnvil'],
            ['name' => 'Electrician', 'icon' => 'FaBolt'],
            ['name' => 'Plumber', 'icon' => 'FaWrench'],
            ['name' => 'Mover', 'icon' => 'FaTruckMoving'],
            ['name' => 'Curtain Installer', 'icon' => 'FaWindowMaximize'],
            ['name' => 'Painter', 'icon' => 'FaPaintRoller'],
            ['name' => 'AC Technician', 'icon' => 'FaSnowflake'],
            ['name' => 'Mechanic', 'icon' => 'FaTools'],
            ['name' => 'Gardener', 'icon' => 'FaLeaf'],
        ];

        foreach ($categories as $category  ){
            ServiceCategory::create($category);
        }
    }
}
