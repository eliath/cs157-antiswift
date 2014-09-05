// ==UserScript==
// @name 			cs157 Antiswift
// @namespace		http://eliasmartinezcohen.com/
// @include     	http://cs.brown.edu/courses/csci1570/*
// @require			http://code.jquery.com/jquery-latest.min.js
// @run-at			document-start
//
// @version    1.0
// 
// ==/UserScript==

// Cover up TSwift shit
$('html').css('background', '#242424');

// Bind some shortcuts ;)
$(document).keypress(function(event) {
	if (event.which >= 49 && event.which <= 54) //1
		window.location = $('#navigation li:nth-child('+ (event.which - 48) +') a').attr('href');
}).ready(function(event) {
	//Display shortcut numbers when DOM loads
	var styles = "font-size: .7em; vertical-align: super; margin-right: 5px;";
	$('#navigation li a').each(function(i) {
		$(this).prepend('<span style="'+ styles+'">' + (i+1) + '</span>');
	});
});
