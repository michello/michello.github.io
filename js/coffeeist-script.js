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
  'Venezula': 8,
  'Thailand': 9,
  'CostaRica': 10,
  'Guatemala': 11,
  'Madagascar': 12,
  'DominicanRepublic': 13,
  'Honduras': 14,
  'Haiti': 15,
  "Côted'Ivoire": 16,
  'ElSalvador': 17,
  'Peru': 18,
  'Uganda': 19,
  'Others': 20
};

var importingCountries = {
  'EuropeanUnion': 0,
  'USA': 1,
  'Japan': 2,
  'RussianFederation': 3,
  'Canada': 4,
  'Algeria': 5,
  'SouthKorea': 6,
  'Australia': 7,
  'SaudiArabia': 8,
  'Turkey': 9,
  'Ukraine': 10,
  'Switzerland': 11,
  'Norway': 12,
  'Sudan': 13,
  'Argentina': 14,
  'Egypt': 15,
  'SouthAfrica': 16,
  'Morocco': 17,
  'Lebanon': 18,
  'Taiwan': 19,
  'Others': 20
};

var regionalPlaces = {
  'Africa': 0,
  'Asia&Oceania': 1,
  'CentralAmerica&Mexico': 2,
  'Europe': 3,
  'NorthAmerica': 4,
  'SouthAmerica': 5
};

var listOfexportCountries = ['Brazil','Indonesia','Ethiopia','Philippines','Mexico','Vietnam','India', 'Colombia', 'Venezula','Thailand'];
var listOfimportCountries = ['EuropeanUnion', 'USA', 'Japan', 'RussianFederation', 'Canada', 'Algeria', 'SouthKorea', 'Australia', 'SaudiArabia', 'Turkey', 'Ukraine', 'Switzerland', 'Norway', 'Sudan', 'Argentina', 'Egypt', 'SouthAfrica', 'Morocco', 'Lebanon',
'Taiwan','Others'];
var listOfregions = ['Africa', 'Asia&Oceania', 'CentralAmerica&Mexico', 'Europe', 'NorthAmerica', 'SouthAmerica'];


var json = $.getJSON( "js/coffeeConsumption.json", function( data ) {
  return(data);
});


$(function() {
  $('#filter').change(function(){
    populateSelect();
  });
});

function clearCanvas(){
  if (document.getElementById('coffee-cup') != null) {

    // clearing images
    $("#country-img").empty();
    $("#country-1-img").empty();
    $("#country-2-img").empty();

    // clearing text
    $("#percentage").empty();
    $("#percentage-1").empty();
    $("#percentage-2").empty();

  }
}

function populateSelect(){

  var filter = $('#filter').val();

  // clear all dropdowns
  $('#exportCountries').html('');
  $('#importCountries').html('');
  $('#country1').html('');
  $('#country2').html('');



  // creating dropdowns based on choice
  if (filter == 'exporting-countries') {
    clearCanvas();
    listOfexportCountries.forEach(function(country){
      $('#exportCountries').append('<option value = '+ country +'>'+country+'</option>'); // appending each country to new populated dropdown
    });

    // making sure dropdown we're looking at is visible & other dropdowns not
    $("#exportCountries").removeClass('invisible');
    $('#importCountries').addClass('invisible');
    $('#country1').addClass('invisible');
    $('#country2').addClass('invisible');
    $('#regions').addClass('invisible');

    // displaying all the info of the exported country
    $('#exportCountries').change(function(){
      var selCountry = $('#exportCountries').val(); // name of country you selected
      var coffeeConsump = json.responseJSON[0]["Exporting countries"][exportingCountries[selCountry]][selCountry]['2015/16'];
      var coffeeGrowthRatePerc = json.responseJSON[0]["Exporting countries"][exportingCountries[selCountry]][selCountry]['Growth Rate'];
      document.getElementById('percentage').innerHTML = selCountry + "'s coffee supply is growing at " + coffeeGrowthRatePerc;
      var canvasLocation = '#country-img'; // where we wanna draw info to
      addImage(coffeeConsump, canvasLocation);
    });
  }

  // if you are comparing importing countries
  if (filter == 'importing-countries') {
    clearCanvas();
    listOfimportCountries.forEach(function(country){
      $('#importCountries').append('<option value = '+ country +'>'+country+'</option>'); // appending each country to new populated dropdown
    });

    // making sure dropdown we're looking at is visible & other dropdowns not
    $("#importCountries").removeClass('invisible');
    $('#exportCountries').addClass('invisible');
    $('#country1').addClass('invisible');
    $('#country2').addClass('invisible');
    $('#regions').addClass('invisible');

    // displaying all the info of the exported country
    $('#importCountries').change(function(){
      var selCountry = $('#importCountries').val(); // name of country you selected

      var coffeeConsump = json.responseJSON[2]["Importing countries"][importingCountries[selCountry]][selCountry]['2015/16'];
      console.log(coffeeConsump);
      var coffeeGrowthRatePerc = json.responseJSON[2]["Importing countries"][importingCountries[selCountry]][selCountry]['Growth Rate'];
      document.getElementById('percentage').innerHTML = selCountry + "'s coffee supply is growing at " + coffeeGrowthRatePerc;
      var canvasLocation = '#country-img'; // where we wanna draw info to
      addImage(coffeeConsump, canvasLocation);
    });
  }

// overall regional
  if (filter == 'regional') {
    clearCanvas();
    listOfregions.forEach(function(country){
      $('#regions').append('<option value = '+ country +'>'+country+'</option>'); // appending each country to new populated dropdown
    });

    // making sure dropdown we're looking at is visible & other dropdowns not
    $('#regions').removeClass('invisible');
    $("#importCountries").addClass('invisible');
    $('#exportCountries').addClass('invisible');
    $('#country1').addClass('invisible');
    $('#country2').addClass('invisible');

    // displaying all the info of the exported country
    $('#regions').change(function(){
      var selRegion = $('#regions').val(); // name of country you selected

      var coffeeConsump = json.responseJSON[1]["World"][regionalPlaces[selRegion]][selRegion]['2015/16'];
      console.log(coffeeConsump);
      var coffeeGrowthRatePerc = json.responseJSON[1]["World"][regionalPlaces[selRegion]][selRegion]['Growth Rate'];
      document.getElementById('percentage').innerHTML = selRegion + "'s coffee supply is growing at " + coffeeGrowthRatePerc;
      var canvasLocation = '#country-img'; // where we wanna draw info to
      addImage(coffeeConsump, canvasLocation);
    });
  }


  // if you are comparing two countries
  if (filter == 'compare') {
    clearCanvas();

    listOfexportCountries.forEach(function(country){
      $('#country1').append('<option value = '+ country +'>'+country+'</option>'); // appending each country to new populated dropdown
      $('#country2').append('<option value = '+ country +'>'+country+'</option>');
    })


    // making sure dropdown we're looking at is visible & other dropdowns not
    $('#country1').removeClass('invisible');
    $('#country2').removeClass('invisible');
    $("#exportCountries").addClass('invisible');
    $('#importCountries').addClass('invisible');
    $('#regions').addClass('invisible');

    // displaying countries
    $('#country1').change(function(){
      $("#country-1-img").empty();
      var selCountry = $('#country1').val(); // name of country you selected
      var coffeeConsump1 = json.responseJSON[0]["Exporting countries"][exportingCountries[selCountry]][selCountry]['2015/16'];
      var coffeeGrowthRatePerc1 = json.responseJSON[0]["Exporting countries"][exportingCountries[selCountry]][selCountry]['Growth Rate'];
      document.getElementById('percentage-1').innerHTML = selCountry + "'s coffee supply is growing at " + coffeeGrowthRatePerc1;
      var img1Location = '#country-1-img';
      addImage(coffeeConsump1, img1Location);
    })

    $('#country2').change(function(){
      $("#country-2-img").empty();
      var selCountry = $('#country2').val(); // name of country you selected
      var coffeeConsump2 = json.responseJSON[0]["Exporting countries"][exportingCountries[selCountry]][selCountry]['2015/16'];
      var coffeeGrowthRatePerc2 = json.responseJSON[0]["Exporting countries"][exportingCountries[selCountry]][selCountry]['Growth Rate'];
      document.getElementById('percentage-2').innerHTML = selCountry + "'s coffee supply is growing at " + coffeeGrowthRatePerc2;
      var img2Location = '#country-2-img';
      addImage(coffeeConsump2, img2Location);
    })

  }
}

function show_image(src, imgLocation) {
    var img = new Image();
    img.id = "coffee-cup";
    img.src = src;
    $(imgLocation).append(img);
}

function addImage(numCoffee, imgLocation){

  numCoffee = Math.round(numCoffee/1000);
  for (var i=0; i < numCoffee; i++) {
    var src = "http://images.neopets.com/items/coffeandmarsh.gif";
    show_image(src, imgLocation);
  }

}
