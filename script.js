$( main );

function main() {
	$("input#search").keyup(searchChanged);
}

function searchChanged(event) {
	var searchTerm = $(this).val();
	var articles = $("article");
	var i;
	var article;

	articles.removeClass("match");

	for (i = 0; i < articles.length; i++) {
		article = $(articles[i]);
		text = article.text();
		if (text.includes(searchTerm)) {
			article.addClass("match");
		}
	}
}
