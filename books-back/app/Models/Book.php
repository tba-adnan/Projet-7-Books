<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class Book extends Model
{
    use HasFactory;
    
    protected $table = 'users_books';
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
