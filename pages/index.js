import axios from "axios";
import UsersView from "../src/views/users-views";
export default function Home(pageData) {
  // console.log("lkj",pageData)
  return (
    <>
      <h1>home page</h1>
      <UsersView data={pageData.data} />
    </>
  );
}

export async function getServerSideProps(context) {
  const users = await axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.data)
    .catch((e) => []);
  return {
    props: { data: users }, // will be passed to the page component as props
  };
}
