<script>
	  import {
    Github,
	LineChart,
	Send,
	Twitter,
    Plus,
    Percent,
	PercentCircle,
    User,
    UserPlus,
	Home,
	Currency,
	ScrollText,
	Waypoints
  } from "lucide-svelte";
  	import { Button } from "$lib/components/ui/button";
  	import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
	import NavLogo from './NavLogo.svelte'
	import { Separator } from "$lib/components/ui/separator";
</script>

	<DropdownMenu.Root>
		<DropdownMenu.Trigger >
		  <NavLogo /> <!--change to hamburger.-->
		  
		</DropdownMenu.Trigger>
		<DropdownMenu.Content class="w-44">
		  <!-- <DropdownMenu.Label>$LEAN</DropdownMenu.Label>
		  <DropdownMenu.Separator /> -->
		  <DropdownMenu.Group>

			<a href="/">
				<DropdownMenu.Item>
					<Home class="mr-2 h-5 w-5" />
					<span>Home</span>
					<!-- <DropdownMenu.Shortcut>⇧⌘P</DropdownMenu.Shortcut> -->
				</DropdownMenu.Item>
			</a>

			<a href="/farm">
				<DropdownMenu.Item>
					<Percent class="mr-2 h-5 w-5" />
					<span>Farm</span>
					<!-- <DropdownMenu.Shortcut>⇧⌘P</DropdownMenu.Shortcut> -->
				  </DropdownMenu.Item>
			</a>
			
			<!-- <DropdownMenu.Item>
			  <CreditCard class="mr-2 h-4 w-4" />
			  <span>Billing</span>
			  <DropdownMenu.Shortcut>⌘B</DropdownMenu.Shortcut>
			</DropdownMenu.Item> -->
			<!-- <DropdownMenu.Item>
			  <Settings class="mr-2 h-4 w-4" />
			  <span>Settings</span>
			  <DropdownMenu.Shortcut>⌘S</DropdownMenu.Shortcut>
			</DropdownMenu.Item> -->
			<!-- <DropdownMenu.Item>
			  <Keyboard class="mr-2 h-4 w-4" />
			  <span>Keyboard shortcuts</span>
			  <DropdownMenu.Shortcut>⌘K</DropdownMenu.Shortcut>
			</DropdownMenu.Item> -->
		  </DropdownMenu.Group>
		  <!-- <DropdownMenu.Separator /> -->
		  <DropdownMenu.Group>
			
			<!-- <DropdownMenu.Item>
			  <Plus class="mr-2 h-5 w-5" />
			  <span>Suggest Farm</span>
			</DropdownMenu.Item> -->
			<a href="https://dexscreener.com/pulsechain/" target="_blank">
				<DropdownMenu.Item>
					<LineChart class="mr-2 h-5 w-5" />
					<span>Price Chart</span>
				</DropdownMenu.Item>
			</a>

			<a href="/bridge">
				<DropdownMenu.Item>
					<Waypoints class="mr-2 h-5 w-5" />
					<span>Bridge</span>
				</DropdownMenu.Item>
			</a>

			<a href="/" target="_blank">
				<DropdownMenu.Item>
					<ScrollText class="mr-2 h-5 w-5" />
					<span>Docs</span>
				</DropdownMenu.Item>
			</a>
			
		  </DropdownMenu.Group>
		  <DropdownMenu.Separator />
		  
		  <DropdownMenu.Sub>
			<DropdownMenu.SubTrigger>
			  <UserPlus class="mr-2 h-5 w-5" />
			  <span>Social Media</span>
			</DropdownMenu.SubTrigger>
			<DropdownMenu.SubContent>
				<a href="https://t.me/TacticsPLS" target="_blank">
					<DropdownMenu.Item>
						<Send class="mr-2 h-5 w-5" />
						<span>Telegram</span>
					</DropdownMenu.Item>
				</a>
			  
			  	<a href="http://x.com/TacticsPLS" target="_blank">
					<DropdownMenu.Item>
						<Twitter class="mr-2 h-5 w-5" />
						<span>Twitter</span>
					</DropdownMenu.Item>
			  	</a>

				<a href="https://github.com/jaxnalia/tactics-cash-master" target="_blank">
					<DropdownMenu.Item>
						<Github class="mr-2 h-5 w-5" />
						<span>GitHub</span>
					</DropdownMenu.Item>
				</a>
			  
			  
			  
			</DropdownMenu.SubContent>
		  </DropdownMenu.Sub>
		  
		  <!-- <DropdownMenu.Item>
			<LifeBuoy class="mr-2 h-4 w-4" />
			<span>Support</span>
		  </DropdownMenu.Item> -->
		  <!-- <DropdownMenu.Item>
			<Cloud class="mr-2 h-4 w-4" />
			<span>Cloud Icon</span>
		  </DropdownMenu.Item> -->

		  <!-- <DropdownMenu.Separator />
		  <DropdownMenu.Item>
			<LogOut class="mr-2 h-4 w-4" />
			<span>Disconnect</span>
		  </DropdownMenu.Item> -->

		</DropdownMenu.Content>
	  </DropdownMenu.Root>
	
		<a href="/" class="ml-2 text-xl font-bold mr-3 flex items-center space-x-2">

			TACTICS.CASH
		</a>
	






		<!-- <div class="p-4">

			<h1 class="text-2xl font-semibold">LEAN</h1>
			<ul class="mt-4">
				<li class="mb-2"><a href="/" class="block hover:text-indigo-400">Home</a></li>
				<li class="mb-2"><a href="/farm" class="block hover:text-indigo-400">Farm</a></li>
				<li class="mb-2"><a href="https://dexscreener.com/pulsechain/0x9961c2652b301c4a25256db05316d2be11cebab1" target="_blank" class="block hover:text-indigo-400">Chart</a></li>
				<Separator class="my-4" />
				<li class="mb-2"><a href="https://t.me/plsLEAN" target="_blank" class="block hover:text-indigo-400">Telegram</a></li>
				<li class="mb-2"><a href="http://x.com/pls_lean" target="_blank" class="block hover:text-indigo-400">Twitter</a></li>
				<li class="mb-2"><a href="https://discord.gg/NRg34Rawc6" target="_blank" class="block hover:text-indigo-400">Discord</a></li>
			</ul>
		</div> -->
