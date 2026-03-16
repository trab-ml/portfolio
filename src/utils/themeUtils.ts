import { ref } from "vue";

const THEME = "theme";
const LIGHT: string = "light" as const;
export const DARK: string = "dark" as const;
const DATA_THEME = "data-theme";

export type TThemeMode = typeof LIGHT | typeof DARK;

export const theme = ref<TThemeMode>(
  (localStorage.getItem(THEME) as TThemeMode) ?? LIGHT,
);

const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

export const applyTheme = (newTheme: TThemeMode, persist = true) => {
  theme.value = newTheme;

  if (persist) {
    localStorage.setItem(THEME, newTheme);
  }

  document.documentElement.setAttribute(
    DATA_THEME,
    newTheme === DARK ? DARK : LIGHT,
  );
};

export const toggleThemeMode = () => {
  applyTheme(theme.value === DARK ? LIGHT : DARK, true);
};

export const setUpInitialTheme = () => {
  const savedTheme = localStorage.getItem(THEME) as TThemeMode | null;

  if (savedTheme) {
    applyTheme(savedTheme);
    return;
  }

  applyTheme(mediaQuery.matches ? DARK : LIGHT, false);

  mediaQuery.addEventListener("change", (event) => {
    const stillNoUserChoice = !localStorage.getItem(THEME);

    if (stillNoUserChoice) {
      applyTheme(event.matches ? DARK : LIGHT, false);
    }
  });
};
