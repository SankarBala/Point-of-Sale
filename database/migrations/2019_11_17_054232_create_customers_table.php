<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCustomersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('customers', function (Blueprint $table) {
            
            $table->increments('id');
            $table->enum('greetings', ['Mr.', 'Mrs.', 'Miss.', 'Sir.', 'Dr.', ''])->default('');
            $table->string('firstname', 20)->nullable();
            $table->string('lastname', 20)->nullable();
            $table->string('email', 100)->nullable()->unique();
            $table->string('mobile', 15)->nullable()->unique();
            $table->string('phone', 15)->nullable();
            $table->bigInteger('balance')->default(0);
            $table->string('photo', 1000)->nullable();
            $table->string('house')->nullable();
            $table->string('road')->nullable();
            $table->string('village')->nullable();
            $table->string('postoffice')->nullable();
            $table->string('area')->nullable();
            $table->string('city')->nullable();
            $table->string('district')->nullable();
            $table->smallInteger('postalcode')->nullable();
            $table->string('address', 1000)->nullable();
            $table->timestamp('dob')->nullable();
            $table->timestamps();
            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('customers');
    }
}
