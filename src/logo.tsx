import React from 'react';

type Props = {
  height: number;
};

const APLogo = ({ height }: Props) => (
  <svg viewBox="0 0 107 96" height={height} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M99 19.5L84.2 11l-15-8.6c-10-5.7-22.4 1.5-22.4 13v1.9c0 1.1.6 2 1.5 2.6l7 4c1.9 1.1 4.4-.3 4.4-2.5v-4.6c0-2.3 2.5-3.7 4.4-2.6l13.8 7.9L91.6 30c2 1.1 2 4 0 5.1L77.9 43l-13.8 7.9c-2 1.1-4.4-.3-4.4-2.6V46c0-11.5-12.4-18.7-22.4-13l-15 8.6-14.8 8.5c-10 5.7-10 20.2 0 26l14.8 8.5 15 8.6c10 5.7 22.4-1.5 22.4-13v-1.9c0-1.1-.6-2-1.5-2.6l-7-4c-1.9-1.1-4.4.3-4.4 2.5v4.6c0 2.3-2.5 3.7-4.4 2.6l-13.8-7.9-13.7-7.9c-2-1.1-2-4 0-5.1l13.7-7.9 13.8-7.9c2-1.1 4.4.3 4.4 2.6v2.3c0 11.5 12.4 18.7 22.4 13l15-8.6L99 45.5c10.1-5.8 10.1-20.2 0-26"
      fill="currentColor"
    />
  </svg>
);

const APTextLogo = ({ height }: Props) => (
  <svg viewBox="0 0 390 94" height={height} xmlns="http://www.w3.org/2000/svg">
    <g fill="currentColor">
      <path d="M388.6 21.4l-34.8 71.8h-14.4l13-26.8-20.5-45h14.8l13.2 30.1 14.3-30.1zM41 46.9c0-8.6-6.2-14.6-13.9-14.6s-13.9 6.1-13.9 14.6c0 8.4 6.2 14.6 13.9 14.6 7.6 0 13.9-6.1 13.9-14.6m.1 25.5v-6.6c-3.8 4.6-9.4 7.4-16.1 7.4C11 73.2.4 62 .4 46.9c0-15 11-26.4 24.9-26.4 6.5 0 12 2.9 15.8 7.3v-6.4h12.5v51H41.1zM114.6 61.1c-4.4 0-5.6-1.6-5.6-5.9V32.5h8.1V21.4H109V8.9H96.1v12.4H79.5v-5.1c0-4.3 1.6-5.9 6.1-5.9h2.8V.4h-6.2C71.6.4 66.6 3.9 66.6 14.5v6.8h-7.1v11.1h7.1v39.9h12.9V32.5h16.6v25c0 10.4 4 14.9 14.4 14.9h6.6V61.1h-2.5zM160.7 42.3c-.9-6.6-6.3-10.6-12.6-10.6s-11.5 3.9-12.9 10.6h25.5zm-25.6 7.9c.9 7.5 6.3 11.8 13.2 11.8 5.4 0 9.6-2.6 12-6.6h13.2c-3.1 10.8-12.7 17.7-25.5 17.7-15.4 0-26.2-10.8-26.2-26.2 0-15.4 11.4-26.5 26.5-26.5 15.2 0 26.2 11.2 26.2 26.5 0 1.1-.1 2.2-.3 3.3h-39.1zM256.2 46.9c0-8.3-6.2-14.6-13.9-14.6s-13.9 6.1-13.9 14.6c0 8.4 6.2 14.6 13.9 14.6 7.6 0 13.9-6.4 13.9-14.6m-40.4 46.3V21.4h12.5V28c3.8-4.7 9.4-7.5 16.1-7.5 13.8 0 24.6 11.3 24.6 26.3s-11 26.4-24.9 26.4c-6.4 0-11.7-2.6-15.4-6.8v26.8h-12.9zM314.2 46.9c0-8.6-6.2-14.6-13.9-14.6-7.6 0-13.9 6.1-13.9 14.6 0 8.4 6.2 14.6 13.9 14.6s13.9-6.1 13.9-14.6m.1 25.5v-6.6c-3.8 4.6-9.4 7.4-16.1 7.4-14 0-24.6-11.2-24.6-26.3 0-15 11-26.4 24.9-26.4 6.5 0 12 2.9 15.8 7.3v-6.4h12.5v51h-12.5zM193.2 26.4s3.2-5.9 11-5.9c3.3 0 5.5 1.2 5.5 1.2v13s-4.7-2.9-9.1-2.3c-4.3.6-7.1 4.6-7.1 9.9v30.2h-13v-51H193v4.9h.2z" />
    </g>
  </svg>
);

const CPTextLogo = ({ height }: Props) => (
  <svg viewBox="0 0 405 94" height={height} xmlns="http://www.w3.org/2000/svg">
    <g fill="currentColor">
      <path d="M404.4 21.4l-34.8 71.7h-14.4l13-26.8-20.4-44.9h14.8l13.1 30.1L390 21.4zM272.1 46.9c0-8.3-6.2-14.6-13.9-14.6-7.6 0-13.9 6.1-13.9 14.6 0 8.4 6.2 14.6 13.9 14.6s13.9-6.4 13.9-14.6m-40.4 46.3V21.4h12.5V28c3.8-4.7 9.4-7.5 16.1-7.5 13.8 0 24.6 11.3 24.6 26.3s-11 26.4-24.9 26.4c-6.4 0-11.7-2.5-15.4-6.8v26.8h-12.9zM330.1 46.9c0-8.6-6.2-14.6-13.9-14.6-7.6 0-13.9 6.1-13.9 14.6 0 8.4 6.2 14.6 13.9 14.6s13.9-6.1 13.9-14.6m.1 25.5v-6.6c-3.8 4.6-9.4 7.4-16.1 7.4-14 0-24.6-11.2-24.6-26.3 0-15 11-26.4 24.9-26.4 6.5 0 12 2.9 15.8 7.3v-6.4h12.5v50.9l-12.5.1zM209.1 26.4s3.2-5.9 11-5.9c3.3 0 5.5 1.2 5.5 1.2v13s-4.7-2.9-9-2.3c-4.3.6-7.1 4.6-7.1 9.9v30.2h-12.9V21.4h12.5v5zM52.6 53.4c-2.7 11.7-12.8 19.8-25.9 19.8C11.6 73.2.3 61.9.3 46.9s11.5-26.4 26.6-26.4c12.7 0 22.7 8 25.6 19.5H39.3c-2.3-4.6-7-7.6-12.2-7.6-7.5 0-13.8 6.2-13.8 14.5 0 8.2 6.3 14.5 13.8 14.5 5.4 0 10.1-3.1 12.3-7.9l13.2-.1zM58.6 72.3V.5h12.8v71.8zM90.7 50.2C91.6 57.7 97 62 103.8 62c5.4 0 9.6-2.5 12-6.6H129c-3.1 10.8-12.7 17.7-25.5 17.7-15.4 0-26.2-10.8-26.2-26.2 0-15.4 11.4-26.5 26.5-26.5C119 20.5 130 31.7 130 47c0 1.1-.1 2.2-.3 3.3h-39v-.1zm25.5-7.9c-.9-6.6-6.3-10.6-12.6-10.6s-11.5 3.9-12.8 10.6h25.4zM175.7 72.3v-6.6c-3.8 4.6-9.4 7.4-16.1 7.4-13.9 0-24.5-11.2-24.5-26.3 0-15 11-26.4 24.8-26.4 6.5 0 12 2.9 15.8 7.3v-6.4h12.5v50.9l-12.5.1zm-.1-25.4c0-8.6-6.2-14.6-13.8-14.6-7.6 0-13.8 6.1-13.8 14.6 0 8.3 6.2 14.6 13.8 14.6 7.6 0 13.8-6.1 13.8-14.6z" />
    </g>
  </svg>
);

type ILogo = {
  APLogo: typeof APLogo;
  APTextLogo: typeof APTextLogo;
  CPTextLogo: typeof CPTextLogo;
};

export const Logo: ILogo = {
  APLogo,
  APTextLogo,
  CPTextLogo,
};
