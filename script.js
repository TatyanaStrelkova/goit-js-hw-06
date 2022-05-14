const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],


//   removePotion(potionName) {
//   for (let i = 0; i < this.potions.length; i+=1) {
//     if (potionName === this.potions[i].name) {
//       this.potions.splice(i, 1);
//     }   
//   }
//   },
//   updatePotionName(oldName, newName) {
//     for (let i = 0; i < this.potions.length; i+=1) {
//       if (oldName === this.potions[i].name) {
//         this.potions[i].name = newName;
//         ;
//         }   
//         }
//         return `Potion ${oldName} is not in inventory!`
// },
}




/* Значение свойства atTheOldToad.removePotion это метод объекта

Для исходного объекта после вызова метода atTheOldToad.removePotion("Dragon breath"), в свойстве potions будет массив[{ name: "Speed potion", price: 460 }, { name: "Stone skin", price: 520 }]

Для исходного объекта после вызова метода atTheOldToad.removePotion("Speed potion"), в свойстве potions будет массив [ { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 }]

Значение свойства atTheOldToad.updatePotionName это метод объекта

Для исходного объекта после вызова метода atTheOldToad.updatePotionName("Dragon breath", "Polymorth"), в свойстве potions будет массив[{ name: "Speed potion", price: 460 }, { name: "Polymorth", price: 780 }, { name: "Stone skin", price: 520 }]

Для исходного объекта после вызова метода atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"), в свойстве potions будет массив[{ name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Invulnerability potion", price: 520 }]
 */






 