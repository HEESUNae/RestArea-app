import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const restListAtom = atom({
  key: 'REST/ALL',
  default: [{}],
  effects_UNSTABLE: [persistAtom],
});
