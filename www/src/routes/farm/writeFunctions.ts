import { config } from './wagmiConfig'
import { writeContract } from '@wagmi/core'
import { abi } from './abi'

export async function approveTokens(address: any, spender: any, amount: any, chainId: any) {
    const result = await writeContract(config, {
        abi,
        address: address,
        functionName: 'approve',
        args: [
          spender,
          amount,
        ],
        chainId: chainId, 
    })
    console.log(result)
    return {
        result
    }
}
