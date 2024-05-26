<script>
	import { Button } from '$lib/components/ui/button';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import NavBarMenuSmall from './NavBarMenuSmall.svelte';
	import WalletConnect from '../WalletConnect.svelte';
	import lean_cup from '../../images/logo.png';
	import {
	LineChart,
	Send,
	Twitter,
    Github,
	Percent
  } from "lucide-svelte";

</script>


<header class="supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/60 shadow-sm backdrop-blur">
	<div class="px-2 flex h-14 items-center">
		<div class="mr-4 hidden"> <!--hidden-->
			<nav class="relative py-2 flex items-center space-x-2 text-sm font-medium">
				<a href="/" class="text-xl font-bold mr-3 flex items-center space-x-2">
					<!-- <img src={lean_cup} alt="LEAN" class="w-8" /> -->
					TACTICS.CASH
				</a>
				<!-- home, charts -->
				<DropdownMenu.Root>
					<DropdownMenu.Trigger asChild let:builder>
						<!-- <Button variant="link" builders={[builder]}>Explore</Button> -->
					</DropdownMenu.Trigger>
					<DropdownMenu.Content class="w-auto">

						<!-- <DropdownMenu.Separator /> --> 
						<a href="/farm">
							<DropdownMenu.Item>
								<Percent class="h-5 w-5" />
								<DropdownMenu.Label>Staking</DropdownMenu.Label>
							</DropdownMenu.Item>
						</a>
						<!-- <DropdownMenu.Separator /> -->
						<a target="_blank" href="https://dexscreener.com/pulsechain/0x9961c2652b301c4a25256db05316d2be11cebab1">
							<DropdownMenu.Item>
								<LineChart class="h-5 w-5" />
								<DropdownMenu.Label>Price Chart</DropdownMenu.Label>
							</DropdownMenu.Item>
						</a>
						<!-- <DropdownMenu.Separator /> -->

					</DropdownMenu.Content>
				</DropdownMenu.Root>
				<!-- socials -->
				<DropdownMenu.Root>
					<DropdownMenu.Trigger asChild let:builder>
						<!-- <Button variant="link" builders={[builder]}>Social Media</Button> -->
					</DropdownMenu.Trigger>
					<DropdownMenu.Content class="w-auto">
						<a target="_blank" href="https://t.me/plsLEAN">
							<DropdownMenu.Item>
								<Send class="h-5 w-5" />
								<DropdownMenu.Label>Telegram</DropdownMenu.Label>
							</DropdownMenu.Item>
						</a>
						<!-- <DropdownMenu.Separator /> -->
						<a target="_blank" href="http://x.com/pls_lean">
							<DropdownMenu.Item>
								<Twitter class="h-5 w-5" />
								<DropdownMenu.Label>Twitter</DropdownMenu.Label>
							</DropdownMenu.Item>
						</a>
						<a target="_blank" href="https://github.com/LEAN-Token">
							<DropdownMenu.Item>
								<Github class="h-5 w-5" />
								<DropdownMenu.Label>Github</DropdownMenu.Label>
							</DropdownMenu.Item>
						</a>
						<!-- <DropdownMenu.Separator /> -->
						<!-- <a href="https://discord.gg/NRg34Rawc6" class={navItem}>
							<DropdownMenu.Item>
								<DropdownMenu.Label>Discord</DropdownMenu.Label>
							</DropdownMenu.Item>
						</a> -->
						
					</DropdownMenu.Content>
				</DropdownMenu.Root>
				<a href="/farm">
					<Button variant="link">Farm</Button>
				</a>
				<a href="/bridge">
					<Button variant="link">Bridge</Button>
				</a>
				<a href="/" target="_blank">
					<Button variant="link">Docs</Button>
				</a>
				
			</nav>
		</div>
		<NavBarMenuSmall />
		<div class="flex flex-1 items-center justify-between space-x-2 sm:space-x-4 md:justify-end">
			<div class="w-full flex-1 md:w-auto md:flex-none" />
			<nav class="flex items-center space-x-1">
				<WalletConnect />
				<!-- <LightSwitch /> -->
			</nav>
		</div>
	</div>
</header>

<!-- <header class={headStyle}>
	<nav class={navStyle}>
		<a href="/" class="mr-6 flex items-center space-x-2">
			<img src={lean_cup} alt="" class="w-10" />
		</a>
		<ul class="hidden items-center justify-center gap-6 md:flex">
			<li class={navItem}>
				<a target="_blank" href={chartLink}>Chart</a>
			</li>
			<li class={navItem}>
				<a target="_blank" href={teleLink}>Telegram</a>
			</li>
			<li class={navItem}>
				<a target="_blank" href={cordLink}>Discord</a>
			</li>
			<li class="pt-1.5 font-dm text-sm font-medium text-black">
				<a href="/onboard">Get Involved</a>
			</li> 
		</ul>
		<div class="flex-grow" />
		<div class="items-center justify-center gap-6 flex">
			<WalletConnect />
			<LightSwitch />
		</div>
	</nav>
	<NavBarSheet />
</header> -->
