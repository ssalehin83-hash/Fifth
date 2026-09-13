
import './App.css'
import Nav from './Nav';
import Banner from './Banner';
import Cards from './Cards';
import { Suspense } from 'react';
import type { Ione } from './types/onetype';
import Footer from './Footer';


const oneFetch=async() :Promise<Ione[]>=>{
  const res=await fetch('/public/data.json')
  const data=await res.json()
  return data;
}

function App() {
  const onePromise=oneFetch()

  return (
    <>
     <Nav></Nav>
     <Banner></Banner>
    <Suspense fallback={ <p>Loading.....</p> }> 
     <Cards onePromise={onePromise} />
    </Suspense>
    <Footer/>
    </>
  )
}

export default App
