import React from 'react';
import {BrowserRouter, Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";
import ByCategoryPage from "./Pages/ByCategoryPage.jsx";
import DetailsPage from "./Pages/DetailsPage.jsx";
const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" component={<HomePage/>} />
                    <Route path="/byCategory/:catagoryID" component={<ByCategoryPage/>} />
                    <Route path="/details/{}" component={<DetailsPage/>} />
                </Routes>
            </BrowserRouter>

        </div>
    );
};

export default App;