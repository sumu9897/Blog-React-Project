import React from 'react';
import {BrowserRouter, Routes} from "react-router-dom";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" component={<HomePage/>} />
                </Routes>
            </BrowserRouter>

        </div>
    );
};

export default App;