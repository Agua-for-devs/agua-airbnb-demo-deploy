import React from 'react';
import { Routes, Route } from 'react-router';
import Screen from '../pages/screen/screen';

function RoutingApp() {
    return (
        <Routes>
            <Route path="/" element={<Screen />} />
<Route path="/Screen" element={<Screen />} />

        </Routes>
    );

}

export default RoutingApp;