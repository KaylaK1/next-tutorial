// brackets make the route dynamic
// cars/lambo

// Allows us to access query params from url
import { useRouter } from 'next/router'

// anything inside this component will be rendered to the head of doc
import Head from 'next/head';

export default function Car({ car }) {

    const router = useRouter()
    const { id } = router.query
    return (<>
        <Head>
            <title>{car.color} {car.id}</title>
        </Head>
        <h1>Hello {id}</h1>
        <img src={car.image} width="300px" />
    </>)
}

// Server Side Rendering - content is generated on a server when requested
// great when data is constantly changing
// slower, inefficient data caching
// Does everything as below - but for each request, instead of at build time
// We can apply both at the same time.
export async function getServerSideProps({ params }) {
    const req = await fetch(`http://localhost:3000/${params.id}.json`);
    const data = await req.json();

    return {
        props: { car: data },
    }
}


// All below was server side generation
// Will fetch the data for this component
// getStaticProps() - tells next to prerender page
// Next will automatically call annd send the result to the component as a prop
// Good for pages that don't change often
// export async function getStaticProps({ params }) {
//     const req = await fetch(`http://localhost:3000/${params.id}.json`);
//     const data = await req.json();

//     // each prop will be able to be access by the component
//     return {
//         props: { car: data },
//     }
// }

// Next doesn't know how many pages we have associated to a dynamic route
// It needs to know which dynamic pages to pre-render - it needs to know
// the ids in advance
// tells next which dynamic pages to render
// can fetch data from an api or database - then it returns a path object
// that contains an array for every possible url
// right now: dodge and lambo
// export async function getStaticPaths() {

//     const req = await fetch('http://localhost:3000/cars.json');
//     const data = await req.json();

//     const paths = data.map(car => {
//         return { params: { id: car } }
//     })

//     return {
//         paths,
//         fallback: false
//     };
// }
