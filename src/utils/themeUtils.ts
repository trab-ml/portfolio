import { ref } from "vue";

const THEME = "theme";
const LIGHT = "light" as const;
export const DARK = "dark" as const;
const DATA_THEME = "data-theme";

export type TThemeMode = typeof LIGHT | typeof DARK;

export const theme = ref<TThemeMode>(LIGHT);

const isBrowser = typeof window !== "undefined";

export const applyTheme = (
  newTheme: TThemeMode,
  persist = true,
) => {
  theme.value = newTheme;

  if (!isBrowser) {
    return;
  }

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
  if (!isBrowser) {
    return;
  }

  const savedTheme = localStorage.getItem(THEME) as TThemeMode | null;

  if (savedTheme === LIGHT || savedTheme === DARK) {
    applyTheme(savedTheme);
    return;
  }

  const mediaQuery = window.matchMedia(
    "(prefers-color-scheme: dark)",
  );

  applyTheme(mediaQuery.matches ? DARK : LIGHT, false);

  mediaQuery.addEventListener("change", (event) => {
    const stillNoUserChoice = !localStorage.getItem(THEME);

    if (stillNoUserChoice) {
      applyTheme(
        event.matches ? DARK : LIGHT,
        false,
      );
    }
  });
};