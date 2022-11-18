  let fruit=["banana","apple","chikoo","pineapple"]
  console.log(fruit[0])
  console.log(fruit[fruit.length-1])

  for(a=0;a<4;a++){
    //console.log(a)
    console.log(fruit[a])
  }

  let year=[1990,1991,1992,1993,1994]
   let age=[]
  for(i=0;i<5;i++){
    //console.log(2022-year[i])
    let ag=2022-year[i]
    age.push(ag)
  }
  console.log(age)

  let numbers=[12,76,34,33,76,21,29,77]
above20=[]
  for(i=0;i<numbers.length;i++){
    if(numbers[i]>20){
   above20.push(numbers[i])
    }
  }
console.log(above20)

let marks=[11,34,67,96,56]
sum=0
for(i=0;i<marks.length;i++){
    sum=sum+marks[i]
}
console.log(sum)  