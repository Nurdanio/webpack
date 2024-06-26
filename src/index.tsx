import ReactDOM from 'react-dom/client';
import { Test } from "./test";
import { RouterProvider, createBrowserRouter} from "react-router-dom";

import { One } from "./one/one"
import { Two } from "./two/two"
import { Suspense } from 'react';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Test />,
        errorElement: <div>ERROR</div>,
        children: [
            {
                path: "/one",
                element: <Suspense fallback={"loading..."}><One /></Suspense>,
            },
            {
                path: "/two",
                element: <Suspense fallback={"loading..."}><Two /></Suspense>,
            }
        ],
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
);