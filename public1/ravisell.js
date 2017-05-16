var app = angular.module('Ravi_location', ['ngRoute','ngResource']).run(function($rootScope,$http) {
  
  });



app.config(function($routeProvider){
  $routeProvider
    //the timeline display
    .when('/host', {
      templateUrl: 'host.html',
      controller: 'hostController'
    })
    //the login display
    .when('/scorecard', {
      templateUrl: 'login.html',
      controller: 'authCh-ontroller'
    })
    //the signup display
    .when('/register', {
      templateUrl: 'register.html',
      controller: 'authController'
    });
});

app.factory('postService', function($resource){
  return $resource('/api/posts/:id');
});

app.controller('hostController',function($scope,$http){
   $scope.partylocations =[];
  var employeesadd =[];
  var loca = {};
  $scope.getit = function(){
  $scope.employees={};
  $http.get("/location_data/loca")
                 .then(function (response) {
                  console.log("Response is ");
                console.log(response.data.length);
                 $scope.employees={};
                  for(var i = 0;i<response.data.length;i++){
                loca ={};
                loca.time = response.data[i].time;    //should be changed to ObjectId, ref "User"
                loca.contact_name = response.data[i].contact_name; 
                loca.party_address = response.data[i].party_address; 
                loca.location = response.data[i].location; 
                loca.google_address = response.data[i].google_address;

                console.log("Location is ");
                console.log(loca);

                location_add.push(loca);
                      console.log("location_add is ");
                      console.log(location_add);
                  }
              

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

       /*   var employees = [

               
                {
                    name: "Sara", dateOfBirth: new Date("May 05, 1970"),
                    gender: "Female", salary: 68000
                },
                {
                    name: "Mark", dateOfBirth: new Date("August 15, 1974"),
                    gender: "Male", salary: 57000
                },
                {
                    name: "Pam", dateOfBirth: new Date("October 27, 1979"),
                    gender: "Female", salary: 53000
                },
                {
                    name: "Todd", dateOfBirth: new Date("December 30, 1983"),
                    gender: "Male", salary: 60000
                }
            ];*/





 
});



app.controller('authController', function($scope, $http, $rootScope, $location){
  $scope.user = {username: '', password: ''};
  $scope.error_message = '';
});