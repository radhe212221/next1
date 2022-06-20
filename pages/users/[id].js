import axios from "axios";
import { useRouter } from "next/router";
import UserView from "../../src/views/user-view";
export default function App(pageData) {
  // console.log("pageData",pageData)
  const router = useRouter();
  return (
    <div>
      <h1>{pageData?.id || 0}</h1>
      <UserView data={pageData?.data} />
    </div>
  );
}
export async function getServerSideProps(context) {
  let id = context.query.id;
  let user = await axios
    .get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((d) => d.data)
    .catch((e) => null);
  return {
    props: { data: user, id }, // will be passed to the page component as props
  };
}
