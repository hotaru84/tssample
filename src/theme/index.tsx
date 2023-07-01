import { extendTheme, ThemeOverride } from '@chakra-ui/react';
import { Dict, mergeWith } from '@chakra-ui/utils';
import { mode } from '@chakra-ui/theme-tools';

function makeTheme(overrides: ThemeOverride = {}) {
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
      }
    })
  },
  components: {
    Drawer: {
      sizes: {
        menu: {
          dialog: { maxWidth: '200px'}
        }
      },
    }
  }
});

export const theme = makeTheme();