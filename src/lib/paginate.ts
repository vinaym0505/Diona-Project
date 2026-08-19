/**
 * Pagination Engine for WCB Dynamic Forms
 * Measures DOM element heights and splits content into A4 page chunks
 * preventing section cutoffs and row clipping.
 */

export function paginateBlocks(
  blockHeights: number[],
  pageHeightPx: number,
  headerFooterReservePx: number
): number[][] {
  const pages: number[][] = [];
  let current: number[] = [];
  let used = 0;
  const usable = Math.max(200, pageHeightPx - headerFooterReservePx);

  blockHeights.forEach((height, index) => {
    // If adding this block exceeds usable page height, start new page
    if (used + height > usable && current.length > 0) {
      pages.push(current);
      current = [];
      used = 0;
    }
    current.push(index);
    used += height;
  });

  if (current.length > 0) {
    pages.push(current);
  }

  return pages.length > 0 ? pages : [[0]];
}

// A4 dimensions in px (at 96 DPI: 210mm x 297mm = ~794px x 1123px)
export const A4_PAGE_HEIGHT_PX = 1120;
export const DEFAULT_HEADER_FOOTER_RESERVE_PX = 240;
