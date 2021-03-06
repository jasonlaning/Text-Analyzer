function makeWords (str) {
	return str.toLowerCase().split(/[^a-z']+/).filter(Boolean);
}

function totalWords(words) {
	$('.js-word-count').text(words.length);
}

function uniqueWords(words) {
	var uniqueList = [];
	for (var i = 0; i<words.length; i++) {
		if (($.inArray(words[i], uniqueList)) === -1) {
			uniqueList.push(words[i]);
		}
	}
	$('.js-unique-words').text(uniqueList.length);
}

function averageWordLength(words) {
	var total = 0;
	for (var i = 0; i<words.length; i++) {
		total += words[i].length;
	}
	var num = (total / words.length).toFixed(2);
	$('.js-average-length').text(num + ' characters');
}

$(function countAllTheThings() {
	$('.js-text').submit(function(event) {
		event.preventDefault();
		$('.text-report').removeClass('hidden');
		var words = makeWords($(this).find('textarea').val());
		console.log(words); // REMOVE LATER
		totalWords(words);
		uniqueWords(words);
		averageWordLength(words);
	});
});