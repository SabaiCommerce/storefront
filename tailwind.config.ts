import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            colors: {
                'color-secondary': '#666666',
                'color-dark-gunmetal-100': '#292622',
                'color-dark-gunmetal-200': '#222529',
                'color-gunmetal': '#37332E',
                'color-raisin-black': '#222222',
                'color-primary': '#ff675d',
                'color-lemon-grass': '#999999',
                'color-silver-chalice': '#aaaaaa'
            },
            boxShadow: {
                't-sm': '0 -1px 2px 0 rgba(0, 0, 0, 0.05)',
                't-md': '0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                't-lg': '0 -10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                't-xl': '0 -20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                't-2xl': '0 -25px 50px -12px rgba(0, 0, 0, 0.25)'
            },
            animation: {
                marquee: 'marquee 10s linear infinite',
                marquee2: 'marquee2 10s linear infinite'
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-100%)' }
                },
                marquee2: {
                    '0%': { transform: 'translateX(100%)' },
                    '100%': { transform: 'translateX(-80%)' }
                }
            }
        }
    },
    plugins: [
        require('tailwindcss-animated'),
        require('tailwind-scrollbar')({ nocompatible: true })
    ]
};
export default config;
