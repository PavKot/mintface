/**
 * Theme constants for MintFace Landing Page
 * Based on the mobile app theme
 */

export const Colors = {
  primary: '#7C3AED',
  secondary: '#2563EB',
  accent: '#A78BFA',
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  background: '#000000',
  surface: '#1a1a1a',
  surfaceLight: '#2a2a2a',
  text: '#ffffff',
  textSecondary: 'rgba(255, 255, 255, 0.7)',
  textMuted: 'rgba(255, 255, 255, 0.5)',
  border: 'rgba(255, 255, 255, 0.1)',
  borderLight: 'rgba(255, 255, 255, 0.2)',
};

export const Gradients = {
  primary: 'linear-gradient(135deg, #7C3AED 0%, #2563EB 100%)',
  secondary: 'linear-gradient(135deg, #A78BFA 0%, #7C3AED 100%)',
  background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
  surface: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
};

export const Shadows = {
  small: '0 2px 8px rgba(0, 0, 0, 0.1)',
  medium: '0 4px 16px rgba(0, 0, 0, 0.2)',
  large: '0 8px 32px rgba(0, 0, 0, 0.3)',
  glow: '0 0 20px rgba(167, 139, 250, 0.3)',
};

export const Breakpoints = {
  mobile: '768px',
  tablet: '1024px',
  desktop: '1200px',
};

export const Spacing = {
  xs: '8px',
  sm: '16px',
  md: '24px',
  lg: '32px',
  xl: '48px',
  xxl: '64px',
};

export const BorderRadius = {
  small: '8px',
  medium: '12px',
  large: '16px',
  xl: '24px',
  round: '50%',
};

export const Typography = {
  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  fontSize: {
    xs: '12px',
    sm: '14px',
    base: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '30px',
    '4xl': '36px',
    '5xl': '48px',
    '6xl': '60px',
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeight: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75,
  },
};