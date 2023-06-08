export default function ToDoListItem(props) {

    if (props.person) {
        console.log(props.person.name);
    }

    if(props.children > 0) {
        return <li style={{color: 'orange'}}>{props.children}</li>
    }

    return (
        <li style={{color: props.color}}>{props.children} - {props.person?.name}</li>
    )

}