import { atom } from "recoil";

export const cartAtom = atom({
    key: 'cartAtom',
    default: 0,
})

/* 
  useRecoilState: if you need to change atom value
  useREcoilValue: if you just want to value
*/