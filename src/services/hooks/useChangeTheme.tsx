import { useTheme } from 'next-themes';

export const useChangeTheme = () => {
  const {resolvedTheme, setTheme} = useTheme();

  const handleTheme = () => {
    const theme = resolvedTheme === 'dark' ? 'light': 'dark';
    setTheme(theme);
  }

  return {handleTheme, resolvedTheme}
};
