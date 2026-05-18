import { Outlet, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Nav, Footer } from "../components/Layout";
import { FloatingActions } from "../components/FloatingActions";
import { NotFound } from "../components/NotFound";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Swiftora Consulting Limited: Championing Your Business Growth" },
      { name: "description", content: "Accelerate your business growth in Kenya with Swiftora Consulting. Expert strategy, sales, marketing & research solutions." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.cdnfonts.com" },
      { rel: "stylesheet", href: "https://fonts.cdnfonts.com/css/clan-pro" },
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFound,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <Nav />
      <main><Outlet /></main>
      <Footer />
      <FloatingActions />
    </>
  );
}