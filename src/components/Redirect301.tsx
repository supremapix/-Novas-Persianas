import React, { useEffect } from "react";

interface Redirect301Props {
  to: string;
}

/**
 * Redirect301 component that performs a 301-like client-side redirection.
 * It uses window.history.replaceState to avoid creating duplicate browser history entries
 * and dispatches a popstate event to let the lightweight pathname router know it should update.
 */
export default function Redirect301({ to }: Redirect301Props) {
  useEffect(() => {
    // Client-side 301 replacement (does not add a new page in session history)
    window.history.replaceState({}, "", to);
    
    // Dispatch popstate event to notify our App router of the route change
    const popStateEvent = new PopStateEvent("popstate");
    window.dispatchEvent(popStateEvent);
  }, [to]);

  return null;
}
