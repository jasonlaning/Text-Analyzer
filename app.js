// need to fix makeWords to remove punctuation

function makeWords (str) {
	return str.split(" ");
}

function totalWords(words) {
	$('.js-word-count').text(words.length);
}

function uniqueWords(words) {
	var uniqueList = [];
	for (var i = 0; i<words.length; i++) {
		console.log($.inArray(words[i], uniqueList))
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
	$('.js-average-length').text(total / words.length + ' characters');
}

$(function() {
	$('.js-text').submit(function(event) {
		event.preventDefault();
		$('.text-report').removeClass('hidden');
		var words = makeWords($(this).find('textarea').val());
		totalWords(words);
		uniqueWords(words);
		averageWordLength(words);
	});
});