import { useMemo, useState} from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { SolflareWalletAdapter } from "@solana/wallet-adapter-wallets";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";
import "./index.css";
 
// Default styles that can be overridden by your app
import "@solana/wallet-adapter-react-ui/styles.css";
 




//<WalletProvider autoConnect wallets={wallets}></WalletProvider>
function App() {

  // State to track profile initialization
  const [isProfileInitialized, setIsProfileInitialized] = useState(false); 
  
  // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
  const network = WalletAdapterNetwork.Devnet;

  // You can also provide a custom RPC endpoint.
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
 
  const wallets = useMemo(
    () => [
      // if desired, manually define specific/custom wallets here (normally not required)
      // otherwise, the wallet-adapter will auto detect the wallets a user's browser has available
      new SolflareWalletAdapter(),
    ],
    [network],
  );


  const handleIsInitialized = () =>{
    setIsProfileInitialized(true);
  };
  
 
  return (
    <ConnectionProvider endpoint={endpoint}>
    <WalletProvider wallets={wallets}>
      <WalletModalProvider>
         <div className="landing-page">
           <header className="header">
            <h1 className="title">Welcome to SkillValidation</h1>
            <p className="">validate and show case your blockchain skill</p>
           </header>

           <div className="content">
            {isProfileInitialized?(
              <>
              <WalletMultiButton className="wallet-button"/>
              <h1 className="cta-text">connect your wallet to  get started </h1>
              </>
            ):(
              <div className="profile-init">
                <h2>initialize your profile</h2>
                <p>set your profile to start validating your skill</p>
                <button className="initial-button" onClick={handleIsInitialized}>
                  initialize profile
                </button>
              </div>
            )}
           </div>
         </div>
      </WalletModalProvider>
    </WalletProvider>
  </ConnectionProvider>
  
  );

   
}

 
export default App;
