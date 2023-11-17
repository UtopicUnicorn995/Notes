
export default function TabButton({children, onSelect, isSelected}){


    return (
       <li>
         <button className={isSelected} onClick={onSelect}>{children}</button>
       </li>
    )
}