<script>
	const title =
		'font-bebas-neue uppercase text-6xl sm:text-7xl font-black flex flex-col leading-none';

	import { ArrowRight } from 'radix-icons-svelte'
	import gradient from '$lib/images/gradientwide.png'
	import { Badge } from "$lib/components/ui/badge";
	import rust from "$lib/images/Rust.webp";

</script>

<div class="bannerimg rounded-3xl p-5 sm:p-10 mx-auto flex relative font-medium">
	<style>
		.bannerimg{
			background-position: center;
			background-size: 1304px;
			background-repeat: no-repeat;
			background-image: URL("https://bigjax.s3.eu-west-2.amazonaws.com/Rust.webp");
		}
	</style>
	<div class="flex flex-col relative z-20">
		<span class="mb-24" />

		<h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl drop-shadow-md">
			<span class="text-5xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-300"
				>TACTICS</span> is leverage on <span style="background-image: url({gradient});background-size: cover;background-position: center;" class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-600">#PulseChain</span>.
		  </h1>

		<p class="leading-7 [&:not(:first-child)]:mt-6 drop-shadow-md">
			Tactics is a DAO that incentivises a liquidity strategy based on Heart's Law to create an ecosystem bonded with the price appreciation of <span class="underline">PulseX</span> and <span class="underline">Incentive Token</span>.
		</p>
		<div class="flex mt-8">
			<a
				style="font-size: 32px;"
				href="/farm"
				class="bg-primary hover:bg-muted font-bold py-2 px-5 rounded-full border-2 border-transparent text-md mr-4"
			>
				Farm
				<svg style="display: inline-block;" width="52" height="52" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
			</a>
			<div class="ml-3 flex flex-col justify-center">
				<a href="/bridge">
					<Badge class="rounded-full" variant="default">Bridge</Badge>
				</a>
				
			</div>
			<div class="ml-3 flex flex-col justify-center">
				<a href="/bridge">
					<Badge class="rounded-full" variant="secondary">Docs</Badge>
				</a>
				
			</div>

		</div>
	</div>


</div>
