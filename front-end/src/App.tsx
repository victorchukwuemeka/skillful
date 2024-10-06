import "./App.css";
import LandingPage from './pages/LandingPage.tsx'
import { ReactNode } from "react"
import { WagmiProvider } from "wagmi"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit"
import { config } from "../src/wagmi.config.ts"
import '@rainbow-me/rainbowkit/styles.css';
import '@rainbow-me/rainbowkit/styles.css';


// Adjust the path based on your folder structure
const queryClient = new QueryClient()

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={darkTheme({
            accentColor: '',
            accentColorForeground: 'black',
            borderRadius: 'small',
            fontStack: 'satoshi',
            overlayBlur: 'small',
            })}
        >

          <LandingPage />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>

  );
}

export default App;
