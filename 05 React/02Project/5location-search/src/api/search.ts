import type { Place } from "../api/Place";
/*
features.geometry.coordinates ARRNUMBER
features.properties.display_name STRING
features.properties.place_id NUMBER
*/
interface SearchResponse {
  features: Feature[]; //ใส่ [] เพื่อระบุว่า SearchResponse เป็น Array และถ้าเราไปดูใน log จะเห็นได้ว่า มันมีหลายตัว feature[0] feature[1] เป็นต้น
}
interface Feature {
  geometry: Geometry;
  properties: Properties;
}
interface Geometry {
  coordinates: number[];
}
interface Properties {
  display_name: string;
  place_id: number;
}

export const search = async (term: string) => {
  const res = await fetch(
    `https://nominatim.openstreetmap.org/search?q=${term}&format=geojson&addressdetails=1&layer=address&limit=5`
  );
  const data = (await res.json()) as SearchResponse;
  //อีกรูปแบบการเขียนคือ const data: SearchResponse = await res.json()

  const places: Place[] = data.features.map((feature) => {
    return {
      id: feature.properties.place_id,
      name: feature.properties.display_name,
      longitude: feature.geometry.coordinates[0],
      latitude: feature.geometry.coordinates[1],
      /*
        places : Place[] มันมาจาก interface Place การที่เราสร้าง interface Place
        เหมือนเป็นการสร้าง DOC ไว้ให้ component อื่นๆอ้างอิง ซึ่ง const places ก็มีการอ้างอิง Place[]
        เหมือนกัน เมื่อเรามีการอ้าง Place[] แล้ว เราก็ต้องเขียน id ,name ,logitude ,latitude
        ให้เหมือนกันด้วย
        */
    };
  });
  return places;
};
