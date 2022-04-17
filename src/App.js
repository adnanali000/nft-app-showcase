import { SectionWrapper, Features, Download } from "./components";
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

      <SectionWrapper
        title="Smart User Interface Marketplace"
        description="Experiencce a buttery UI of ProNef NFT Marketplace. Smooth constant colors of a fluent UI design."
        mockupImg={assets.homeCards}
        reverse
      />

      <Features />

      <SectionWrapper
        title="Deployment"
        description="ProNef is built using Expo which runs natively on all user's devices. You can easily get your app into people's hands."
        mockupImg={assets.homeHero}
        banner="banner"
      />

      <SectionWrapper
        title="Smart User Interface Marketplace"
        description="Experiencce a buttery UI of ProNef NFT Marketplace. Smooth constant colors of a fluent UI design."
        mockupImg={assets.homeCards}
        reverse
      />
    </>
  );
}

export default App;
