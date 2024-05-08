'use client'
import { deleteRow } from "../action"

export default function Deletebtn({item}: any) {
    return (
        <button onClick={() => {
            deleteRow(item.id)
        }}>delete</button>
    ) 
 }