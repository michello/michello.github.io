
var waveMargin = parseInt($('.shapeWave').css('margin-left'));
var width = $(document).width() * 3;
var wave_width = $('.shapeWave').width();
var numWaves = Math.round(width/wave_width);

var wave = $('.shapeWave').clone();
for (var i = 1; i < numWaves; i++) {
	let margin = waveMargin + i*5;
	margin = margin + "em";
	var wave = $('.shapeWave').first().clone()
	wave.css('margin-left', margin)
	$(".wave").append(wave);
}

var ship = $('#ship');
var contentMargin = parseInt($('#content').css('margin-left'));
var shipWidth = parseInt($('#ship').width());

var shipMargin = shipWidth - 2.8*contentMargin;
shipMargin = shipMargin + "px";
ship.css('margin-left', shipMargin);
numWaves = Math.round(shipWidth/wave_width) + 2;
var wave = $('.shapeWave').first().clone();

for (var i = 1; i < numWaves; i++) {
	let margin = waveMargin + i*4;
	margin = margin + "em";
	var wave = $('.shapeWave').first().clone()
	wave.css('margin-left', margin);
	wave.css('z-index', 2);
	wave.css('background-color', '#7eb7d6');
	$("#seaOverlap").append(wave);
}
