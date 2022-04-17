import { SectionWrapper,Features,Download} from "./components";
import assets from './assets'
const App = () => {
  return (
    <>
      <SectionWrapper
        title="Your own store of Nifty NFTs.Start Selling & Growing"
        description="Buy,store,collect NFTs,exchange & earn crypto. Join 25+ million people using ProNef MarketPlace."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
    </>
  );
}

export default App;
