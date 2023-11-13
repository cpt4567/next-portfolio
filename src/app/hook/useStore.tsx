import { proxy } from 'valtio';
import { useProxy } from 'valtio/utils';

const store = proxy({ open: false, isPousing: false });
export const useStore = () => useProxy(store);
