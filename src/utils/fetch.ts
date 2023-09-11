/**
 * Revalidated Fetch - Fetches data from API, then uses the cached version for 5 seconds, and then fetches it new again.
 * @returns {Promise<JSON>} - A promise containing JSON data from API
 */

export async function revalidateFetch<T>(url: string): Promise<T> {
  const res = await fetch(url, {
    next: {
      revalidate: 5,
    },
  });
  return await res.json();
}

/**
 * Fetch - Fetches data from API and caches it.
 * @returns {Promise<JSON>} - A promise containing JSON data from API
 */

export async function cachedFetch<T>(url: string): Promise<T> {
  const res = await fetch(url);
  return await res.json();
}

/**
 * Fetcher - Client-side fetcher that gets data from API.
 */

type FetcherProps = [url: string, options?: any];

export const fetcher = async ([url, options]: FetcherProps) =>
  await fetch(url, options).then(async (res) => await res.json());
