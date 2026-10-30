<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Stack: plain Vite + React SPA with React Router (no SSR, no server functions). Routes are declared in src/router.tsx; pages live in src/pages/. `vite build` emits a static site to dist/, and vercel.json rewrites every path to index.html so deep links resolve client-side.
- Auth: sign-in lives at /auth, sign-up at /signup; signed-in pages go under the `<RequireAuth />` route in src/router.tsx (client-only gate). Why: one consistent auth gate.
