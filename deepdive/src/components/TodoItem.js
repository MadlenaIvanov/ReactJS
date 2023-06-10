export default function TodoItem({
    text
}) {
    return <li>{text} <button onClick={() => console.log('delete')}>x</button></li>
}