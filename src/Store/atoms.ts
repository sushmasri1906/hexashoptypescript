import { atom } from "recoil";

export type productType = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  category ?: string;
  description ?: string;
  quantity: number;
  rating?: string|number 

};

export const cartItems = atom<productType[]>({
  key: "cartItems",
  default: [],
});

export const wishlistItems = atom<productType[]>({
	key: "wishlistItems",
	default: [
		
	],
});

export const isLoggedInState = atom<boolean>({
	key: 'isLoggedInState', 
	default: false, 
});

  export const userInfoState = atom({
	key: 'userInfoState',
	default: {
    name : "",
	  email: '',
	},
  });
  
  export const isRegisteredState = atom({
	key: 'isRegisteredState',
	default: false,
  });