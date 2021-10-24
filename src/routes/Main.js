import Banner from "../components/Banner"
import FirstSection from "../layouts/FirstSection"
import SecondSection from "../layouts/SecondSection"
import ThirdSection from "../layouts/ThirdSection"
function Main() {
    return (
        <div className="main">
            <Banner />
            <FirstSection />
            <SecondSection />
            <ThirdSection />
        </div>
    )
}

export default Main
