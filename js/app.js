
var app = angular.module('chkbk', []);


app.controller('CategoryCtrl', function ($scope){
    $scope.categories = [
        {
            "catid": 1,
            "name": "Grocery",
            "color": "#ff0000"
        },
        {
            "catid": 2,
            "name": "Gas",
            "color": "#444444"
        }
    ];

    $scope.addCat = function(new_cat){
        console.log(new_cat);
        $scope.categories.push(new_cat);
        $scope.new_cat = null;
    }
    $scope.deleteCat = function(index){
        if(confirm("Are you sure you want to delete category " + $scope.categories[index].name + "?")){
            //console.log(index);
            $scope.categories.splice(index, 1);
        }
    }
});

app.controller('EntryCtrl', function ($scope) {
  
  $scope.entries = [
    {
        "id": 1,
        "image": "",
        "check_id": "null",
        "date": "2/11/1979",
        "note": "Chris",
        "type": 0,
        "amount": 21.53,
        "balance": 100.21,
        "category": ""
    },
    {
        "id": 2,
        "image": "none",
        "check_id": "null",
        "date": "2/12/1979",
        "note": "Kroger",
        "type": 0,
        "amount": 12.99,
        "balance": 87.22,
        "category": "Grocery"
    },
    {
        "id": 3,
        "image": "",
        "check_id": "null",
        "date": "2/13/1979",
        "note": "Shell",
        "type": 0,
        "amount": 21.53,
        "balance": 65.69,
        "category": "Gas"
    },
    {
        "id": 4,
        "image": "none",
        "check_id": "null",
        "date": "2/13/1979",
        "note": "From paypal",
        "type": 1,
        "amount": 31,
        "balance": 62.59,
        "category": ""
    }
  ];

  $scope.addEntry = function(entry){
    console.log(entry);
    var prev_balance = $scope.entries[$scope.entries.length-1].balance;
    if(entry.type == 1){
        entry.balance = parseFloat(entry.amount) + parseFloat(prev_balance);
    }
    else{
        entry.balance = parseFloat(prev_balance) - parseFloat(entry.amount);
    }
    $scope.entries.push(entry);
    $scope.entry = [];
    $scope.running_balance = entry.balance;
  }


  $scope.running_balance = $scope.entries[$scope.entries.length-1].balance;



});