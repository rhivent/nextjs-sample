import Link from 'next/link';
// import { useEffect,useState } from "react";

export default function List({ownersList}) {
  // const[owners,setOwners] = useState([]);

  // useEffect(() => {
  //   const loadData = async () => {
  //     const response = await fetch('https://jsonplaceholder.typicode.com/users');
  //     const ownersList = await response.json();
  //     setOwners(ownersList);
  //   }
  //   loadData();
  // },[])
  
  return <div>
    {ownersList.map(e => (
    <div>
      <Link as={`/${e.email}/${e.username}`} href="/[vehicle]/[person]">
        <a>Navigate to {e.username}'s {e.email }</a>
      </Link>
    </div>
    ))}
  </div>;
};

List.getInitialProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const ownersList = await response.json();
  return { ownersList };
};