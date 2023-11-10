import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';
import { GoSync } from 'react-icons/go';

type classicBtnProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type ButtonProps = classicBtnProps & {
  rounded?: boolean;
  outline?: boolean;
  loading?: boolean;
}
  & (
    { primary?: true; secondary?: never; success?: never; warning?: never; danger?: never; }
  | { primary?: never; secondary?: true; success?: never; warning?: never; danger?: never; }
  | { primary?: never; secondary?: never; success?: true; warning?: never; danger?: never; }
  | { primary?: never; secondary?: never; success?: never; warning?: true; danger?: never; }
  | { primary?: never; secondary?: never; success?: never; warning?: never; danger?: true; }
  );

const Button: React.FC<ButtonProps> = (
  { children, primary, secondary, success, warning, danger,
    rounded, outline, loading, disabled, className, ...rest }) => {

  const classes = twMerge(classNames('flex items-center px-3 py-1.5 border [&>svg]:mr-1', className, {
    'opacity-80': loading,
    'border-blue-600 bg-blue-500 text-white': primary,
    'border-gray-900 bg-gray-800 text-white': secondary,
    'border-green-600 bg-green-500 text-white': success,
    'border-yellow-600 bg-yellow-500 text-white': warning,
    'border-red-600 bg-red-500 text-white': danger,
    'rounded-full': rounded,
    'bg-white': outline,
    'text-blue-500': outline && primary,
    'text-gray-900': outline && secondary,
    'text-green-500': outline && success,
    'text-yellow-400': outline && warning,
    'text-red-500': outline && danger
  }));

  return (
    <button
      className={classes}
      {...rest}
      disabled={loading || disabled}
    >
      {loading && <GoSync className="animate-spin" />}
      {children}
    </button>
  );
};

type Props = {
  primary?: boolean;
  secondary?: boolean;
  success?: boolean;
  warning?: boolean;
  danger?: boolean
  loading?: boolean
}

Button.propTypes = {
  loading: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  checkVariationValue: ({ primary, secondary, success, warning, danger }: Props) => {
    const count = Number(!!primary)
      + Number(!!secondary)
      + Number(!!success)
      + Number(!!warning)
      + Number(!!danger)

    if (count > 1) {
      throw new Error('Only one of primary, secondary, success, warning, danger can be true.');
    }
  }
}

export default Button;
