export const abi = [
    {
      type: 'function',
      name: 'approve',
      stateMutability: 'nonpayable',
      inputs: [
        { name: 'spender', type: 'address' },
        { name: 'amount', type: 'uint256' },
      ],
      outputs: [{ type: 'bool' }],
    },
    {
        type: "function",
        name: "deposit",
        stateMutability: "nonpayable",
		inputs: [
			{   name: "_pid", type: "uint256" },
			{   name: "_amount", type: "uint256" }
		],
		outputs: [],
	},
    {
        type: "function",
        name: "withdraw",
        stateMutability: "nonpayable",
		inputs: [
			{   name: "_pid", type: "uint256" },
			{   name: "_amount", type: "uint256" }
		],
		outputs: [],
	},
    {
		inputs: [
			{
				name: "owner",
				type: "address"
			},
			{
				name: "spender",
				type: "address"
			}
		],
		name: "allowance",
		outputs: [
			{
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
    {
		inputs: [
			{
				name: "_pid",
				type: "uint256"
			},
			{
				name: "_user",
				type: "address"
			}
		],
		name: "pendingTokens",
		outputs: [
			{
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
  ] as const

  