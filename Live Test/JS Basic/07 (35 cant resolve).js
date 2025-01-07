/*
7.สร้างฟังก์ชั่นเรียงเลขคี่น้อยไปมาก โดยที่เลขคู่จะต้องอยู่ตำแหน่งเดิม (35 คะแนน)
ตัวอย่าง
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
*/

function sortOdd(arr){
    //สร้าง arr มาเก็บ odd กับ even
    const oddArr = [];
    const evenArr = [];
    //แยก num เป็น odd กับ even
    arr.forEach(num => {
        if(num % 2 == 0){
            evenArr.push(num);
        } else {
            oddArr.push(num);
        }
    });
    //oddArr เอามาเรียงลำดับ น้อยไปมาก
    oddArr.sort((a,b) => a - b);

    //รวบทั้งสอง arr เข้าด้วยกัน
    
}
