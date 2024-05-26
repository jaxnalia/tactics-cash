<script>
	import { TwitterLogo, DiscordLogo, PaperPlane, GithubLogo } from 'radix-icons-svelte';
	import lean_cup from '../../images/logo.png';
	const footStyle =
		'supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40 w-full px-3 pt-4 lg:px-9 bg-background/95 backdrop-blur';
	const link = {
		tele: 'https://t.me/TacticsPLS',
		xapp: 'https://x.com/TacticsPLS',
		git: 'https://github.com/jaxnalia/tactics-cash-master'
	};
	import { Github, Send, Twitter } from "lucide-svelte";
</script>


<footer class={footStyle}>
	<div class="flex flex-col container items-center">
		<!-- <a href="/" class="inline-flex items-center">
			<img src={lean_cup} alt="Lean" class="h-10" />
		</a> -->
		<!-- <div class="flex flex-row gap-2 text-lg">
			<a class="font-bold tracking-wide uppercase" target="_blank" href={link.swap}>buy now</a
			>
			|
			<a class="font-bold tracking-wide uppercase" target="_blank" href={link.explorer}>contract</a>
		</div> -->
		
		<div>
			<div class="flex items-center gap-1 px-2">
				<a target="_blank" class="p-2 min-w-xl" href={link.xapp}>
					<Twitter size="20" />
				</a>
				<a target="_blank" href={link.tele} class="p-2 min-w-xl">
					<Send size="20" />
				</a>
				<a target="blank" class="p-2 min-w-xl" href={link.git}>
					<Github size="20" />
				</a>
			</div>
		</div>
		<span class="block text-sm text-center">
			
			Made with ❤️ by
			<a
				style="margin-right: -3px;"
				href="https://x.com/bigjax_pls"
				class="text-yellow-400 hover:underline"
			>
				BigJax
			</a>.
		</span>
	</div>
	<div class="mb-8">

	</div>
</footer>
