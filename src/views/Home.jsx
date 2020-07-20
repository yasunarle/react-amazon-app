import React from "react"
// CSS
import "./Home.css"
// Components
import Product from "components/common/AppProduct"

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          title={"React Book"}
          price={14}
          rating={5}
          image={
            "https://prodimage.images-bn.com/pimages/9788850317714_p0_v1_s550x406.jpg"
          }
        />
        <Product
          title={"React Book"}
          price={14}
          rating={5}
          image={
            "https://prodimage.images-bn.com/pimages/9788850317714_p0_v1_s550x406.jpg"
          }
        />
      </div>
      {/* home__row */}
    </div>
  )
}
export default Home
