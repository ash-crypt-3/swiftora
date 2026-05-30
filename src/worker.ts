import worker from "@tanstack/react-start/server-entry";

const ORIGIN = "https://178.162.235.197";

export default {
  async fetch(request: Request, env: any, ctx: any) {
    const url = new URL(request.url);

    // Forward all WordPress paths directly to cPanel origin
    if (
      url.pathname.startsWith("/wp-json") ||
      url.pathname.startsWith("/wp-admin") ||
      url.pathname.startsWith("/wp-login") ||
      url.pathname.startsWith("/wp-content") ||
      url.pathname.startsWith("/wp-includes") ||
      url.pathname.startsWith("/wp-cron") ||
      url.pathname.startsWith("/xmlrpc.php")
    ) {
      const originUrl = new URL(request.url);
      originUrl.hostname = "178.162.235.197";

      const originRequest = new Request(originUrl.toString(), {
        method: request.method,
        headers: {
          ...Object.fromEntries(request.headers),
          "Host": "swiftoraconsulting.co.ke",
          "X-Forwarded-For": request.headers.get("CF-Connecting-IP") || "",
        },
        body: request.method !== "GET" && request.method !== "HEAD" ? request.body : null,
        redirect: "follow",
      });

      return fetch(originRequest);
    }

    // All other requests handled by TanStack Start
    return worker.fetch(request, env, ctx);
  },
};