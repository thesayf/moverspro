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

.when('/addaddresses', {
    templateUrl: 'pages/addaddresses.html',
    controller: 'appController'
    
})

.when('/inventorybook', {
    templateUrl: 'pages/inventorybook.html',
    controller: 'appController'
    
})

.when('/profilepage', {
    templateUrl: 'pages/profilepage.html',
    controller: 'appController'
    
})

.when('/savedquotespage', {
    templateUrl: 'pages/savedquotespage.html',
    controller: 'appController'
    
})

.when('/upcomingjobspage', {
    templateUrl: 'pages/upcomingjobspage.html',
    controller: 'appController'
    
})

.when('/completedjobspage', {
    templateUrl: 'pages/completedjobspage.html',
    controller: 'appController'
    
})

.when('/viewallmessages', {
    templateUrl: 'pages/viewallmessages.html',
    controller: 'appController'
    
})

.when('/paymentdetails', {
    templateUrl: 'pages/paymentdetails.html',
    controller: 'appController'
    
})

});