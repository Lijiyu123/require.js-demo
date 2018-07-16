require.config({
	//baseUrl:"js",
	paths: {
　　　　　　"jquery": "js/jquery2.0",
			"test":"js/test"
　　　　}
});
require(['jquery','test'],function($,math){//配置里jquery不要带数字,否则会报错
	$(function(){
		alert("123")
	})
	math.foo();
});