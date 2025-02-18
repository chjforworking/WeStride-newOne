import type { Place } from '../api/Place'

interface MapProps {
    place: Place | null; //ถ้ายังไม่ search type : null ฉะนั้นต้องเขียนครอบ 2 type Place คือ type interface
}

export default function Map({ place }: MapProps) {
    return <div>THIS IS MAP</div>
}