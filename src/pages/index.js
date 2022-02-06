import * as React from 'react'
import Hero from 'components/templates/Hero/Hero'
import Offers from 'components/templates/Offers/Offers'
import Facilities from 'components/templates/Facilities/Facilities'
import OwnOffice from 'components/templates/OwnOffice/OwnOffice'
import News from 'components/templates/News/News'
import Gallery from 'components/templates/Gallery/Gallery'

const IndexPage = () => {
    return (
        <div>
            <Hero></Hero>
            <Offers></Offers>
            <Facilities></Facilities>
            <OwnOffice></OwnOffice>
            <News></News>
            <Gallery></Gallery>
        </div>
    )
}

export default IndexPage
