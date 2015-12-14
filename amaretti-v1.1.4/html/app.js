var moverspro = angular.module('moverspro', ['ngRoute']);

moverspro.config(function ($routeProvider) {


$routeProvider

.when('/', {
    templateUrl: 'pages/main.html',
    controller: 'appController'
    
})
        
.when('/recurring', {
    templateUrl: 'pages/recurring.html',
    controller: 'appController'
    
})

.when('/instantlog', {
    templateUrl: 'pages/instantlog.html',
    controller: 'appController'
    
})

.when('/projectpage', {
    templateUrl: 'pages/projectpage.html',
    controller: 'appController'
    
})

.when('/projectjobpage', {
    templateUrl: 'pages/projectjobpage.html',
    controller: 'appController'
    
})

.when('/scheduledbooking', {
    templateUrl: 'pages/scheduledbooking.html',
    controller: 'appController'
    
})

.when('/addressbook', {
    templateUrl: 'pages/addressbook.html',
    controller: 'appController'
    
})

});