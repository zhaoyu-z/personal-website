// // import { Route, Routes } from 'react-router-dom';
// import {
//     createBrowserRouter,
//     RouterProvider,
//   } from "react-router-dom";
// import Home from '../pages/index';
// import Papers from '../pages/papers';

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <Home />,
//     },
//     {
//         path: "/papers",
//         element: <Papers />,
//     },
// ]);


// const Router = () => {
//     return (
//         // <Routes>
//         //   <Route path="/" Component={Home} />
//         //   <Route path="/about" Component={Papers} />
//         // </Routes>
//         <RouterProvider router={router} />
//     );
// };

// export default Router;


///////

// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Home from '../pages/index'; // Adjust the path based on your project structure
// import Papers from '../pages/papers'; // Adjust the path based on your project structure

// function MyApp() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/papers" element={<Papers />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default MyApp;

///////

import { Route, Routes } from 'react-router-dom';
import Home from '../pages/index'; // Adjust the path based on your project structure
import Papers from '../pages/papers'; // Adjust the path based on your project structure
import { useEffect } from 'react';

function Router() {
    useEffect(() => {
        // This will ensure the component is only executed on the client-side
        // The BrowserRouter is used here, which requires the document object.
        // It won't run on the server-side during rendering.
        const { BrowserRouter } = require('react-router-dom');
        const { render } = require('react-dom');

        render(
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/papers" element={<Papers />} />
            </Routes>
            </BrowserRouter>,
            document.getElementById('root') // Make sure 'root' corresponds to your HTML element ID
        );
    }, []);

    // Placeholder for server-side rendering (optional)
    return null;
}

export default Router;