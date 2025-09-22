export * from "./components";
export { default as config } from "../tailwind.config";

export type { DataAttributes } from "./types/data-attributes";

// Import global styles (will be dynamically resolved)
import "./styles/globals.css";

// Export design system utilities for consuming applications
