var app = angular.module("myApp", []);

app.controller('sortColumn', ['$scope', function($scope){
	var employees = [
			{employe_id: 96325, name:"Santosh", dob: new Date("November 04, 1991"), gender: "Male", salary: 20000},
			{employe_id: 96320, name:"Manish", dob: new Date("February 04, 1991"), gender: "Male", salary: 80000},
			{employe_id: 56828, name:"Bishal", dob: new Date("october 04, 1991"), gender: "Male", salary: 60000},
			{employe_id: 66528, name:"Gandhi", dob: new Date("January 04, 1991"), gender: "Male", salary: 50000},
			{employe_id: 96395, name:"Mandeva", dob: new Date("March 04, 1991"), gender: "Male", salary: 40000},
			{employe_id: 99307, name:"Mitali", dob: new Date("April 04, 1991"), gender: "Female", salary: 30000}
	]
	$scope.employees = employees;
	$scope.order_col = "name";
}])