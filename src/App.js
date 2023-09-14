import logo from "./logo.svg";
import "./App.css";
import RatingCard from "./ratingCard";
import MassageCard from "./massageCard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RatingCard />,
  },
  {
    path: "/:id",
    element: <MassageCard />,
  },
]);

function App() {
  return (
    <div className="App">
      <main>
        <RouterProvider router={router} />
      </main>
    </div>
  );
}

export default App;
