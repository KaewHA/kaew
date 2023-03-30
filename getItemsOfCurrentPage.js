const { template } = require('@babel/core')
//write your student id, firstname, and lastname here 
function getItemsOfCurrentPage(allItems, currentPage, rowsPerPage) {
    if(allItems === undefined||allItems === null)return undefined
  if(currentPage<=0||rowsPerPage<=0)return allItems
  let start = (currentPage-1)*rowsPerPage,array=[]
  
  for (let i = 0; i < rowsPerPage; i++,start++) {
      if(start >= allItems.length)break
      array.push(allItems[start])
  }
  return array
}
module.exports = getItemsOfCurrentPage
