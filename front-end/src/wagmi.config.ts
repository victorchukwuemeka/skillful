import { http } from "wagmi"
import { mainnet, sepolia, holesky } from 'wagmi/chains'
import { getDefaultConfig } from "@rainbow-me/rainbowkit"

export const config = getDefaultConfig({
  appName: 'Merkle',
  projectId: 'e0dbc5182cbcaa2f7495c258383546d3',
  chains: [mainnet, sepolia, holesky],
  transports: {
      [mainnet.id]: http(),
      [sepolia.id]: http(),
      [holesky.id]: http(),
  },
  ssr: true
})
