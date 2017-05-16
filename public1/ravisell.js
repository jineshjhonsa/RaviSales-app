var app = angular.module('Ravi_sell', ['ngRoute','ngResource']).run(function($rootScope,$http) {
  
  });



app.config(function($routeProvider){
  $routeProvider
    //the timeline display
    .when('/host', {
      templateUrl: 'host.html',
      controller: 'hostController'
    })
   
});

app.factory('postService', function($resource){
  return $resource('/api/posts/:id');
});

app.controller('hostController',function($scope,$http){
   $scope.employees =[];
  var employeesadd =[];
var employe = {};
 $scope.getit = function(){
  $scope.employees={};
     $http.get("/folder_data/folder")
                 .then(function (response) {
                  console.log("Response is ");
                console.log(response.data.length);
                 $scope.employees={};
                  for(var i = 0;i<response.data.length;i++){
                employe ={};
                employe.time = response.data[i].time;    //should be changed to ObjectId, ref "User"
                employe.contact_name = response.data[i].contact_name; 
                employe.party_address = response.data[i].party_address; 
                employe.party_number = response.data[i].party_number;
                employe.party_name = response.data[i].party_name;    //should be changed to ObjectId, ref "User"
                employe.party_comment = response.data[i].party_comment; 
                employe.day_closed = response.data[i].day_closed; 
                employe.total_folder = response.data[i].total_folder;
                employe.folder_name = response.data[i].folder_name; 
                employe.location = response.data[i].location; 
                employe.google_address = response.data[i].google_address;

                console.log("Employee is ");
                console.log(employe);

                employeesadd.push(employe);
                      console.log("employeesadd is ");
                      console.log(employeesadd);
                  }
                  console.log("employeesadd is ");
                  console.log(employeesadd);

                //  var total = employeesadd.concat(employees);
                  $scope.employees = employeesadd;
              
                 },function(error){
                  console.log("error is ");
                  console.log(error.data);
                 });
                

   };

   $scope.getit();

var senddata = { 
                  time: "Hi",   
  contact_name: "Hello",
  party_address: "is it what up",
  party_number:"I ok",
  party_name: "sdure",
  party_comment: "dholus bholi",
  day_closed:"Msokey",
  total_folder: "dcry",
  folder_name: "idtna",
  location:"didma",
  google_address:"vagddwdhar"

                  };

 $scope.putit = function(){
       $http.post("/folder_data/folder", senddata).success(function(data){
      if(data.state == 'success'){
        console.log(data);
      }
      else{
        $scope.error_message = data.message;
      }
    });
   };

       





 
});



app.controller('authController', function($scope, $http, $rootScope, $location){
  $scope.user = {username: '', password: ''};
  $scope.error_message = '';
});