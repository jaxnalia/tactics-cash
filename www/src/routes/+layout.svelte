<script>
import "../app.css";
import NavBar from '$lib/components/NavBar/NavBar.svelte';
import FootBar from '$lib/components/FootBar/FootBar.svelte';

</script>
<svelte:head>
	<meta name="twitter:card" content="summary_large_image">
	<meta name="twitter:site" content="@TacticsPLS">
	<meta name="twitter:creator" content="@TacticsPLS">
	<meta name="twitter:title" content="TACTICS">
	<meta name="twitter:description" content="Tactics is a DAO that incentivises a liquidity strategy based on Heart's Law to create an ecosystem bonded with the price appreciation of PulseX and Incentive Token.">
	<!-- <meta name="twitter:image" content="https://bigjax.s3.eu-west-2.amazonaws.com/twitter-image-2.jpg"> -->
	<meta property="og:title" content="Tactics">
	<meta property="og:type" content="website">
	<meta property="og:url" content="https://tactics.cash/">
	<!-- <meta property="og:image" content="https://bigjax.s3.eu-west-2.amazonaws.com/twitter-image-2.jpg"> -->
	<meta property="og:description" content="Tactics is a DAO that incentivises a liquidity strategy based on Heart's Law to create an ecosystem bonded with the price appreciation of PulseX and Incentive Token.">
</svelte:head>
<NavBar></NavBar>
<slot></slot>
<FootBar></FootBar>
<style>

</style>