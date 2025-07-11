import { serve } from "https://deno.land/std@0.208.0/http/server.ts";
import { serveFile } from "https://deno.land/std@0.208.0/http/file_server.ts";

const PORT = 3020;

async function handler(req: Request): Promise<Response> {
  const url = new URL(req.url);
  const pathname = url.pathname;

  if (pathname === "/" || pathname === "/index.html") {
    try {
      return await serveFile(req, "./public/index.html");
    } catch {
      return new Response("Home page not found", { status: 404 });
    }
  }

  if (pathname === "/homebrewed-server") {
    try {
      return await serveFile(req, "./public/homebrewed-server/index.html");
    } catch {
      return new Response("Project not found", { status: 404 });
    }
  }

  if (pathname === "/mqtt-automation") {
    try {
      return await serveFile(req, "./public/mqtt-automation/index.html");
    } catch {
      return new Response("Project not found", { status: 404 });
    }
  }

  if (pathname === "/cv-website") {
    try {
      return await serveFile(req, "./public/cv-website/index.html");
    } catch {
      return new Response("Project not found", { status: 404 });
    }
  }

  if (pathname === "/university-projects") {
    try {
      return await serveFile(req, "./public/university-projects/index.html");
    } catch {
      return new Response("Project not found", { status: 404 });
    }
  }

  if (pathname === "/network-monitoring") {
    try {
      return await serveFile(req, "./public/network-monitoring/index.html");
    } catch {
      return new Response("Project not found", { status: 404 });
    }
  }

  if (pathname === "/cli-tools") {
    try {
      return await serveFile(req, "./public/cli-tools/index.html");
    } catch {
      return new Response("Project not found", { status: 404 });
    }
  }

  if (pathname === "/thoughts/deno-vs-nodejs") {
    try {
      return await serveFile(req, "./public/thoughts/deno-vs-nodejs/index.html");
    } catch {
      return new Response("Blog post not found", { status: 404 });
    }
  }

  if (pathname === "/thoughts/home-lab-guide") {
    try {
      return await serveFile(req, "./public/thoughts/home-lab-guide/index.html");
    } catch {
      return new Response("Blog post not found", { status: 404 });
    }
  }

  if (pathname === "/thoughts/c-javascript-integration") {
    try {
      return await serveFile(req, "./public/thoughts/c-javascript-integration/index.html");
    } catch {
      return new Response("Blog post not found", { status: 404 });
    }
  }

  if (pathname === "/thoughts/cli-first-development") {
    try {
      return await serveFile(req, "./public/thoughts/cli-first-development/index.html");
    } catch {
      return new Response("Blog post not found", { status: 404 });
    }
  }

  if (pathname.startsWith("/") && !pathname.startsWith("/public/")) {
    try {
      return await serveFile(req, `./public${pathname}`);
    } catch {
      return new Response("File not found", { status: 404 });
    }
  }

  if (pathname === "/api/hello") {
    return new Response(
      JSON.stringify({ message: "Hello from Max Day's Projects Server!" }),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  }
  return new Response("Not Found", { status: 404 });
}

console.log(`Max Day's Projects server running at http://localhost:${PORT}`);
console.log(`Serving files from ./public`);

await serve(handler, { port: PORT });
