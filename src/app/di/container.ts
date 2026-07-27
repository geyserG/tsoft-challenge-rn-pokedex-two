import Config from 'react-native-config';
import { FetchHttpClient } from '../../shared/http/FetchHttpClient';

export const httpClient = new FetchHttpClient(Config.POKEMON_BASE_URL);
