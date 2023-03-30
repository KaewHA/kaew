const { template } = require('@babel/core')
const products = require('./data/products.js')
// import { products } from './data/products.js'
//64130500056 พัชรพล แปลนาค
function itemList(userItems) {
  const items = userItems

  const initialPage = () => {
    const div = document.getElementById('categories')
    div.addEventListener('click',filterItemsByCategoryHandler)
    showItems(items)
  }

  const filterItemsByCategoryHandler = (event) => {
      const fil = event.target.id
      
      const filter = items.filter(i => i.category === fil )
      const button = document.querySelectorAll('button')
      button.forEach(i => {
        i.style = 'background-color:lightgray'
      });

      const color = document.getElementById(fil)
      color.style = 'background-color:yellow'


      showItems(filter)

  }

  const showItems = (items) => {
    const ul = document.getElementById('items')
    ul.textContent = ''
    items.forEach(i => {
    const li = document.createElement('li')
    li.textContent = `ID:${i.id}, NAME:${i.name}, CATEGORY:${i.category}`
    ul.appendChild(li)
  });
  }

  return {
    initialPage,
    filterItemsByCategoryHandler,
    showItems
  }
}
module.exports = itemList
// export { itemList }
// const { initialPage, filterItemsByCategoryHandler, showItems } =
//   itemList(products)
// initialPage()
