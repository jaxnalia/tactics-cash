<script>
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi'
import { pulsechain, pulsechainV4 } from '@wagmi/core/chains'
import { reconnect } from '@wagmi/core'

// 1. Get a project ID at https://cloud.walletconnect.com
const projectId = '0381a469bdba33979c1c3ba80c123dea'

// 2. Create wagmiConfig
const metadata = {
  name: 'Tactics DAO',
  description: 'Tactics DaO',
  url: 'https://tactics.cash',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [pulsechain, pulsechainV4]
const config = defaultWagmiConfig({
  // @ts-ignore
  chains,
  projectId,
  metadata
})
reconnect(config)

// 3. Create modal
const modal = createWeb3Modal({
  wagmiConfig: config,
  projectId,
  // @ts-ignore
  chains,
  defaultChain: pulsechain,
    tokens: {
      369: {
        address: '0x6Be2B5a38e04d42FB13d2D16a30Ad92988308125',
        image: 'https://bigjax.s3.eu-west-2.amazonaws.com/tactical-nuke.png',
      },
    },
    chainImages: {
    369: 'https://bigjax.s3.eu-west-2.amazonaws.com/PLSicon.png',
    943: 'https://bigjax.s3.eu-west-2.amazonaws.com/tPLS.png',
    1: 'https://seeklogo.com/images/E/ethereum-logo-EC6CDBA45B-seeklogo.com.png'
    },
    themeVariables: {
    '--w3m-color-mix': '#facc14',
    '--w3m-color-mix-strength': 0,
      '--w3m-accent': '#facc14'
    },
    allowUnsupportedChain: false
})
</script>

<w3m-network-button />
<w3m-button size="md" />


