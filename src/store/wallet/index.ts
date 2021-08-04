// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import actions from './actions';

const wallet = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  state: () => ({
    msg: 'test',
  }),
  mutations: {

  },
  actions,
};
export default wallet;
