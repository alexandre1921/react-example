/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_BASE_URL: string;
    readonly VITE_EMULATOR_HOST: string;
    readonly VITE_EMULATOR_FIRESTORE_PORT: number;
    readonly VITE_EMULATOR_AUTH_PORT: string;
    readonly VITE_DEBUG: string;
}
  
interface ImportMeta {
    readonly env: ImportMetaEnv
}