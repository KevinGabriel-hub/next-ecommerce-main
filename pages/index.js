import Head from 'next/head'
import Banner from '../components/Banner'
import Cats from '../components/Cats'
import MainFooter from '../components/MainFooter'
import MainHeader from '../components/MainHeader'
import Products from '../components/Products'

export default function Home({ categories }) {
  // console.log(urlFor(categories.cats[0].catImage).url())
  return (
    <div>
      <Head>
        <title>Home page</title>
      </Head>

      <MainHeader />
      <Banner />
      <Cats />
      <Products />
      <MainFooter />
    </div>
  )
}

// export async function getServerSideProps(context) {
//   console.log(context.req);
//   return {
//     props: {}
//   }
// }
