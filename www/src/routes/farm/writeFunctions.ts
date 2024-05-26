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

export async function depositLP(poolId: any, amount: any, chainId: any) {
    const result = await writeContract(config, {
        abi,
        address: '0x648bc4DDD5743Ef6681c84F43C86D2BdB48762F9',  // MasterChef
        functionName: 'deposit',
        args: [
          poolId,
          amount,
        ],
        chainId: chainId, 
    })
    console.log(result)
    return {
        result
    }
}

export async function withdrawLP(poolId: any, amount: any, chainId: any) {
    const result = await writeContract(config, {
        abi,
        address: '0x648bc4DDD5743Ef6681c84F43C86D2BdB48762F9',  // MasterChef
        functionName: 'withdraw',
        args: [
          poolId,
          amount,
        ],
        chainId: chainId, 
    })
    console.log(result)
    return {
        result
    }
}
