import { searchPackages } from "../../api/queries/searchPackages";

//รับเข้ามาเป็น obj ตั้งชื่อให้ว่า request
export async function searchLoader({ request }: { request: Request }) {
  //อยากหาว่าคำที่ user search คืออะไรก็เข้าไปดูใน inspect แล้วเจอ URL เป็นตัวเก็บ input ของ user
  const { searchParams } = new URL(request.url);
  //สร้าง term เพื่อ get url ตัว term
  const term = searchParams.get("term");

  if (!term) {
    //http://localhost:5173/search?term=
    throw new Error("Search term must me provided");
  }

  const results = await searchPackages(term);
  //การ return ควรจะ return เป็น object เพราะ เวลาเราเพิ่มข้อมูลใหม่ๆ มันจะทำได้ง่ายกว่า
  return {
    searchResult: results,
  };
}
