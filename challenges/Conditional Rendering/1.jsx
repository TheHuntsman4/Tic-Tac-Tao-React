function Item1({name,isPacked}){
    return (<li>
    {isPacked ? name + ' ✔' : name+'❌'}
  </li>
           );
      }
  function Item({ name, isPacked }) {
    if (isPacked) {
      return <li className="item">{name} ✔</li>;
    }
    return <li className="item">{name} ❌ </li>;
  }
  
  export default function PackingList() {
    return (
      <section>
        <h1>Sally Ride's Packing List</h1>
        <ul>
          <Item1 
            isPacked={true} 
            name="Space suit" 
          />
          <Item1 
            isPacked={true} 
            name="Helmet with a golden leaf" 
          />
          <Item1
            isPacked={false} 
            name="Photo of Tam" 
          />
        </ul>
      </section>
    );
  }
  