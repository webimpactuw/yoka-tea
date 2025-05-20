import OurStory from "./OurStory";
import Merch from "./Merch";
import FeatureDrink from "./FeatureDrink";
import SignatureDrinks from "./SignatureDrinks";
import BasedIn from "./basedIn";

export default function Main() {
    return (
        <div>
            <FeatureDrink></FeatureDrink>
            <OurStory/>
            <SignatureDrinks></SignatureDrinks>
            <BasedIn></BasedIn>
            <Merch/>
        </div>
    )
}