import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../App";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    // Puedes agregar más rutas aquí
    // {
    //   path: "/otra-ruta",
    //   element: <OtroComponente />,
    // },
]);

export default router