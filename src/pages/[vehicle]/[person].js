import { useRouter } from "next/router";

const Person = () => {
  const router = useRouter();
  console.log(router.query);
  return <h3>{router.query.person}'s {router.query.vehicle}</h3>;
};

export default Person;