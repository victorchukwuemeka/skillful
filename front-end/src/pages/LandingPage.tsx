import '../App.css'
import Hero from "../components/Hero"; 

// Default styles that can be overridden by your app
import "@solana/wallet-adapter-react-ui/styles.css";
import About from "../components/About";
import Validate from "../components/Validate";
import Hire from "../components/Hire";
 




//<WalletProvider autoConnect wallets={wallets}></WalletProvider>
function App() {

/*   // State to track profile initialization
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
  
 */ 
  return (
    <>
      <Hero />
      <About />
      <Validate />
      <Hire />
    </>
  );

   
}

 
export default App;
