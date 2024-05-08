'use client'

import { useEffect, useState } from "react"
import { updateData } from "../../action"

export default function Editform ({data}: any) {

    const [userName, setName] = useState(data.name)


    return (
        <form action={updateData}>
        <input type="hidden" name='id' value={data.id} />
        <input type="text" name="name" value={userName} onChange={(e) => {
            setName(e.target.value)
        }} placeholder="enter name" className="border border-gray-200 p-2" />

        <button className="block mt-4 border border-gray-200 rounded-md p-1" type="submit">Update</button>
      </form>
    )
}