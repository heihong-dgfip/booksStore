import { type } from 'os';
import { reactive } from 'vue'

interface IBook{
    id: number,
    title: string,
    price: number
}


let _cart: IBook[] = []

export const store = reactive({
  cart: _cart,
  addElement(book:IBook){
    this.cart.push(book);
  }
})