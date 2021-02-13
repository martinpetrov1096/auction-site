import { useRouter } from 'next/router';





export default function Car({ car }) {

   const router = useRouter();
   const { id } = router.query;

   return(<>
      <h1>Hello {id}</h1>
      <img src={car.image}/>
   </>);
}

export async function getStaticProps({ params }) {
   const req = await fetch(`http://localhost:3000/${params.id}.json`);
   const data = await req.json();

   return {
      props: { car: data}
   }
}

export async function getStaticPaths() {
   const data = [ 'ford', 'tesla'];

   const paths = data.map((car) => {
      return { params: {id: car} };
   });

   return {
      paths,
      fallback: false
   };
}