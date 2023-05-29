import { extendTheme, ThemeOverride } from '@chakra-ui/react';
import { Dict, mergeWith } from '@chakra-ui/utils';
import { mode } from '@chakra-ui/theme-tools';

export function makeTheme(overrides: ThemeOverride = {}) {
  const theme = extendTheme({
    ...extendedTheme,
  });
  return mergeWith(theme, overrides);
}

export const extendedTheme = extendTheme({
  fonts: {
    body: 'Inter, system-ui, sans-serif',
    heading: 'Work Sans, system-ui, sans-serif'
  },
  styles: {
    global: (props: Dict<any>) => ({
      body: {
        color: mode('gray.700', 'whiteAlpha.900')(props),
        bg: mode('gray.50', 'gray.900')(props),
        fontSize: '1.2em',
        '.deleted': {
          color: '#ff8383 !important',
          fontStyle: 'normal !important'
        },
        '.inserted': {
          color: '#b5f4a5 !important',
          fontStyle: 'normal !important'
        }
      },
      a: {
        color: mode('blue.500', 'blue.200')(props),
        transition: 'color 0.15s',
        transitionTimingFunction: 'ease-out',
        fontWeight: '500'
        // _hover: {
        //   color: useHoverLinkColor()
        // }
        // _hover: {
        //   color: mode("blue.600", "blue.300")(props),
        // }
      },
      '#nprogress': {
        pointerEvents: 'none'
      },
      '#nprogress .bar': {
        position: 'fixed',
        zIndex: '1031',
        top: 0,
        left: 0,
        width: '100%',
        height: '2px'
      }
    })
  },
  components: {
    Tooltip: {
      sizes: {
        sm: {
          fontSize: 'xs',
          ml: '5px'
        }
      }
    },
    Popover: {
      variants: {
        responsive: {
          popper: {
            maxWidth: 'unset',
            width: '5px'
          }
        }
      }
    },
    // Popover: {
    //   parts: ['popper'],
    //   baseStyle: (props) => ({
    //     popper: {
    //       zIndex: 10,
    //       maxW: 'xs',
    //       // maxW: props.width ? props.width : 'xs',
    //       w: props.width,
    //     },
    //   }),
    // },
    Button: {
      baseStyle: {
        fontWeight: '500',
        rounded: 'xl'
      }
    },
    Tag: {
      baseStyle: {
        rounded: 'lg'
      },
      sizes: {
        xs: {
          container: {
            px: '0.313rem',
            py: '0.1rem',
            rounded: 'sm',
            minW: 'auto',
            fontSize: '0.8rem',
            lineHeight: '0.9rem',
            fontWeight: 500
          }
        }
      }
    },
    textarea: {
      baseStyle: {
        background: 'green.300'
      }
    },
  }
});

export const getTagColor = (type: string) => {
  type = type.toLowerCase();
  switch (type) {
    case 'ruby':
    case 'rails': {
      return 'red';
    }
    case 'react': {
      return 'cyan';
    }
    case 'javascript': {
      return 'yellow';
    }
    case 'typescript':
    case 'tailwindcss':
    case 'nextjs': {
      return 'blue';
    }
    case 'chakraui':
    case 'css': {
      return 'teal';
    }
  }
};

export const theme = makeTheme();