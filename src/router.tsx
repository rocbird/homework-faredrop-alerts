import { createBrowserRouter, type RouteObject } from "react-router";

import { RootLayout, RootErrorBoundary, NotFoundPage } from "@/components/RootLayout";
import { RequireAuth } from "@/components/RequireAuth";
import { IndexPage } from "@/pages/IndexPage";
import { SignInPage } from "@/pages/SignInPage";
import { SignUpPage } from "@/pages/SignUpPage";
import { AppPage } from "@/pages/AppPage";

// Client-side routes. Vercel rewrites every non-file path to index.html
// (see vercel.json), so deep links like /app resolve here in the browser.
export const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <RootErrorBoundary />,
    children: [
      { index: true, element: <IndexPage /> },
      { path: "auth", element: <SignInPage /> },
      { path: "signup", element: <SignUpPage /> },
      {
        // Signed-in pages live under this client-only auth gate.
        element: <RequireAuth />,
        children: [{ path: "app", element: <AppPage /> }],
      },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
