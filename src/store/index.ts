import { createStore } from 'vuex';
import wallet from '@/store/wallet/index';

export default createStore({
  modules: {
    wallet,
  },
});
