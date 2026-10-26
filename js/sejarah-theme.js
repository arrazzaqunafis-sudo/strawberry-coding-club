// const themeStorageKey = "ciamis-theme";
// const storedTheme = localStorage.getItem(themeStorageKey);
// const prefersDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");

// function setSejarahTheme(theme) {
//   document.documentElement.dataset.theme = theme;
//   document.querySelector('meta[name="theme-color"]').content =
//     theme === "dark" ? "#17121a" : "#fbf5e9";
// }

// setSejarahTheme(storedTheme || (prefersDarkTheme.matches ? "dark" : "light"));

// prefersDarkTheme.addEventListener("change", (event) => {
//   if (!localStorage.getItem(themeStorageKey)) {
//     setSejarahTheme(event.matches ? "dark" : "light");
//   }
// });
