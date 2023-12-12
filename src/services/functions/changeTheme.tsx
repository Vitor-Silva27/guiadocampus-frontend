import { useTheme } from 'next-themes';

export const changeTheme = () => {
  const {resolvedTheme, setTheme} = useTheme();

  const handleTheme = () => {
    const theme = resolvedTheme === 'dark' ? 'light': 'dark';
    setTheme(theme);
  }

  return {handleTheme, resolvedTheme}
};
