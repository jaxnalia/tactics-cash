<script lang="ts">
	import * as Tabs from '$lib/components/ui/tabs'; //	UI
	import * as Card from '$lib/components/ui/card';
	import * as Tooltip from "$lib/components/ui/tooltip/index.js";
	import { Button, buttonVariants } from "$lib/components/ui/button/index.js";
	import * as AlertDialog from "$lib/components/ui/alert-dialog";
	import { Input } from "$lib/components/ui/input/index.js";
	import { Label } from "$lib/components/ui/label/index.js";

	import pls from "$lib/images/pls.png";	// IMAGES
	import plsx from "$lib/images/plsx.png";
	import inc from "$lib/images/inc.png";
	import nuke from "$lib/images/tactical-nuke.png";
	import care from "$lib/images/Care_Package.webp"

    import { Plus, Minus } from "lucide-svelte"; // ICONS
	import { ExternalLink } from 'radix-icons-svelte';

	import { getAccount } from '@wagmi/core'	
	import { getClient } from '@wagmi/core'	//	WEB3
    import { watchAccount } from '@wagmi/core'
	import { config } from './wagmiConfig'
	import { approveTokens, depositLP, withdrawLP } from './writeFunctions';
	import { parseEther } from 'viem';
	import { formatEther } from 'viem'
	import { readContract } from '@wagmi/core'
	import { abi } from './abi'
    import { onMount } from 'svelte';
	import GetCotractData from './GetCotractData.svelte';
	import { watchClient } from '@wagmi/core'

    let chainid: number | undefined
	let isConn: boolean
	let account: any
	let allowance0: any = 0
	let staked0: any = 0
	let balance0: any = 0
	let earned0: any = 0

	const accInit = getClient(config)
	chainid = accInit.chain.id
	console.log(accInit)
	
	async function getAllowance0(address: any) {
		const result = await readContract(config, {
			abi,
			address: '0x656Bb0ded20F8DEF1053D43947E80a40880316A7',	//	tNUKE-tWPLS (0)
			functionName: "allowance",
			args: [
				address,    //  spender
				"0x648bc4DDD5743Ef6681c84F43C86D2BdB48762F9",   // masterchef
			]
		})
		allowance0 = result
		return {
			result
		}
	}

	async function getStaked0(address: any) {
		const result = await readContract(config, {
			abi,
			address: '0x656Bb0ded20F8DEF1053D43947E80a40880316A7',	//	tNUKE-tWPLS (0)
			functionName: "allowance",
			args: [
				address,    //  spender
				"0x648bc4DDD5743Ef6681c84F43C86D2BdB48762F9",   // masterchef
			]
		})
		allowance0 = result
		return {
			result
		}
	}

	async function getEarned0(pid: any, address: any) {
		const result = await readContract(config, {
			abi,
			address: '0x648bc4DDD5743Ef6681c84F43C86D2BdB48762F9',	// masterchef
			functionName: "pendingTokens",
			args: [
				pid, 	//	Pool ID
				address,    //  Client address
			]
		})
		earned0 = formatEther(result)
		return {
			result
		}
	}
	
    watchAccount(config, {
        onChange(accountData) {
			const acc = getAccount(config)
			isConn = acc.isConnected
            chainid = accountData.chainId
			account = acc
			getAllowance0(acc.address)
			getEarned0(0, acc.address)
			console.log("earned", earned0)
        }
    })

	watchClient(config, {
        onChange(clientData) {
			console.log(clientData)
        }
    })

	$: numberOfTokens = '';
    $: parsedNumberOfTokens = parseEther(numberOfTokens);
  
    const handleInputChange = (e: any) => {
    numberOfTokens = e.target.value;
    parsedNumberOfTokens = parseEther(numberOfTokens);
    console.log(parsedNumberOfTokens);	//DEBUG
    };

	async function approveParsedTokens0() {
		const result = await approveTokens(
			"0x656Bb0ded20F8DEF1053D43947E80a40880316A7", //	tNUKE/tWPLS lp
			"0x648bc4DDD5743Ef6681c84F43C86D2BdB48762F9", //	MasterChef
			parsedNumberOfTokens,	//	amount
			943,	// chainid
		)
		console.log(result)
	}

	async function deposit0() {
		const result = await depositLP(
			0, //	Pool ID
			parsedNumberOfTokens,	//	amount
			943,	// chainid
		)
		console.log(result)
	}

	async function withdraw0() {
		const result = await withdrawLP(
			0, //	Pool ID
			parsedNumberOfTokens,	//	amount
			943,	// chainid
		)
		console.log(result)
	}

	onMount(async () => {
		getEarned0(0, account.address)
		getAllowance0(account.address)
	})
</script>
<svelte:head>
	<title>Farm / TACTICS</title>
</svelte:head>

<GetCotractData />

<div style="background-color: --background;" class='relative flex flex-col items-center backdrop-blur'>
	<div class="h-10" />
	<h1 class='font-sans uppercase text-xl sm:text-3xl font-extrabold flex flex-col container leading-none'>
		<span
			class="text-4xl sm:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-300"
			>Tactical Farms</span
		>Stake Tokens to earn

	</h1>
	<div class="h-10 h-10" />
	<Tabs.Root value="farm" class="w-96 sm:w-128 md:w-180 mb-10">
		<div class="flex justify-end">
			<Tabs.List class="grid w-full grid-cols-2 sm:max-w-xs">
				<Tabs.Trigger value="farm">Liquidity Farm</Tabs.Trigger>
				<Tabs.Trigger value="ss">Single Staking</Tabs.Trigger>
				
			</Tabs.List>
		</div>
		
		<Tabs.Content value="ss">
			<Card.Root class="backdrop-blur w-96 sm:w-128 md:w-180">
				<Card.Header class="p-5">
					<h1 class="text-3xl font-bold">Single staking</h1>
					<Card.Title>Earn yield with no impermanent loss</Card.Title>
				</Card.Header>
				<Card.Content>
					<Card.Description>
						Coming soon ;)
					</Card.Description>
				</Card.Content>
				
				

				<Card.Footer class="space-x-3 flex justify-center p-4">
					<!-- <ApproveTokens />
					<ClaimRewards /> -->

					
				</Card.Footer>
			</Card.Root>
		</Tabs.Content>
		<Tabs.Content value="farm"> 
			<Card.Root class="backdrop-blur w-96 sm:w-128 md:w-180">

				{#key chainid || isConn}

					<Card.Header class="p-5">
						<h1 class="text-3xl font-bold">Liquidity Farm</h1>
						{#if chainid == 943}
							<Card.Title>Stake Testnet PulseX V1 liquidity & earn <span class="font-bold">tCARE</span></Card.Title>
						{:else}
							<Card.Title>Stake PulseX V2 liquidity & earn <span class="font-bold">CARE</span></Card.Title>
						{/if}
						

						<div style="margin-top: -2.375rem;" class="hidden sm:flex justify-end">
							<Tooltip.Root>
								{#if chainid == 943}
									<Tooltip.Trigger>
										<span class="font-semibold" style=""><span class="font-bold">tCARE</span> per block: 10</span>
									</Tooltip.Trigger>
									<Tooltip.Content>
										86400 tCARE per day
									</Tooltip.Content>
								{:else if chainid == 369}
									<Tooltip.Trigger>
										<span class="font-semibold" style=""><span class="font-bold">CARE</span> per block: --</span>
									</Tooltip.Trigger>
									<Tooltip.Content>
										-- CARE per day
									</Tooltip.Content>
								{:else}
									<Tooltip.Trigger>
										<span class="font-semibold" style=""><span class="font-bold">CARE</span> per block: --</span>
									</Tooltip.Trigger>
									<Tooltip.Content>
										-- CARE per day
									</Tooltip.Content>
								{/if}
							</Tooltip.Root>
						</div>
						
					</Card.Header>
				
					<Card.Content class="p-5 py-0 text-center">
					
						{#if isConn || accInit.chain.id >= 1}	
                            {#if chainid == 369}
                                <p>Connected to PulseChain Mainnet farm.</p>

                                <div class="flex justify-between mb-2">
                                    <div class="relative bg-gradient-to-t from-white/5 to-white/15 rounded-sm py-3 px-2 w-full text-right px-3">
            
                                        <div style="transform: translate(0, 8px)">
                                            
                                            <img style="position: absolute; transform: translate(0px, 0px);" src={nuke} alt="NUKE" width="48">
                                            <img style="position: absolute; transform: translate(0px, 0px);" src={plsx} alt="PLSX" width="20">
                                        </div>
                                            
                                            
                                        <!-- <span class="absolute sm:hidden" style="left:0; transform: translate(72px, 0px); color: #beee11;"><strong class="text-md">0.00</strong>%</span> -->
                                        <p class="text-left ml-16">Stake <strong>NUKE-PLSX</strong> earn <strong>CARE</strong></p>
                                        
                                            <div class="flex justify-end">
                                                <span class="text-xs p-1 mr-2" style="line-height: 2.2;">APR <span style="color: #beee11;"><strong class="text-lg">0.00</strong>%</span></span>
                                                <span class="text-xs p-1" style="line-height: 2.2;"><strong>CARE</strong> earned </span>
                                                <Button variant="outline" class="p-2">0</Button>
                                                <Button class="p-1 ml-1"><Minus /></Button>
                                                <Button class="p-1 ml-1"><Plus /></Button>
                                            </div>
                                    </div>
                                </div>
            
                                <div class="flex justify-between mb-2">
                                    <div class="relative bg-gradient-to-t from-white/5 to-white/15 rounded-sm py-3 px-2 w-full text-right px-3">
            
                                        <div style="transform: translate(0, 8px)">
                                            
                                            <img style="position: absolute; transform: translate(0px, 0px);" src={nuke} alt="NUKE" width="48">
                                            <img style="position: absolute; transform: translate(0px, 0px);" src={inc} alt="INC" width="20">
                                        </div>
                                            
                                            
                                        <!-- <span class="absolute sm:hidden" style="left:0; transform: translate(72px, 0px); color: #beee11;"><strong class="text-md">0.00</strong>%</span> -->
                                        <p class="text-left ml-16">Stake <strong>NUKE-INC</strong> earn <strong>CARE</strong></p>
                                        
                                            <div class="flex justify-end">
                                                <span class="text-xs p-1 mr-2" style="line-height: 2.2;">APR <span style="color: #beee11;"><strong class="text-lg">0.00</strong>%</span></span>
                                                <span class="text-xs p-1" style="line-height: 2.2;"><strong>CARE</strong> earned </span>
                                                <Button variant="outline" class="p-2">0</Button>
                                                <Button class="p-1 ml-1"><Minus /></Button>
                                                <Button class="p-1 ml-1"><Plus /></Button>
                                            </div>
                                        
                                    </div>
                                    
                                </div>
            
                                <div class="flex justify-between mb-2">
                                    <div class="relative bg-gradient-to-t from-white/5 to-white/15 rounded-sm py-3 px-2 w-full text-right px-3">
            
                                        <div style="transform: translate(0, 8px)">
                                            
                                            <img style="position: absolute; transform: translate(0px, 0px);" src={care} alt="CARE" width="48">
                                            <img style="position: absolute; transform: translate(0px, 0px);" src={nuke} alt="NUKE" width="20">
                                        </div>
            
                                            <!-- <span class="absolute sm:hidden" style="left:0; transform: translate(72px, 0px); color: #beee11;"><strong class="text-md">0.00</strong>%</span> -->
                                            <p class="text-left ml-16">Stake <strong>CARE-NUKE</strong> earn <strong>CARE</strong></p>
                                        
                                            <div class="flex justify-end">
                                                <span class="text-xs p-1 mr-2" style="line-height: 2.2;">APR <span style="color: #beee11;"><strong class="text-lg">0.00</strong>%</span></span>
                                                <span class="text-xs p-1" style="line-height: 2.2;"><strong>CARE</strong> earned </span>
                                                <Button variant="outline" class="p-2">0</Button>
                                                <Button class="p-1 ml-1"><Minus /></Button>
                                                <Button class="p-1 ml-1"><Plus /></Button>
                                            </div>
                                    </div>
                                    
                                </div>
            
                                <div class="flex justify-between mb-2">
                                    <div class="relative bg-gradient-to-t from-white/5 to-white/15 rounded-sm py-3 px-2 w-full text-right px-3">
            
                                        <div style="transform: translate(0, 8px)">
                                            
                                            <img style="position: absolute; transform: translate(0px, 0px);" src={care} alt="CARE" width="48">
                                            <img style="position: absolute; transform: translate(0px, 0px);" src={plsx} alt="PLSX" width="20">
                                        </div>
            
                                            <!-- <span class="absolute sm:hidden" style="left:0; transform: translate(72px, 0px); color: #beee11;"><strong class="text-md">0.00</strong>%</span> -->
                                            <p class="text-left ml-16">Stake <strong>CARE-PLSX</strong> earn <strong>CARE</strong></p>
                                        
                                            <div class="flex justify-end">
                                                <span class="text-xs p-1 mr-2" style="line-height: 2.2;">APR <span style="color: #beee11;"><strong class="text-lg">0.00</strong>%</span></span>
                                                <span class="text-xs p-1" style="line-height: 2.2;"><strong>CARE</strong> earned </span>
                                                <Button variant="outline" class="p-2">0</Button>
                                                <Button class="p-1 ml-1"><Minus /></Button>
                                                <Button class="p-1 ml-1"><Plus /></Button>
                                            </div>
                                    </div>
                                </div>
            
                                <div class="flex justify-between mb-2">
                                    <div class="relative bg-gradient-to-t from-white/5 to-white/15 rounded-sm py-3 px-2 w-full text-right px-3">
            
                                        <div style="transform: translate(0, 8px)">
                                            
                                            <img style="position: absolute; transform: translate(0px, 0px);" src={care} alt="CARE" width="48">
                                            <img style="position: absolute; transform: translate(0px, 0px);" src={inc} alt="INC" width="20">
                                        </div>
            
                                            <!-- <span class="absolute sm:hidden" style="left:0; transform: translate(72px, 0px); color: #beee11;"><strong class="text-md">0.00</strong>%</span> -->
                                            <p class="text-left ml-16">Stake <strong>CARE-INC</strong> earn <strong>CARE</strong></p>
                                        
                                            <div class="flex justify-end">
                                                <span class="text-xs p-1 mr-2" style="line-height: 2.2;">APR <span style="color: #beee11;"><strong class="text-lg">0.00</strong>%</span></span>
                                                <span class="text-xs p-1" style="line-height: 2.2;"><strong>CARE</strong> earned </span>
                                                <Button variant="outline" class="p-2">0</Button>
                                                <Button class="p-1 ml-1"><Minus /></Button>
                                                <Button class="p-1 ml-1"><Plus /></Button>
                                            </div>
                                    </div>
                                </div>
                            {:else if chainid == 943}
                                <p>Connected to PulseChain Testnet farm.</p>

								<div class="flex justify-between mb-2">
                                    <div class="relative bg-gradient-to-t from-white/5 to-white/15 rounded-sm py-3 px-2 w-full text-right px-3">
            
                                        <div style="transform: translate(0, 8px)">
                                            
                                            <img style="position: absolute; transform: translate(0px, 0px);" src={nuke} alt="NUKE" width="48">
                                            <img style="position: absolute; transform: translate(0px, 0px);" src={pls} alt="PLS" width="20">
                                        </div>
                                            
                                            
                                        <!-- <span class="absolute sm:hidden" style="left:0; transform: translate(72px, 0px); color: #beee11;"><strong class="text-md">0.00</strong>%</span> -->
                                        <p class="text-left ml-16">Stake <strong>tNUKE-tWPLS</strong> earn <strong>tCARE</strong></p>
                                            <div class="flex justify-end">
                                                <span class="text-xs p-1 mr-2" style="line-height: 2.2;">APR <span style="color: #beee11;"><strong class="text-lg">0.00</strong>%</span></span>
                                                <span class="text-xs p-1" style="line-height: 2.2;"><strong>tCARE</strong> earned </span>
                                                <Button variant="outline" class="p-2">{earned0}</Button>
												<!-- WITHDRAW FIELD -->
												<AlertDialog.Root>
													<AlertDialog.Trigger>
														<Button class="p-1 ml-1"><Minus /></Button>
													</AlertDialog.Trigger>
													<AlertDialog.Content class="sm:max-w-[425px]">
													  <AlertDialog.Header>
														<AlertDialog.Title>Withdraw tNUKE-tWPLS</AlertDialog.Title>
													  </AlertDialog.Header>
													  <div class="grid gap-4 py-4">
														<div class="grid grid-cols-4 items-center gap-4">
														  <Label for="amount" class="text-right">Amount</Label>
														  <Label for="amount" class="absolute right-0 mr-10 hover:underline">Max</Label>
														  <Input id="amount" placeholder="0" class="col-span-3" on:input={handleInputChange} bind:value={numberOfTokens} />
														</div>
													  </div>
													  <AlertDialog.Footer>
														<AlertDialog.Action on:click={withdraw0}>Confirm</AlertDialog.Action>
														<AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
													  </AlertDialog.Footer>
													</AlertDialog.Content>
												  </AlertDialog.Root>
                                                <!-- DEPOSIT FIELD -->
												<AlertDialog.Root>
													<AlertDialog.Trigger>
														<Button class="p-1 ml-1"><Plus /></Button>
													</AlertDialog.Trigger>
													<AlertDialog.Content class="sm:max-w-[425px]">
													  <AlertDialog.Header>
														<AlertDialog.Title>Deposit tNUKE-tWPLS</AlertDialog.Title>
													  </AlertDialog.Header>
													  <div class="grid gap-4 py-4">
														<div class="grid grid-cols-4 items-center gap-4">
														  <Label for="amount" class="text-right">Amount</Label>
														  <Label for="amount" class="absolute right-0 mr-10 hover:underline">Max</Label>
														  <Input id="amount" placeholder="0" class="col-span-3" on:input={handleInputChange} bind:value={numberOfTokens} />
														  
														</div>
													  </div>
													<AlertDialog.Footer>
														{#key parsedNumberOfTokens}
															{#if parsedNumberOfTokens > allowance0}
																<Button on:click={approveParsedTokens0}>Approve</Button>
															{:else}
																<AlertDialog.Action on:click={deposit0}>Confirm</AlertDialog.Action>
															{/if}
														{/key}
														<AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
													</AlertDialog.Footer>
													</AlertDialog.Content>
												  </AlertDialog.Root>
                                            </div>
                                    </div>
                                </div>

                            {:else}
                                <p class="text-yellow-500 font-bold text-md mt-2 mb-2">Wrong network. Switch to PulseChain.</p>
                            {/if}
						{:else}
							<div class="flex justify-center">
								<w3m-button class="text-black" size="md" label="Connect Wallet" balance="hide"/>
							</div>
							<p class="text-gray-500 text-sm mt-2 mb-2">Farms not showing? Click <a class="underline" href="/" data-sveltekit-reload>here</a> to reload.</p>
						
					
                        {/if}	
                    
					</Card.Content>
				{/key}
				<div style="justify-content: space-around;" class="px-6 py-2 flex flex-row">
					<span style="text-decoration: underline;" class="flex flex pb-3">
						<div></div>
						<a
							style="font-size: 12px;"
							href="https://bafybeicjuszlj6w3gg5mfszvo7z6ux4iaafhw62vfyfw27nm65bexodov4.ipfs.dweb.link/"
							target="_blank">View Contract
						</a>
							<ExternalLink size={10} />
							<!-- <Separator orientation="vertical" class="" /> -->
					</span>
					<span style="text-decoration: underline;" class="flex flex pb-3">
							<a
							style="font-size: 12px;"
							href="https://bafybeihiwe3inbfru7h6pesaj4siacbyx7t6o5qp3vwdz25n3p6ewlbnie.ipfs.dweb.link/#/add/V2/PLS/0x6Be2B5a38e04d42FB13d2D16a30Ad92988308125"
							target="_blank">Add Liquidity
						</a>
							<ExternalLink size={10} />
					</span>
					<span style="text-decoration: underline;" class="flex flex pb-3">
						<a
						style="font-size: 12px;"
						href="https://bafybeihiwe3inbfru7h6pesaj4siacbyx7t6o5qp3vwdz25n3p6ewlbnie.ipfs.dweb.link/#/?outputCurrency=0x6Be2B5a38e04d42FB13d2D16a30Ad92988308125"
						target="_blank">Trade
					</a>
						<ExternalLink size={10} />
					</span>
				</div>

				<Card.Footer class="p-0 flex justify-center">
					<!-- <ApproveTokens />
					<ClaimRewards /> -->

					
				</Card.Footer>
			</Card.Root>
		</Tabs.Content>
	</Tabs.Root>
	
	<!-- <div style="justify-content: center;" class="flex"> -->
		<!-- <Button
			target="_blank"
			href="https://app.pulsex.com/swap?outputCurrency=0x6Be2B5a38e04d42FB13d2D16a30Ad92988308125"
			style="line-height: 1.2; width: 12em; margin-top: 0.5em;"
			class="transition-colors justify-center block shadow-lg text-base text-white hover:text-gray-100 bg-green-500 hover:bg-green-300 hover:backdrop-blur-xl backdrop-blur-lg rounded-md"
		>
			BUY $LEAN
		</Button> -->
		<!-- <button
						style="margin: 10px;"
						class="block shadow-lg px-8 py-3 text-base font-medium text-gray-200 hover:text-gray-100 bg-gray-100/10 hover:bg-gray-200/30 hover:backdrop-blur-xl backdrop-blur-lg rounded-md md:py-4 md:text-lg md:px-8"
					>
						Learn More
					</button> -->
	<!-- </div> -->
</div>


