import { useEffect } from "react";

const AWAY_TITLE = "👋 Come back!";

export default function TabTitleFlasher() {
  useEffect(() => {
    const originalTitle = document.title;

    const onVisibilityChange = () => {
      document.title = document.hidden ? AWAY_TITLE : originalTitle;
    };

    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", onVisibilityChange);
      document.title = originalTitle;
    };
  }, []);

  return null;
}
