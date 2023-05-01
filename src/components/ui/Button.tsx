import { cva, VariantProps } from 'class-variance-authority'
import { ButtonHTMLAttributes, FC } from 'react'


const btnVar = cva(
	'active:scale-95 inline-flex items justify-center rounded-md text-sm font-medium transition-color focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-50 disabled:pointer-event-none',
	{
		variants: {
			variant: {
				default: 'bg-slate-900 text-white hover:bg-slate-800',
				ghost: 'bg-transparent hover:text-slate-900 hover:bg-slate-200'
			},
			size: {
				default: 'h-10 py-2 px-4',
				sm: 'h-9 px-2',
				lg: 'h-11 px-8'
			}
		},
		defaultVariants: {
			variant: 'default',
			size: 'default'
		},
	},
)

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof btnVar> { }

const Button: FC<ButtonProps> = ({ }) => {
	return (
		<>
			<button>Button</button>
		</>
	)
}
export default Button