import "./App.css";
import LandingPage from './pages/LandingPage.tsx'
import { useMemo } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { SolflareWalletAdapter } from "@solana/wallet-adapter-wallets";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  WalletModalProvider,
} from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";
import "./index.css";
 
// Default styles that can be overridden by your app
import "@solana/wallet-adapter-react-ui/styles.css";
 




//<WalletProvider autoConnect wallets={wallets}></WalletProvider>
function App() {

  // State to track profile initialization
     
      // State to track profile initialization
      
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
    
    
     
      return (
        <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets}>
          <WalletModalProvider>

          <LandingPage />
          </WalletModalProvider>
    </WalletProvider>
  </ConnectionProvider>
  );
}

export default App;
