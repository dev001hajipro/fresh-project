import { Handlers, PageProps } from "$fresh/server.ts";

const NAMES = [
    "Alice", "Bob", "Charlie", "David", "Eve", "Fred", "Ginny", "Harriet", "Ileana", "Joseph", "Kincaid",
    "Larry", "Michael", "Norbert", "Olivia", "Patton", "Quincy", "Robert", "Sarah", "Tess", "Ursula",
    "Violet", "Wally", "Xander", "Yolanda", "Zelda"
]

interface Data {
    results: string[];
    query: string;
}

export const handler: Handlers<Data> = {
    GET(req, ctx) {
        const url = new URL(req.url);
        const query = url.searchParams.get("q") || '';
        const results = NAMES.filter(name => name.includes(query));
        return ctx.render({ results, query})
    },
};

export default function SearchPage({ data }: PageProps<Data>) {
    const {results, query} = data;
    return (
        <div>
            <form>
                <input type="text" name="q" value={query} />
                <button type="submit">検索</button>
            </form>
            <ul>
                {results.map(name => <li key={name}>{name}</li>)}
            </ul>
        </div>
    );
}