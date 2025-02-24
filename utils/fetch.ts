export async function fetchWithCache(url: string, options: RequestInit = {}) {
  return fetch(url, {
    ...options,
    cache: 'force-cache',
    next: { revalidate: 3600 },
  })
} 