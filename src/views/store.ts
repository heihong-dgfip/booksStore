import { reactive } from 'vue'

interface IBook{
    id: number,
    title: string,
    price: number
}

export const store = reactive({
  cart: [],
  addElement(book:IBook){
    this.cart.push(book);
  }
})