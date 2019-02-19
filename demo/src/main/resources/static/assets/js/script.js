
function confirmAlert(message, url) {
    if (confirm(message)) {
        window.location.href = url;
	}
}