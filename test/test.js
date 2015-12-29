'use strict';

// MODULES //

var test = require( 'tape' );
var proxyquire = require( 'proxyquire' );
var detect = require( './../lib' );


// TESTS //

test( 'main export is a function', function test( t ) {
	t.ok( typeof detect === 'function', 'main export is a function' );
	t.end();
});

test( 'feature detection result is a boolean', function test( t ) {
	t.ok( typeof detect() === 'boolean', 'detection result is a boolean' );
	t.end();
});

test( 'if `class` is supported, detection result is `true`', function test( t ) {
	var detect = proxyquire( './../lib', {
		'utils-eval': stub
	});

	t.ok( detect(), 'detection result is `true`' );
	t.end();

	function stub() {
		return 'beep';
	}
});

test( 'if `class` is not supported, detection result is `false`', function test( t ) {
	var detect = proxyquire( './../lib', {
		'utils-eval': stub
	});

	t.notOk( detect(), 'detection result is `false`' );
	t.end();

	function stub() {
		throw new Error( 'boop' );
	}
});
