const Home = ({ posts }) => {

  const { id, city, street_name, street_address, zip_code } = posts;

  return (
    <div>
      <ul>
        <li>id: {id}</li>
        <li>city: {city}</li>
        <li>street_name: {street_name}</li>
        <li>street_address: {street_address}</li>
        <li>zip_code: {zip_code}</li>
      </ul>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://random-data-api.com/api/address/random_address')
  const posts = await res.json()

  return {
    props: {
      posts,
    },
    revalidate: 30
  }
}

export default Home;