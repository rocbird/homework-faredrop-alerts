import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

// Plain client-side SPA: `vite build` emits static files to dist/.
// Deep links (e.g. /app) are rewritten to index.html by vercel.json.
export default defineConfig({
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  build: {
    outDir: "dist",
  },
  optimizeDeps: {
    include: [
      "@supabase/supabase-js",
      "sonner",
      "@radix-ui/react-slot",
      "@radix-ui/react-label",
      "class-variance-authority",
      "clsx",
      "tailwind-merge",
      "lucide-react",
    ],
  },
});
