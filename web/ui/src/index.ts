export * from "./components";
export { default as config } from "../tailwind.config";

export type { DataAttributes } from "./types/data-attributes";

// Form Validation Utilities
export * from "./utils/form-validation";
export * from "./hooks/useFormValidation";

// Import global styles (will be dynamically resolved)
import "./styles/globals.css";

// Export design system utilities for consuming applications
