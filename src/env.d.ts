/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly MONGODB_URI: string;
  readonly MONGODB_DB_NAME: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}