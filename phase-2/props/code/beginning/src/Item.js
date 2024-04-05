export default function Item({e}){
    return (<h2 key={e.id}>{e.name} | ${e.price}</h2>)
}