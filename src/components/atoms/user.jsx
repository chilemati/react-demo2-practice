import { atom } from "recoil";

export const userAtom = atom({
    key: 'userAtom',
    default: {
        isLoggedIn: false,
        data:{}
    },
})

/* 
  useRecoilState: if you need to change atom value
  useREcoilValue: if you just want to value
*/