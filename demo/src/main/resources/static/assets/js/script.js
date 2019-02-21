
function confirmAlert(message, url) {
    if (confirm(message)) {
        window.location.href = url;
	}
}

function addSomethingToTheme(id) {
    if(document.getElementById('exampleRadios1').checked)  {
        window.location.href = "/addQuoteToTheme" + id;
    } else {
        window.location.href = "/addTextToTheme" + id;
    }
}