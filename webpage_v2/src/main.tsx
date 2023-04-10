import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from "react-redux";
import store from "./utils/store";
import { createHashRouter, RouterProvider } from 'react-router-dom';

import LOADING_SCREEN from './components/LOADING_SCREEN';

import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
// import Nintendo from './pages/Nintendo';
// import Capcom from "./pages/Capcom";
// import Events from "./pages/Events";
// import Sega from "./pages/Sega";
// import BandaiNamco from './pages/BandaiNamco';
// import Games from './pages/Games';
// import KoeiTecmo from './pages/KoeiTecmo';
// import SquareEnix from './pages/SquareEnix';

const LazyNintendo = React.lazy(() => import("./pages/Nintendo"));
const LazyCapcom = React.lazy(() => import("./pages/Capcom"));
const LazySega = React.lazy(() => import("./pages/Sega"));
const LazyBandaiNamco = React.lazy(() => import("./pages/BandaiNamco"));
const LazyKoeiTecmo = React.lazy(() => import("./pages/KoeiTecmo"));
const LazySquareEnix = React.lazy(() => import("./pages/SquareEnix"));
const LazyEvents = React.lazy(() => import("./pages/Events"));
const LazyGames = React.lazy(() => import("./pages/Games"));


const router = createHashRouter([
  {
    // UI layout
    element: <App />,
    // routing elements, i.e. the pages
    children: [
      {path:"/", element:<Home />},
      // {path:"/nintendo", element:<Nintendo />},
      {path:"/nintendo", element:<LazyNintendo />},
      // {path:"/capcom", element:<Capcom />},
      {path:"/capcom", element:<LazyCapcom />},
      // {path:"/sega", element:<Sega />},
      {path:"/sega", element:<LazySega />},
      // {path:"/bandai-namco", element:<BandaiNamco />},
      {path:"/bandai-namco", element:<LazyBandaiNamco />},
      // {path:"/koei-tecmo", element:<KoeiTecmo />},
      {path:"/koei-tecmo", element:<LazyKoeiTecmo />},
      // {path:"/square-enix", element:<SquareEnix />},
      {path:"/square-enix", element:<LazySquareEnix />},
      // {path:"/events", element:<Events />},
      {path:"/events", element:<LazyEvents />},
      // {path:"/games", element:<Games />},
      {path:"/games", element:<LazyGames />},
      {path:"*", element:<NoMatch />},

    ]

  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <React.StrictMode>
      <Suspense fallback={<LOADING_SCREEN />}>
        <RouterProvider router={router} fallbackElement={<LOADING_SCREEN />} />
      </Suspense>
    </React.StrictMode>
  </Provider>
)
