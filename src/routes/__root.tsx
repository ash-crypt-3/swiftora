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
      { title: "Swiftora Consulting — Get Ahead For Good" },
      { name: "description", content: "Swiftora Consulting Limited is a Kenyan business strategy firm helping founders and executives strategise, optimise and realise lasting growth." },
      { name: "author", content: "Swiftora Consulting Limited" },
      { property: "og:title", content: "Swiftora Consulting — Get Ahead For Good" },
      { property: "og:description", content: "Swiftora Consulting Limited is a Kenyan business strategy firm helping founders and executives strategise, optimise and realise lasting growth." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Swiftora Consulting — Get Ahead For Good" },
      { name: "twitter:description", content: "Swiftora Consulting Limited is a Kenyan business strategy firm helping founders and executives strategise, optimise and realise lasting growth." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/75e01f9d-92ed-42cb-9cf7-acc992b262c9/id-preview-a328ef7d--08442f34-24b8-4984-9869-727eeb56a62f.lovable.app-1777692819297.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/75e01f9d-92ed-42cb-9cf7-acc992b262c9/id-preview-a328ef7d--08442f34-24b8-4984-9869-727eeb56a62f.lovable.app-1777692819297.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFound,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
