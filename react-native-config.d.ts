declare module 'react-native-config' {
  export interface NativeConfig {
    POKEMON_API_URL: string;
    POKEMON_IMAGE_BASE_URL: string;
  }

  export const Config: NativeConfig;
  export default Config;
}
