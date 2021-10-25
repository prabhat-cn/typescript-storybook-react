import React, { HTMLAttributes, ReactNode } from 'react';

// custom props
export interface Props extends HTMLAttributes<HTMLButtonElement> {
  /**Provide text name for the button */
  children: ReactNode;
  /**Which vartient look would you like use */
  variant:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger';
}

// const Button = (props: Props) => {
// export const Button = ({ children, variant, ...props }: Props) => {
/**This is default button */
// add default variant
export const Button = ({ children, variant = 'default', ...props }: Props) => {
  return (
    <>
      {/* <button
        {...props}
        style={{ backgroundColor: variant === 'primary' ? 'blue' : 'gray' }}
      >
        {children}
      </button> */}
      <button
        {...props}
        className={`button-btn ${variant}`}
        style={{
          backgroundColor:
            (variant === 'primary' && 'blue') ||
            (variant === 'secondary' && 'gray') ||
            (variant === 'success' && 'green') ||
            (variant === 'warning' && 'yellow') ||
            (variant === 'danger' && 'Red') ||
            (variant === 'default' && 'transparent'),
          color:
            (variant === 'primary' && 'white') ||
            (variant === 'secondary' && 'white') ||
            (variant === 'success' && 'white') ||
            (variant === 'warning' && 'black') ||
            (variant === 'danger' && 'white') ||
            (variant === 'default' && 'black'),
          border:
            (variant === 'primary' && '1px solid blue') ||
            (variant === 'secondary' && '1px solid gray') ||
            (variant === 'success' && '1px solid green') ||
            (variant === 'warning' && '1px solid yellow') ||
            (variant === 'danger' && '1px solid Red') ||
            (variant === 'default' && '1px solid black'),
          fontSize: '18px',
          whiteSpace: 'nowrap',
          padding: '.375rem .75rem',
          transition:
            'color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out',
          cursor: 'pointer',
          borderRadius: '10px',
          textTransform: 'uppercase',
        }}
      >
        {children}
      </button>
      <style>{customBtnCss}</style>
    </>
  );
};

const customBtnCss = `
.button-btn.primary:hover {
  background-color: #4848c5 !important;
  border: 1px solid #4848c5 !important;
}
.button-btn.secondary:hover {
  background-color: #808080b5 !important;
  border: 1px solid #808080b5 !important;
}
.button-btn.success:hover {
  background-color: #008000ba !important;
  border: 1px solid #008000ba !important;
}
.button-btn.warning:hover {
  background-color: #ffff007d !important;
  border: 1px solid #ffff007d !important;
}
.button-btn.danger:hover {
  background-color: #ff0000ad !important;
  border: 1px solid #ff0000ad !important;
}
.button-btn.default:hover {
  background-color: #120c0c2b !important;
  border: 1px solid #120c0c2b !important;
}
`;
