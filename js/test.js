//define(function (){//不依赖其他模块
//
//　　　　function add(x,y){
//　　　　　　return x+y;
//　　　　};
//
//　　　　return {
//　　　　　　add: add
//　　　　};
//
//　　});

define(['jquery'], function($){//依赖其他模块

　　　　function foo(){
　　　　　　$("body").css("background","#007AF0")
　　　　}
　　　　return {
　　　　　　foo : foo
　　　　};
　　});