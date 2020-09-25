module.exports = {
  purge: [],
  theme: {
    zIndex: {
      '-100': -100,
      '-10': -10,
      '0': 0,
      '10': 10,
      '20': 20,
      '30': 30,
      '40': 40,
      '50': 50,
      '25': 25,
      '50': 50,
      '75': 75,
      '100': 100
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '8xl': '6rem',
      '9xl': '7rem',
      '10xl': '8rem',
      '11xl': '9rem',
      '12xl': '10rem',
      '13xl': '11rem',
      '14xl': '12rem',
      '15xl': '13rem',
      '16xl': '14rem',
    },
    inset: {
      '0': 0,
      auto: 'auto',
      '1/2': '50%',
      '1/4': '25%',
      '1/8': '12.50%',
      '1/12': '6.75%'
    },
    animation: {
      none: 'none',
      spin: 'spin 1s linear infinite',
      ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
      pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      bounce: 'bounce 1s infinite',
      'text-focus-in': 'text-focus-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both',
      'scale-in-tr': 'scale-in-tr 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
      'text-flicker-in-glow': 'text-flicker-in-glow 4s linear infinite both',
    },
    keyframes: {
      spin: {
        from: {
          transform: 'rotate(0deg)'
        },
        to: {
          transform: 'rotate(360deg)'
        }
      },
      ping: {
        '0%': {
          transform: ' scale(1)',
          opacity: '1'
        },
        '75%, 100%': {
          transform: 'scale(2)',
          opacity: '0'
        }
      },
      pulse: {
        '0%, 100%': {
          opacity: '1'
        },
        '50%': {
          opacity: '.5'
        }
      },
      bounce: {
        '0%, 100%': {
          transform: 'translateY(-25 %)',
          animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
        },
        '50%': {
          transform: 'translateY(0)',
          animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
        }
      },
      'text-focus-in': {
        '0%': {
          filter: 'blur(12px)',
          opacity: '0'
        },
        '100%': {
          filter: 'blur(0px)',
          opacity: '1'
        }
      },
      'scale-in-tr': {
        '0%': {
          transform: 'scale(0)',
          'transform-origin': '100% 0%',
          opacity: 1,
        },
        '100%': {
          transform: ' scale(1)',
          'transform-origin': '100% 0%',
          opacity: 1,
        }
      },
      'text-flicker-in-glow': {
        '0%': {
          opacity: '0',
        },
        '10%': {
          opacity: '0',
          'text-shadow': 'none',
        },
        '10.1%': {
          opacity: '1',
          'text-shadow': 'none',
        },
        '10.2%': {
          opacity: '0',
          'text-shadow': 'none',
        },
        '20%': {
          opacity: '0',
          'text-shadow': 'none',
        },
        '20.1%': {
          opacity: '1',
          'text-shadow': '0 0 30px rgba(255, 255, 255, 0.25)',
        },
        '20.6%': {
          opacity: '0',
          'text-shadow': 'none',
        },
        '30%': {
          opacity: '0',
          'text-shadow': 'none',
        },
        '30.1%': {
          opacity: '1',
          'text-shadow': '0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25)',
        },
        '30.5%': {
          opacity: '1',
          'text-shadow': '0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25)',
        },
        '30.6%': {
          opacity: '0',
          'text-shadow': 'none',
        },
        '45%': {
          opacity: '0',
          'text-shadow': 'none',
        },
        '45.1%': {
          opacity: '1',
          'text-shadow': '0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25)',
        },
        '50%': {
          opacity: '1',
          'text-shadow': '0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25)',
        },
        '55%': {
          opacity: '1',
          'text-shadow': '0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25)',
        },
        '55.1%': {
          opacity: '0',
          'text-shadow': 'none',
        },
        '57%': {
          opacity: '0',
          'text-shadow': 'none',
        },
        '57.1%': {
          opacity: '1',
          'text-shadow': '0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35)',
        },
        '60%': {
          opacity: '1',
          'text-shadow': '0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35)',
        },
        '60.1%': {
          opacity: '0',
          'text-shadow': 'none',
        },
        '65%': {
          opacity: '0',
          'text-shadow': 'none',
        },
        '65.1%': {
          opacity: '1',
          'text-shadow': '0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35), 0 0 100px rgba(255, 255, 255, 0.1)',
        },
        '75%': {
          opacity: '1',
          'text-shadow': '0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35), 0 0 100px rgba(255, 255, 255, 0.1)',
        },
        '75.1%': {
          opacity: '0',
          'text-shadow': 'none',
        },
        '77%': {
          opacity: '0',
          'text-shadow': 'none',
        },
        '77.1%': {
          opacity: '1',
          'text-shadow': '0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.4), 0 0 110px rgba(255, 255, 255, 0.2), 0 0 100px rgba(255, 255, 255, 0.1)',
        },
        '85%': {
          opacity: '1',
          'text-shadow': '0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.4), 0 0 110px rgba(255, 255, 255, 0.2), 0 0 100px rgba(255, 255, 255, 0.1)',
        },
        '85.1%': {
          opacity: '0',
          'text-shadow': 'none',
        },
        '86%': {
          opacity: '0',
          'text-shadow': 'none',
        },
        '86.1%': {
          opacity: '1',
          'text-shadow': '0 0 30px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.45), 0 0 110px rgba(255, 255, 255, 0.25), 0 0 100px rgba(255, 255, 255, 0.1)',
        },
        '100%': {
          opacity: '1',
          'text-shadow': '0 0 30px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.45), 0 0 110px rgba(255, 255, 255, 0.25), 0 0 100px rgba(255, 255, 255, 0.1)',
        }
      }


    }
  },
  variants: {},
  plugins: [],
}
