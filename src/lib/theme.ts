
// Theme configuration for the portfolio site
// Matt black background with blue shade accents

export const themeColors = {
  // Main background (matt black)
  background: '#121212',
  
  // Blue accent shades
  primaryBlue: '#0070f3',
  secondaryBlue: '#00a2ff',
  tertiaryBlue: '#005bb5',
  
  // Text colors
  textPrimary: '#ffffff',
  textSecondary: '#a0a0a0',
  
  // Accent colors
  accentLight: '#2d2d2d',
  accentDark: '#0a0a0a',
};

export const getThemeCSS = () => `
  :root {
    --background: ${themeColors.background};
    --foreground: ${themeColors.textPrimary};
    --card: ${themeColors.accentLight};
    --card-foreground: ${themeColors.textPrimary};
    --popover: ${themeColors.accentLight};
    --popover-foreground: ${themeColors.textPrimary};
    --primary: ${themeColors.primaryBlue};
    --primary-foreground: ${themeColors.textPrimary};
    --secondary: ${themeColors.secondaryBlue};
    --secondary-foreground: ${themeColors.textPrimary};
    --muted: ${themeColors.accentLight};
    --muted-foreground: ${themeColors.textSecondary};
    --accent: ${themeColors.tertiaryBlue};
    --accent-foreground: ${themeColors.textPrimary};
    --destructive: #ff4d4f;
    --destructive-foreground: ${themeColors.textPrimary};
    --border: ${themeColors.accentLight};
    --input: ${themeColors.accentLight};
    --ring: ${themeColors.primaryBlue};
    --code: #1e1e1e;
    --code-foreground: #e1e1e1;
    --tech: #171717;
    --tech-foreground: ${themeColors.secondaryBlue};
    --radius: 0.5rem;
  }
`;
