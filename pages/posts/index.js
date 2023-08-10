import Layout from "../../components/layout";

export default function Posts({lit}) {
  console.log(lit);
  return (
    <Layout>
      <h1>is it working?</h1>
    </Layout>
  )
}

export function getServerSideProps() {
  return {
    props: {
      lit : 2
    },
  }
}