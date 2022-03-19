// shared state example and why we avoid it

const obj1 = {val: 3}

const obj2 = {val: 3}

console.log("\n--- With 'shared state' ---\n")

console.log("obj1 için input -->",obj1)
console.log("obj2 için input -->",obj2)

const f1 = (object) => object.val += 1 
const f2 = (object) => object.val *= 2 

const result1 = f1(obj1)
const result2 = f2(obj1)

const result3 = f2(obj2)
const result4 = f1(obj2)

console.log("obj1 için output -->",obj1)
console.log("obj2 için output -->",obj2)
console.log("result1 (f1) için output -->",result1)
console.log("result2 (f2) için output -->",result2)
console.log("result3 (f2) için output -->",result3)
console.log("result4 (f1) için output -->",result4)
// her iki obj de aslında aynı val değerini input olarak 
// verirken outputlar değişiyor fonksiyonların çağrılma sıraları 
// değiştiği için.. aynı zamanda fonksiyonlar her seferinde 
// farklı sonuçlar da dönüyor

console.log("\n--- With 'no shared state' ---\n")

const obj3 = {val: 3}

const obj4 = {val: 3}

console.log("obj3 için input -->",obj3)
console.log("obj4 için input -->",obj4)

const f3 = (object) => {
    const newObj = {...object}
    return newObj.val += 1
} 
const f4 = (object) => {
    const newObj = {...object}
    return newObj.val *= 1
} 

const result5 = f3(obj3)
const result6 = f4(obj3)

const result7 = f4(obj4)
const result8 = f3(obj4)

console.log("obj3 için output -->",obj3)
console.log("obj4 için output -->",obj4)
console.log("result5 (f3) için output -->",result5)
console.log("result6 (f4) için output -->",result6)
console.log("result7 (f4) için output -->",result7)
console.log("result8 (f3) için output -->",result8)
// obj'ler hiç değişmedi. sadece fonksiyon yeni bir obj döndürür ama 
// onu bir yere eşitlersek sonucu görebiliriz.. fonksiyonlar her 
// zaman aynı değeri veriyor
