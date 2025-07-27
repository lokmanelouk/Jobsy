<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    function index(){
        $users = [
            ['id'=>1,'name'=>"ahmed"],
            ['id'=>2,'name'=>"mohammed"],
            ['id'=>3,'name'=>"lokmane"],
        ];

        return response()->json($users);
    }

    public function CheckUser(int $id)
    {

        if ($id>10){
            return response()->json(['message'=>'acces denied'],200);
        }else{
            return response()->json("welcome , you are number {$id}");
        }
        
    }

}
