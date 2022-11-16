let app = new angular.module('Money', ['ngRoute']);

app.run(function($rootScope){
    $rootScope.title = 'Money Manager'  

$rootScope.links = [
    {
        name:'Egyenleg',
        url:'/egyenleg'
    },
    {
        name:'+ / -',
        url:'/pluszminusz'
    },
    {
        name:'Kiadasok / bevételek',
        url:'kiadbevesz'
    },
    {
    name: 'Grafikon',
    url: '/graf'
    }
    ];  

    $rootScope.felhasznalo = [{
        name: "admin",
        passwd: "admin"
    }
    ]

});


app.config(function($routeProvider) {
    $routeProvider
        .when('/egyenleg', {
            templateUrl: 'egyenleg.html',
            controller: 'egyenlegCtrl'
    })
        .when('/pluszminusz', {
            templateUrl: 'pluszminusz.html',
            controller: 'pluszminuszCtrl'
    })
        .when('/kiadbevesz', {
            templateUrl: 'kiadbevesz.html',
            controller: 'kiadbeveszCtrl'
    })
        .when('/graf', {
            templateUrl: 'grafikon.html',
            controller: 'grafCtrl'
    })
        .otherwise('index.html')
});

function Regisztracio(){
    let regemail = document.querySelector('#regemail').value;
    let regnev = document.querySelector('#regnev').value;
    let regjelszo = document.querySelector('#regjelszo').value;
    let regjelszo2 = document.querySelector('#regjelszo2').value;
    
    if(regnev != "" && regjelszo != "" && regemail != "" && regjelszo2 != ""){
        if(regjelszo == regjelszo2)
        {
            const felhasznalo  = {
                email: regemail,
                name: regnev,
                passwd: regjelszo,
                bevetel: 0,
                kiadas: 0
            }
            window.localStorage.setItem('user', JSON.stringify(felhasznalo));
            console.log(felhasznalo);
    
            alert("Sikeres regisztráció")
            window.open('/index.html','_self');
            
        }
        else{
            alert("Nem egyezik a két jelszó")
        }
    }
    else{
        alert("Nem adtál meg minden adatot");
    }
    }
    
    function Register(){
        open('views/regisztracio.html', '_self');
    }

function Belepes(){   
    
let nev = document.getElementById('nev').value;
let passwd = document.getElementById('passwd').value;

if(nev == $rootScope.felhasznalo.nev && passwd == $rootScope.felhasznalo.passwd){
    window.open('views/menu.html');
}
}


