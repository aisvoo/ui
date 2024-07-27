import React from 'react'
import { Slot } from '@radix-ui/react-slot'
import {buttonTV, ButtonTVProps} from './button.tv'


export interface ButtonProps extends ButtonTVProps, Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color" | "prefix"> {
  children: React.ReactNode
  prefix?: React.ReactNode
  suffix?: React.ReactNode
  asChild?: boolean
}

export function Button({
  children, className, disabled, asChild, size, color, variant, suffix, prefix, ...otherProps
}: ButtonProps): JSX.Element {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      className={buttonTV({ size, color, variant, disabled, class: className })}
      disabled={disabled}
      {...otherProps}
    >
      {suffix ? <div className="pr-2">{suffix}</div> : null}
      {children}
      {prefix ? <div className='pl-2'>{prefix}</div> : null}
    </Comp>
  )
}

Button.displayName = "Button"
