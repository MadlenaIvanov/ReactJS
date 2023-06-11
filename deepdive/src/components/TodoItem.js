import React, { useEffect } from "react"

export default function TodoItem({
    id,
    text,
    onDelete
}) {

    useEffect(() => {
        console.log(`${id} - Mounted`);

        return () => {
            console.log('Unmount')
        }
    }, [id])

    return <li>{text} <button onClick={() => onDelete(id)}>x</button></li>
}