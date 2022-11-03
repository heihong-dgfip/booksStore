import { describe, it, expect } from 'vitest'

import { store } from '../../views/store'


describe('test store', () => {
  it('should add a element', () => {
    let book =   { "id": 1, "title": "harry potter", "price": 10 };
    store.addElement(book);
    expect(store.cart).toContain(book);
  })
})
