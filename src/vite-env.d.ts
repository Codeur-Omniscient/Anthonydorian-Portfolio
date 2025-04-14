/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_LOCIZE_PROJECTID: string;
  readonly VITE_LOCIZE_APIKEY: string;
  readonly VITE_LOCIZE_VERSION: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
