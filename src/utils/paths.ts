export const withBase = (path: string) => {
  if (/^(?:[a-z]+:)?\/\//i.test(path) || path.startsWith("mailto:") || path.startsWith("#")) {
    return path;
  }

  const base = import.meta.env.BASE_URL;
  const normalizedBase = base.endsWith("/") ? base : `${base}/`;
  const normalizedPath = path.replace(/^\/+/, "");

  return `${normalizedBase}${normalizedPath}`;
};
