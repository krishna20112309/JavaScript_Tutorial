alert("hello krishna Kumar")
console.log("hello krishna Jaiswal")
console.log("console")
console.info("info")
console.warn("warn")
console.error("err")
console.assert("error" != false)
console.assert("error" == false)

console.time("ForLoop")
for (let i = 0; i < 500; i++) {
  console.log(233)
}
console.timeEnd("ForLoop")

console.time("whileLoop")
let i=0;
while(i<500){
  console.log(233)
  i++
}
console.timeEnd("whileLoop")