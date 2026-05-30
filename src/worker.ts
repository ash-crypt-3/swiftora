import worker from "@tanstack/react-start/server-entry";

export default {
  async fetch(request: Request, env: any, ctx: any) {
    const url = new URL(request.url);

    // Bypass Worker for all WordPress paths — send straight to origin
    if (
      url.pathname.startsWith("/wp-json") ||
      url.pathname.startsWith("/wp-admin") ||
      url.pathname.startsWith("/wp-login") ||
      url.pathname.startsWith("/wp-content") ||
      url.pathname.startsWith("/wp-includes") ||
      url.pathname.startsWith("/wp-cron")
    ) {
      return fetch(request);
    }

    // All other requests handled by TanStack Start
    return worker.fetch(request, env, ctx);
  },
};