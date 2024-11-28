import React, { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider,Outlet } from 'react-router-dom';
import Navbar from "./components/modules/Navbar";
import NavLayout from "./components/layouts/NavLayout";
import Loading from '../src/components/shared/Loading'

const Bookings = lazy(() => import("./pages/Bookings"));
const Designations = lazy(() => import("./pages/Designations"));
const Flights = lazy(() => import("./pages/Flights"));
const Hotels = lazy(() => import("./pages/Hotels"));
const Landing = lazy(() => import("./pages/Landing"));

const router = createBrowserRouter([
    {
      path: "/",
      element:<> <NavLayout><Navbar /></NavLayout><Outlet/></> ,
      children: [
        { path: "/", element: <Suspense fallback={<Loading/>}><Landing /></Suspense> },
        { path: "/bookings", element: <Suspense fallback={<Loading/>}><Bookings /></Suspense> },
        { path: "/flights", element: <Suspense fallback={<Loading/>}><Flights /></Suspense> },
        { path: "/designations", element: <Suspense fallback={<Loading/>}><Designations /></Suspense> },
        { path: "/hotels", element: <Suspense fallback={<Loading/>}><Hotels /></Suspense> },
      ],
    },
]);


const Router = () => <RouterProvider router={router} />;

export default Router;
