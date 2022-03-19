// shared state example and why we avoid it

const obj1 = {val: 3}

const obj2 = {val: 3}

console.log("\n--- With 'mutable' ---\n")

console.log("obj1 ilk hali -->",obj1)
console.log("obj2 ilk hali -->",obj2)

const f1 = (object) => object.val += 1 
const f2 = (object) => object.val *= 2 

const result1 = f1(obj1)
const result2 = f2(obj1)

const result3 = f2(obj2)
const result4 = f1(obj2)

console.log("obj1 son hali -->",obj1)
console.log("obj2 son hali -->",obj2)
console.log("f1 - obj1 için output -->",result1)
console.log("f1 - obj2 için output -->",result4)
console.log("f2 - obj1 için output -->",result2)
console.log("f2 - obj2 için output -->",result3)
console.log("f1 - obj1 için output -->",f1(obj1)) // *** burada obj1 içeriği değiştiği için aynı inputa farklı sonuç döner
console.log("f2 - obj1 için output -->",f2(obj1)) // *** burada obj1 içeriği değiştiği için aynı inputa farklı sonuç döner
console.log("f1(f2) - obj1 için output -->",f1({val:f2(obj1)}))
console.log("f2(f1) - obj1 için output -->",f2({val:f1(obj1)}))
console.log("f1(f2) - obj2 için output -->",f1({val:f2(obj2)}))
console.log("f2(f1) - obj2 için output -->",f2({val:f1(obj2)}))
console.log("obj1 en son hali -->",obj1)
console.log("obj2 en son hali -->",obj2)
// her iki obj de aslında aynı val değerini input olarak 
// verirken outputlar değişiyor fonksiyonların çağrılma sıraları 
// değiştiği için.. aynı zamanda fonksiyonlar her seferinde 
// farklı sonuçlar da dönüyor

console.log("\n--- With 'immutable' ---\n")

const obj3 = {val: 3}

const obj4 = {val: 3}

console.log("obj3 ilk hali -->",obj3)
console.log("obj4 ilk hali -->",obj4)

const f3 = (object) => {
    const newObj = {...object}
    return newObj.val += 1
} 
const f4 = (object) => {
    const newObj = {...object}
    return newObj.val *= 2
} 

const result5 = f3(obj3)
const result6 = f4(obj3)

const result7 = f4(obj4)
const result8 = f3(obj4)

const result9 = f3({val:f4(obj3)})
const result10 = f4({val:f3(obj3)})

const result11 = f3({val:f4(obj4)})
const result12 = f4({val:f3(obj4)})


console.log("obj3 son hali -->",obj3)
console.log("obj4 son hali -->",obj4)
console.log("f3 - obj3 için output -->",result5)
console.log("f4 - obj3 için output -->",result6)
console.log("f3 - obj4 için output -->",result8)
console.log("f4 - obj4 için output -->",result7)
console.log("f3 - obj3 için output -->",f3(obj3)) // *** burada obj1 içeriği değişmediği için aynı inputa aynı sonuç döner
console.log("f4 - obj3 için output -->",f4(obj3)) // *** burada obj1 içeriği değişmediği için aynı inputa aynı sonuç döner 
                                                  // (kısmi no shared state sağlandı)
console.log("f3(f4) - obj3 için output -->",result9) 
console.log("f4(f3) - obj3 için output -->",result10) // *** burada obj3 içeriği değişmediği halde aynı inputa farklı sonuçlar döndü 
                                                      // çünkü henüz "no shared state"i tam olarak uygulamadık. sadece verileri 
                                                      // immutable hale getirdik
console.log("f3(f4) - obj4 için output -->",result11)
console.log("f4(f3) - obj4 için output -->",result12)
console.log("obj3 en son hali -->",obj3)
console.log("obj4 en son hali -->",obj4)
// obj'ler hiç değişmedi. sadece fonksiyon yeni bir obj döndürür ama 
// onu bir yere eşitlersek sonucu görebiliriz.. fonksiyonlar her 
// zaman aynı inputa aynı çıktıyı veriyor
