import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
    /**
     * Set a custom response header "X-Custom-Handler" to "helloworld" when
     * the GET request is received.
     */
    async GET(_req, ctx) {
        const resp = await ctx.render();
        resp.headers.set("X-Custom-Handler", "helloworld");
        return resp;
    },
};

export default function About() {
    return (
        <main>
            <h1>About</h1>
            <p>This is the about page.</p>
        </main>
    )
}