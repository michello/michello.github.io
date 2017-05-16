// data stuff

var exportingCountries = {
  'Brazil': 0,
  'Indonesia': 1,
  'Ethiopia': 2,
  'Philippines': 3,
  'Mexico': 4,
  'Vietnam': 5,
  'India': 6,
  'Colombia': 7,
  'Venezuela': 8,
  'Thailand': 9,
  'Costa Rica': 10,
  'Guatemala': 11,
  'Madagascar': 12,
  'Dominican Republic': 13,
  'Honduras': 14,
  'Haiti': 15,
  "Côte d'Ivoire": 16,
  'El Salvador': 17,
  'Peru': 18,
  'Uganda': 19,
  'Others': 20
}

var listOfcountries = ['Brazil','Indonesia','Ethiopia','Philippines','Mexico','Vietnam','India'];

var json = (function () {
    var json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': 'js/exportingCountries.json',
        'dataType': "json",
        'success': function (data) {
            json = data;
        }
    });
    return json;
})();

function show_image(src) {
    var img = new Image();
    img.id = "coffee-cup";
    img.src = src;
    $('#canvas').append(img);
}

function addImage(numCoffee){
  if (document.getElementById('coffee-cup') != null) {
    $('#canvas').empty();
  }

  numCoffee = Math.round(numCoffee);

  for (var i=0; i < numCoffee; i++) {
    var src = "http://images.neopets.com/items/coffeandmarsh.gif";
    show_image(src);
  }

}

function populateSelect(){
  var filter = $('#filter').val();

  if (filter == 'exporting-countries') {
    var divId = "exportCountries";
    $('#'+divId).removeClass('invisible');
    creatingOptions(divId);
    console.log($('#'+divId).val());
    var numOfCoffee = 7;
    if ($('#'+divId).val() != 'default'){
      var numOfCoffee = json[0]["Exporting countries"][exportingCountries[$('#'+divId).val()]][$('#'+divId).val()]['2015/16']
      console.log(json[exportingCountries[$('#'+divId).val()]])
    }
     //exportingCountries[$('#'+divId).val()]
    // creating the images/visualization
    var numofCoffee = Math.round(json[0]["Exporting countries"][exportingCountries[$('#'+divId).val()]][$('#'+divId).val()]['2015/16']/1000);
    addImage(Math.round(numOfCoffee/1000));
  }

  if (filter == 'importing-countries') {
    var divId = "importCountries";
    $('#'+divId).removeClass('invisible');
    $('#exportCountries').addClass('invisible');
  }



}

function creatingOptions(id){ // generating the dropdown
    if ($('#'+id).length == 1) {
      console.log($('#'+id).length)
      $('#'+id).append('<option value = "default">Select Your Choice</option>');
      listOfcountries.forEach(function(t) {
          $('#'+id).append('<option>'+t+'</option>');
          console.log("creating dropdown")
      });
    };
}
