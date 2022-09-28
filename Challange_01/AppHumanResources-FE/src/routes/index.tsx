import { Suspense, lazy, ElementType, useContext } from "react";
import { useRoutes, Navigate } from "react-router-dom";

const Loadable = (Component: ElementType) => (props: any) => {
  return (
    <Suspense>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "/",
      children: [
        { element: <Navigate to="/home" replace />, index: true },
        {
          path: "home",
          children: [
            {
              element: <Navigate to="/home/initial" replace />,
              index: true,
            },
            { path: "initial", element: <Home /> },
          ],
        },
      ],
    },
  ]);
}

// Main
const Home = Loadable(lazy(() => import("../pages/human-resource/Initial")));
