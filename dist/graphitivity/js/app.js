/* ===================

Table of content:

// 1. Navigation
// 2. Infinite Scroller
// 3. Carousel
// 4. Tabs
// 5. Sliders
// 6. Smooth Scroll
// 7. Scroll to ID
// 8. Lightbox

=================== */

$(document).ready(function () {
  "use strict";

  // -----------------------------------------------
  // Infinite Scroller
  // -----------------------------------------------

  const root = document.documentElement;
  const scrollerElement = getComputedStyle(root).getPropertyValue(
    "--items-displayed"
  );
  const scrollContent = document.querySelector(".loop-container");
  // root.style.setProperty("--scroll-item-count", scrollContent.children.length);

  if (scrollerElement && scrollContent) {
    for (let i = 0; i < scrollerElement; i++) {
      scrollContent.appendChild(scrollContent.children[i].cloneNode(true));
    }
  }

  // -----------------------------------------------
  // End
  // -----------------------------------------------
});
