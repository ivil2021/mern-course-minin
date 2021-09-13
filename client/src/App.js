import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useRoutes } from './routes';
import 'materialize-css';

console.log('123');

function App() {
    console.log('456');

    const routes = useRoutes(false);
    console.log('789');
    console.log(routes);
    return (
        <Router>
            <div className="container">{routes}</div>
        </Router>
    );
}

export default App;
