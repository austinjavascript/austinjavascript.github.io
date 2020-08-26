/**
 * The social-link include may be used several times on one page.
 * To prevent repeating the source SVG block each time the include is called,
 * keep track of the calling page (using page.url) and the SVG status.
 */

const page = {};

module.exports = function socialSvg() {
  const hasSvg = page[this.page.url] || false;

  // if SVG was already added to this file, then bail out
  if (hasSvg) return '';

  // ...otherwise update hasSvg and return the SVG block
  page[this.page.url] = true;

  return `<svg display="none">
    <g id="at-circle"><path d='M255.46,48.74c-114.84,0-208,93.11-208,208s93.12,208,208,208,208-93.12,208-208S370.31,48.74,255.46,48.74ZM380.28,252c-2.85,32.63-16.79,49.7-28,58.26S327.61,322.58,316,320.5a41.61,41.61,0,0,1-26.82-17.19,62.06,62.06,0,0,1-44,17.57,51.66,51.66,0,0,1-38.55-16.83c-11.38-12.42-17-30.36-15.32-49.23,3-35,30.91-57.39,56.87-61.48,27.2-4.29,52.23,6.54,62.9,19.46l3.85,4.66-6.34,50.38c-1.19,14.34,3.28,23.48,12.29,25.1,2.39.42,8.1-.13,14.37-4.93,6.72-5.15,15.14-16,17.1-38.47C354.7,223,348,200.35,333.1,184.05c-15.49-16.9-39.09-25.84-68.23-25.84-54,0-101.81,44.43-106.58,99-2.28,26.2,5.67,50.68,22.4,68.93C197.05,344,220,353.88,245.35,353.88c19,0,30.61-2.05,49.48-8.78a14,14,0,0,1,9.4,26.38c-21.82,7.77-36.68,10.4-58.88,10.4-33.28,0-63.57-13.06-85.3-36.77C138,321,127.42,288.94,130.4,254.82c2.91-33.33,18.45-64.63,43.77-88.12s57.57-36.49,90.7-36.49c37.2,0,67.93,12.08,88.87,34.93C373.83,187.05,383.25,217.89,380.28,252Z'/><path d='M252.57,221c-14.83,2.33-31.56,15.84-33.34,36.26-1,11.06,2,21.22,8.07,27.87a23.65,23.65,0,0,0,17.91,7.75c20.31,0,34.73-14.94,36.75-38.06a14,14,0,0,1,.34-2.07l3.2-25.45a49.61,49.61,0,0,0-32.93-6.3Z'/></g>
    <g id="home"><path d='M261.56,101.28a8,8,0,0,0-11.06,0L66.4,277.15a8,8,0,0,0-2.47,5.79L63.9,448a32,32,0,0,0,32,32H192a16,16,0,0,0,16-16V328a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8l0,136a16,16,0,0,0,16,16h96.06a32,32,0,0,0,32-32l0-165.06a8,8,0,0,0-2.47-5.79Z'/><path d='M490.91,244.15l-74.8-71.56,0-108.59a16,16,0,0,0-16-16h-48a16,16,0,0,0-16,16l0,32L278.19,40.62C272.77,35.14,264.71,32,256,32h0c-8.68,0-16.72,3.14-22.14,8.63L21.16,244.13c-6.22,6-7,15.87-1.34,22.37A16,16,0,0,0,43,267.56L250.5,69.28a8,8,0,0,1,11.06,0L469.08,267.56a16,16,0,0,0,22.59-.44C497.81,260.76,497.3,250.26,490.91,244.15Z'/></g>
    <g id="logo-linkedin"><path d='M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z'/></g>
  </svg>`;
};
