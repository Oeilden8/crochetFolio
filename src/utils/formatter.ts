export const getMediaUrl = (url: string) => new URL(url, import.meta.url).href;
