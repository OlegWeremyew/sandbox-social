/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_API: string;
  readonly VITE_APP_NAME?: string;
  readonly VITE_MODE: string;
  readonly VITE_PUBLIC_PATH: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
