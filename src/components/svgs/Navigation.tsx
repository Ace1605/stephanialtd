export const Hamburger = () => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M3.89648 7.99976H19.8965'
        stroke='#282828'
        strokeWidth='1.38462'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M3.89648 16.0002H19.8965'
        stroke='#282828'
        strokeWidth='1.38462'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export const Cancel = () => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M6 6.31348L17.3137 17.6272'
        stroke='#282828'
        strokeWidth='1.38462'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M6 17.3135L17.3137 5.99977'
        stroke='#282828'
        strokeWidth='1.38462'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export const BackButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <svg
      width='38'
      height='38'
      viewBox='0 0 38 38'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      onClick={onClick}
    >
      <rect width='37.0337' height='37.0337' rx='18.5169' fill='#F6F7F9' />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M26.6182 18.5161C26.6182 18.9955 26.2296 19.3841 25.7502 19.3841L13.4389 19.3841L18.2507 23.9663C18.5962 24.2985 18.607 24.848 18.2747 25.1935C17.9425 25.5391 17.393 25.5499 17.0475 25.2176L10.6823 19.1418C10.5121 18.9781 10.4159 18.7522 10.4159 18.5161C10.4159 18.28 10.5121 18.0541 10.6823 17.8904L17.0475 11.8146C17.393 11.4823 17.9425 11.4931 18.2747 11.8386C18.607 12.1842 18.5962 12.7337 18.2507 13.0659L13.4389 17.6481L25.7502 17.6481C26.2296 17.6481 26.6182 18.0367 26.6182 18.5161Z'
        fill='black'
      />
    </svg>
  );
};

export const ForwardButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <svg
      width='38'
      height='38'
      viewBox='0 0 38 38'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      onClick={onClick}
    >
      <rect
        x='0.0336914'
        width='37.0337'
        height='37.0337'
        rx='18.5169'
        fill='#F6F7F9'
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M10.4492 18.5161C10.4492 18.0368 10.8378 17.6482 11.3172 17.6482L23.6285 17.6482L18.8167 13.066C18.4712 12.7337 18.4604 12.1842 18.7927 11.8387C19.1249 11.4931 19.6744 11.4824 20.0199 11.8146L26.3851 17.8905C26.5553 18.0541 26.6515 18.28 26.6515 18.5161C26.6515 18.7522 26.5553 18.9782 26.3851 19.1418L20.0199 25.2176C19.6744 25.5499 19.1249 25.5391 18.7927 25.1936C18.4604 24.848 18.4712 24.2986 18.8167 23.9663L23.6285 19.3841L11.3172 19.3841C10.8378 19.3841 10.4492 18.9955 10.4492 18.5161Z'
        fill='black'
      />
    </svg>
  );
};
