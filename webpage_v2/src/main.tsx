import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from "react-redux";
import store from "./utils/store";

import { createHashRouter, RouterProvider } from 'react-router-dom';

import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Nintendo from './pages/Nintendo';
import Capcom from "./pages/Capcom";
import Events from "./pages/Events";
import Sega from "./pages/Sega";
import BandaiNamco from './pages/BandaiNamco';
import Games from './pages/Games';
import KoeiTecmo from './pages/KoeiTecmo';
import SquareEnix from './pages/SquareEnix';

const router = createHashRouter([
  {
    // UI layout
    element: <App />,
    // routing elements, i.e. the pages
    children: [
      {path:"/", element:<Home />},
      {path:"/nintendo", element:<Nintendo />},
      {path:"/capcom", element:<Capcom />},
      {path:"/sega", element:<Sega />},
      {path:"/bandai-namco", element:<BandaiNamco />},
      {path:"/koei-tecmo", element:<KoeiTecmo />},
      {path:"/square-enix", element:<SquareEnix />},
      {path:"/events", element:<Events />},
      {path:"/games", element:<Games />},
      {path:"*", element:<NoMatch />},
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
)
