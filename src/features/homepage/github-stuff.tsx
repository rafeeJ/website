"use client";
import GitHubCalendar from "react-github-calendar";
import { useTheme } from "next-themes";

export const GithubStuff = () => {
  const { theme, systemTheme } = useTheme();
  let themeToUse: "light" | "dark";

  if (theme === "system") {
    if (systemTheme === "dark") {
      themeToUse = "dark";
    } else {
      themeToUse = "light";
    }
  } else {
    themeToUse = theme as "light" | "dark";
  }

  return (
    <section className="mx-auto py-5 border-gray-300">
      <GitHubCalendar username="rafeeJ" colorScheme={themeToUse} />
    </section>
  );
};
