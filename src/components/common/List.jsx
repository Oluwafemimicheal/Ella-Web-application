
const List = ({ listText, onClick }) => {
  return <li onClick={onClick} className="cursor-pointer py-1 px-3 hover:bg-amber-600 hover:text-white rounded-sm">{listText}</li>
}

export default List
