"use client";

import { useState } from "react";

export default function UrlForm() {
    const [originalUrl, setOriginalUrl] = useState("");
    const [result, setResult] = useState(null);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [copied, setCopied] = useState(false);

    async function handleSubmit(event) {
        event.preventDefault();
        setError("");
        setResult(null);
        setIsLoading(true);

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ originalUrl }),
            });
            const data = await response.json();
            if (!response.ok) throw new Error(data.message || "Something went wrong.");
            setResult(data);
        } catch (requestError) {
            setError(requestError.message);
        } finally {
            setIsLoading(false);
        }
    }

    async function copyShortUrl() {
        await navigator.clipboard.writeText(result.shortUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 1800);
    }

    return <div className="w-full">
        <form className="flex flex-col gap-2 sm:flex-row"
            onSubmit={handleSubmit}
        >
            <input
                className="h-12 flex-1 box-border appearance-none rounded-lg border border-white/10 bg-zinc-950 px-3.5 text-white outline-none transition placeholder:text-zinc-600 focus:border-zinc-500 focus:ring-4 focus:ring-white/10"
                type="url"
                value={originalUrl}
                onChange={(event) => setOriginalUrl(event.target.value)}
                placeholder="Paste your long URL here" required
            />
            <button className="h-10.5 mt-0.5 font-semibold text-sm cursor-pointer rounded-lg bg-white px-5 text-zinc-950 transition hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-60 whitespace-nowrap"
                disabled={isLoading}
            >
                {isLoading ? "Shortening..." : "Shorten URL"}
            </button>
        </form>
        {isLoading && <p className="mt-3 px-1 text-sm text-slate-400">Creating your short link...</p>}
        {result && <div className="mt-3 rounded-lg border border-white/10 bg-white/5 p-4 text-left">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                Your short link
            </p>
            <div className="mt-1 flex items-center justify-between gap-3">
                <a className="truncate text-lg font-bold text-blue-500 hover:underline"
                    href={`https://${result.shortUrl}`}
                    target="_blank" rel="noreferrer">
                    {result.shortUrl}
                </a>
                <button className={`cursor-pointer rounded-md border border-white/10 bg-zinc-900 px-3 py-1.5 text-sm font-semibold transition hover:bg-zinc-800
                    ${copied ? "text-green-500" : "text-zinc-200"}`}
                    onClick={copyShortUrl}
                    type="button">
                    {copied ? "Copied!" : "Copy"}
                </button>
            </div>
            <p className="mt-3 truncate text-sm text-zinc-500">
                Original: {result.originalUrl}
            </p>
        </div>}
        {error && <p className="mt-3 text-sm text-rose-600">{error}</p>}
    </div>;
}
