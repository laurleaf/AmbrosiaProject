var shopList = [];
function addToShopList(){ //adds a new item from the user to the shopping list
  currfood = document.getElementById("foodName")
  shopList.push(currfood)
  document.write(shopList)
}
