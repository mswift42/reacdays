/** @jsx React.DOM */
'use strict';

require.config({
	baseUrl: 'scripts',
	paths: {
		react: 'script/react.min'
	},
	shim: {
		react: {
			exports: 'React'
		}
	}
});

require(['app'], function (App) {
	// use app here
	React.renderComponent(
		<App />,
		document.getElementById('app')
	);
});

require(['app2'], function (App) {
    React.renderComponent(
        <App  />,
        document.getElementById('app2')
        );
});

require(['newtask'], function (App) {
    React.renderComponent(
        <App />,
        document.getElementById('newtaskform')
        );
    });

// require['app2'], function(App2) {
//     React.renderComponent(
//         <App2 />,
//         document.getElementById('app2')
//         );
//     });
