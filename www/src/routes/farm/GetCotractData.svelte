<script>
import { onMount } from 'svelte';
import { readContract } from '@wagmi/core'
import { tokensEarned, tokensStaked, tokenBalance, lpTokenBalance, tokenEmissionPerSec } from './contractData';
import { getAccount } from '@wagmi/core'
import { config } from './wagmiConfig'



onMount(async () => {
    const account = getAccount(config)
    console.log(account)
})

</script>
