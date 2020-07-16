<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name')->nullable();
            $table->string('model')->nullable();
            $table->string('barcode')->nullable();
            $table->string('slug')->nullable();
            $table->string('image')->nullable();
            $table->string('galary')->nullable();
            $table->string('price')->nullable();
            $table->string('origin')->nullable();
            $table->string('brand')->nullable();
            $table->string('manufacturer')->nullable();
            $table->string('manufucture_date')->nullable();
            $table->string('expiry_date')->nullable();
            $table->string('category id')->nullable();
            $table->string('color')->nullable();
            $table->string('size')->nullable();
            $table->string('width')->nullable();
            $table->string('height')->nullable();
            $table->string('length')->nullable();
            $table->string('weight')->nullable();
            $table->string('measurement class')->nullable();
            $table->string('sku')->nullable();
            $table->string('minimum sale')->nullable();
            $table->string('taxclass')->nullable();
            $table->string('available quantity')->nullable();
            $table->string('substuct stock')->nullable();
            $table->string('shipping')->nullable();
            $table->string('out of stock')->nullable();
            $table->string('date available')->nullable();
            $table->string('sort')->nullable();
            $table->string('status')->nullable();
            $table->string('authorized by')->nullable();
            $table->string('description')->nullable();
            $table->string('meta tag title')->nullable();
            $table->string('Meta Tag Keywords')->nullable();
            $table->string('Product Tags')->nullable();
            $table->string('meta tag description')->nullable();
            $table->string('store')->nullable();
            $table->string('related product')->nullable();
            $table->string('depended product')->nullable();
            $table->string('discount')->nullable();
            $table->string('point to buy')->nullable();
            $table->string('returnable')->nullable();
            $table->string('point against sale')->nullable();
            
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
        Schema::dropIfExists('products');
    }
}
