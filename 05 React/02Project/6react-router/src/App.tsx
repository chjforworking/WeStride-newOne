import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import SearchPage from "./pages/search/SearchPage";
import { searchLoader } from "./pages/search/searchLoader";

const $router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/search", //เมื่อมี path /search แล้ว ข้อมูลตรง loader ก็จะถูกส่งไปที่ <SearchPage/>
        element: <SearchPage />, //แล้ว <SearchPage/> ก็จะเอาข้อมูลจาก loader ไปใช้งาน
        loader: searchLoader,
      },
      {
        path: "/packages/:name",
        element: <DetailsPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={$router} />;
}

export default App;
