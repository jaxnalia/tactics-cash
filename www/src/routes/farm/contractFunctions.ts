import { config } from './wagmiConfig'
import { writeContract } from '@wagmi/core'
import { readContract } from '@wagmi/core'
import { abi } from './abi'
import { formatEther } from 'viem'



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
        address: "0x693D0e3D1F2b6384ffe4FFDCa8AC74FE6b976b26",   // masterchef - mainnet
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
        address: "0x693D0e3D1F2b6384ffe4FFDCa8AC74FE6b976b26",   // masterchef - mainnet
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

export async function getUserinfo(pid: any, address: any) {
    const result = await readContract(config, {
        abi,
        address: "0x693D0e3D1F2b6384ffe4FFDCa8AC74FE6b976b26",   // masterchef - mainnet
        functionName: "userInfo",
        args: [
            pid, 	//	Pool ID
            address,    //  Client address
        ]
    })
    console.log(result)
    return {
        result
    }
}

export async function getAllowance(token: any, spender: any) {
    const result = await readContract(config, {
        abi,
        address: token,	//	tNUKE-tWPLS (0)
        functionName: "allowance",
        args: [
            spender,    //  spender
            "0x693D0e3D1F2b6384ffe4FFDCa8AC74FE6b976b26",   // masterchef - mainnet
        ]
    })
    console.log(result)
    return {
        result
    }
}

export async function testnet_depositLP(poolId: any, amount: any, chainId: any) {
    const result = await writeContract(config, {
        abi,
        address: '0x648bc4DDD5743Ef6681c84F43C86D2BdB48762F9',  // masterchef - testnet
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

export async function testnet_withdrawLP(poolId: any, amount: any, chainId: any) {
    const result = await writeContract(config, {
        abi,
        address: '0x648bc4DDD5743Ef6681c84F43C86D2BdB48762F9',  // masterchef - testnet
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

export async function testnet_getUserinfo(pid: any, address: any) {
    const result = await readContract(config, {
        abi,
        address: '0x648bc4DDD5743Ef6681c84F43C86D2BdB48762F9',	// masterchef - testnet
        functionName: "userInfo",
        args: [
            pid, 	//	Pool ID
            address,    //  Client address
        ]
    })
    console.log(result)
    return {
        result
    }
}

export async function testnet_getAllowance(token: any, spender: any) {
    const result = await readContract(config, {
        abi,
        address: token,	//	tNUKE-tWPLS (0)
        functionName: "allowance",
        args: [
            spender,    //  spender
            "0x648bc4DDD5743Ef6681c84F43C86D2BdB48762F9",   // masterchef - testnet
        ]
    })
    console.log(result)
    return {
        result
    }
}
