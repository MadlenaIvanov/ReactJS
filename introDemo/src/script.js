let rootElement = document.getElementById('root');

// let reactElement = React.createElement(
//     'header', 
//     { className: 'site-header'},
//     React.createElement('h1', { id: 'main-heading'}, 'Hello REact'),
//     React.createElement('h2', {}, 'The best framework'),
//     );

let reactElement = <header>
    <h1>Hello JSX</h1>
    <h2>Something something</h2>

    <p>lorem20</p>
    <footer>123</footer>
</header>;

ReactDOM.render(reactElement, rootElement);

