import AboutHome from "../components/AboutHome"
import Header from "../components/Header"
import HomeBest from "../components/HomeBest"
import HomeBook from "../components/HomeBook"
import HomeOpinions from "../components/HomeOpinions"
import HomeServices from "../components/HomeServices"

function Home() {
  return (
    <>
    <Header/>
    <AboutHome/>
    <HomeServices/>
    <HomeBook/>
    <HomeBest/>
    <HomeOpinions/>
        
    </>
  )
}

export default Home