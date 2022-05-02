# API

*	JavaScript can send network requests to the server and load new information whenever it’s needed.

*	we can use a network request to:
Submit an order,
Load user information,
Receive latest updates from the server,
…etc.

*	And all of that without reloading the page!

*	There’s an umbrella term “AJAX” (abbreviated Asynchronous JavaScript And XML) for network requests from JavaScript. We don’t have to use XML though: the term comes from old times, that’s why that word is there. You may have heard that term already.

*	There are multiple ways to send a network request and get information from the server.

*	The fetch() method is modern and versatile, so we’ll start with it. It’s not supported by old browsers (can be polyfilled), but very well supported among the modern ones.

*	ok – boolean, true if the HTTP status code is 200-299.

*	Second, to get the response body, we need to use an additional method call.

*	response.json() – parse the response as JSON,

