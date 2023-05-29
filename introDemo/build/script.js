var rootElement = document.getElementById('root');

// let reactElement = React.createElement(
//     'header', 
//     { className: 'site-header'},
//     React.createElement('h1', { id: 'main-heading'}, 'Hello REact'),
//     React.createElement('h2', {}, 'The best framework'),
//     );

var reactElement = React.createElement(
    'header',
    null,
    React.createElement(
        'h1',
        null,
        'Hello JSX'
    ),
    React.createElement(
        'h2',
        null,
        'Something something'
    ),
    React.createElement(
        'p',
        null,
        'lorem20'
    ),
    React.createElement(
        'footer',
        null,
        '123'
    )
);

ReactDOM.render(reactElement, rootElement);