import React from 'react';
// import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useRoutes } from './routes';
import 'materialize-css';

function App() {
    const routes = useRoutes(false);
    return (
        <Router>
            <div className="container">{routes}</div>
        </Router>
    );
}

export default App;

// class App extends Component() {
//     render() {
//         const routes = useRoutes(false);
//         return (
//             <Router>
//                 <div className="container">{routes}</div>
//             </Router>
//         );
//     }
// }
