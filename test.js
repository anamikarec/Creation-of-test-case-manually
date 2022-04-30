function test(description,fn){
    console.log(description);

    fn();
}
function expect(received){ 
    function toBe(expected){
        if(received === expected){
            console.log("test passed");
        }
        else{
            console.log("test failed");
            console.log(received,"received");
            console.log(expected,"expected");
        }
    }
    return {toBe}
}

// test("add 1 and 2, sum should be 3",()=>{
//     expect(1+2).toBe(3);
// })


const sum = (a,b)=>a+b;
const absDiff = (a,b)=> Math.abs(a-b);

// test("sum(5,3) should be 8",() => {
//     expect(sum(5,3)).toBe(8);
// })


// test("abs(3,4) should be 1",()=>{
//     expect(absDiff(3,4)).toBe(1);
// })