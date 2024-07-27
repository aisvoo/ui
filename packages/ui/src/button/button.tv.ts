import { tv, type VariantProps } from 'tailwind-variants'

export const buttonTV = tv({
  base: "flex items-center cursor-pointer border rounded-md justify-center transition-colors ",
  variants: {
    color: {
      primary: '',
    },
    variant: {
      solid: '',
      outline: 'bg-transparent',
    },
    size: {
      sm: 'text-sm px-2 py-1',
      md: 'text-base px-3 py-2',
      lg: 'text-lg px-3 py-2',
    },
    disabled: {
      true: 'pointer-events-none cursor-not-allowed opacity-50'
    },
    loading: {
      true: 'pointer-events-none cursor-not-allowed'
    },
    iconOnly: {
      true: ''
    }
  },
  compoundVariants: [
    {
      color: 'primary',
      variant: 'solid',
      class: 'bg-primary border-primary hover:bg-primary/90 text-primary-foreground',
    },
    {
      color: 'primary',
      variant: "outline",
      class: 'border-primary text-primary',
    }
  ],
  defaultVariants: {
    size: 'md',
    color: 'primary',
    variant: "solid",
    disabled: false,
    loading: false,
    iconOnly: false
  }
})

export type ButtonTVProps = VariantProps<typeof buttonTV>