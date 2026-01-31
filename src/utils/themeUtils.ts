import { ref } from "vue";

const THEME = "theme";
const LIGHT: string = "light" as const;
const DARK: string = "dark" as const;
const DATA_THEME = "data-theme";
export type TThemeMode = typeof LIGHT | typeof DARK;

export const theme = ref<TThemeMode>(
  (localStorage.getItem(THEME) as TThemeMode) ?? LIGHT,
);

export const applyTheme = (newTheme: TThemeMode) => {
  theme.value = newTheme;
  localStorage.setItem(THEME, newTheme);
  document.documentElement.setAttribute(
    DATA_THEME,
    newTheme === DARK ? DARK : LIGHT,
  );
};

export const toggleThemeMode = () => {
  applyTheme(theme.value === DARK ? LIGHT : DARK);
};

export const setUpInitialTheme = () => {
  const savedTheme = localStorage.getItem(THEME) as TThemeMode | null;

  const initialTheme =
    savedTheme ??
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? DARK
      : LIGHT);

  applyTheme(initialTheme);
};
