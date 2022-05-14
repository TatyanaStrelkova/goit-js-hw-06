const categoriesRef = document.querySelector('#categories');
const categoriesItemsRef = categoriesRef.querySelectorAll('.item')

console.log(`Number of categories: ${categoriesRef.children.length}`);

categoriesItemsRef.forEach(item => { 
    console.log(`Category: ${item.firstElementChild.textContent}
    Elements: ${item.lastElementChild.children.length}`);
})



