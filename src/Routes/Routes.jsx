import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import SubhanAllah from "../Pages/Home/Shared/SubhanAllah";
import TinKul from "../Pages/Home/Shared/tinKul";
import SafeDuya from "../Pages/Home/Shared/SafeDuya";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/subhanAllah',
          element: <SubhanAllah></SubhanAllah>
        },
        {
          path: '/kul',
          element: <TinKul></TinKul>
        },
        {
          path: '/safeFromJahannam',
          element: <SafeDuya></SafeDuya>
        }
      ]
    },
  ]);