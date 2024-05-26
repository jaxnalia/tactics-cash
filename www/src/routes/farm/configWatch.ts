import { http, createConfig } from '@wagmi/core'
import { pulsechain, pulsechainV4 } from '@wagmi/core/chains'

export const config = createConfig({
  chains: [pulsechain, pulsechainV4],
  transports: {
    [pulsechain.id]: http(),
    [pulsechainV4.id]: http(),
  },
})