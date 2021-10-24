import PackageSection from "../components/PackageSection"
import FirstSection from "../layouts/FirstSection"
import SecondSection from "../layouts/SecondSection"
import ThirdSection from "../layouts/ThirdSection"

function Packages(props) {
    return (
        <div className="packages">
            <PackageSection getData={props.getData} />
            <FirstSection />
            <SecondSection />
            <ThirdSection />
        </div>
    )
}

export default Packages
