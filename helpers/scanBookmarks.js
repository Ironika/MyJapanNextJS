export function isSameScanBookmark(scan, bookmark) {
  if (scan.site && bookmark.site && scan.site !== bookmark.site) {
    return false;
  }
  return scan.title.toUpperCase().includes(bookmark.title.toUpperCase());
}
