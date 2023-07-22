const mapping: Record<string, string> = {
  assets: 'asset',
  bookmarks: 'bookmark',
  communities: 'community',
  organizations: 'organization',
  portfolios: 'portfolio',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
