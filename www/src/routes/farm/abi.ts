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
  ] as const

  