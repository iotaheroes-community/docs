---
title: Smart Contracts
sidebar_label: Smart Contracts
sidebar_position: 1
---

# Smart Contracts

In **IOTA Heroes**, smart contracts play a vital role in managing in-game assets and transactions. This section provides an overview of the smart contracts used in the game.

## Contract Addresses

| Contract Name    | Contract Address                                                          |
|------------------|--------------------------------------------------------------------------|
| Facilities       | [0x1D55e4a60afAf11A98fBDeffA39d5BaBBf68bBFc](https://explorer.evm.shimmer.network/address/0x1D55e4a60afAf11A98fBDeffA39d5BaBBf68bBFc) |
| Factory          | [0x56b576Be71E281Cc7048EE4C8e5Cf898EE767B2f](https://explorer.evm.shimmer.network/address/0x56b576Be71E281Cc7048EE4C8e5Cf898EE767B2f) |
| GameItem         | [0xbF5f52F479194b713eDd69eD3f68E29FdFCcb10A](https://explorer.evm.shimmer.network/address/0xbF5f52F479194b713eDd69eD3f68E29FdFCcb10A) |
| Gold             | [0x3bBb9B7848De06778fEE4fE0bC4d9AB271e56648](https://explorer.evm.shimmer.network/address/0x3bBb9B7848De06778fEE4fE0bC4d9AB271e56648) |
| GoldStore        | [0xc25066233DB3615D5dea05F9D323fBf4259BE770](https://explorer.evm.shimmer.network/address/0xc25066233DB3615D5dea05F9D323fBf4259BE770) |
| HeroAdventure    | [0x080a1693613A601E6EdD7FC3aDF747f958A07113](https://explorer.evm.shimmer.network/address/0x080a1693613A601E6EdD7FC3aDF747f958A07113) |
| HeroMarketplace  | [0x05D041bc4756C602c7C3cD5A4A875F0Af34b2708](https://explorer.evm.shimmer.network/address/0x05D041bc4756C602c7C3cD5A4A875F0Af34b2708) |
| HeroNFT          | [0x6f3a07626827C0431e8e40F835Ab134B714bC1bF](https://explorer.evm.shimmer.network/address/0x6f3a07626827C0431e8e40F835Ab134B714bC1bF) |
| HeroSkills       | [0x21a2BF8f563A8deDA8C4665Ae05073A96740ca2D](https://explorer.evm.shimmer.network/address/0x21a2BF8f563A8deDA8C4665Ae05073A96740ca2D) |
| Lib              | [0x16A092662a9F0B03a0d77C8032b16ab9D01A0cdF](https://explorer.evm.shimmer.network/address/0x16A092662a9F0B03a0d77C8032b16ab9D01A0cdF) |
| Reforging        | [0xd8B93AC33bD5c399014D68f27751306B29bb1B61](https://explorer.evm.shimmer.network/address/0xd8B93AC33bD5c399014D68f27751306B29bb1B61) |
| Researching      | [0x3eE36f0880A0D60C9487EeB2B1d904340A3f34Ed](https://explorer.evm.shimmer.network/address/0x3eE36f0880A0D60C9487EeB2B1d904340A3f34Ed) |
| TradingPost      | [0xd5Bf1311818A806A7f70B011629c53616B220bB1](https://explorer.evm.shimmer.network/address/0xd5Bf1311818A806A7f70B011629c53616B220bB1) |
| Training         | [0x3111b57fd607c0e726464E47B2511e0132F25061](https://explorer.evm.shimmer.network/address/0x3111b57fd607c0e726464E47B2511e0132F25061) |


## Development Tools

- **[Remix](https://remix.ethereum.org/):** Solidity Development Environment in the Browser


## Public Functions

The functions can be called by anybody, so you can add it into your dApp!

### HeroNFT
he Contract for the inhabitats of Fortuvia, the Heroes! [ERC721](https://docs.openzeppelin.com/contracts/5.x/erc721) compliant token, based on the ERC721Enumerable extension.

- `tokenURI(uint256 tokenId)`: Gets the metadata URI for a given token ID. Overrides the ERC721 function to return the token-specific metadata URI.
- `supportsInterface(bytes4 interfaceId)`: Informs callers that this contract supports ERC2981.
- `royaltiesReceiver()`: Getter function for `_royaltiesReceiver`.
- `royaltyInfo(uint256, uint256 _salePrice)`: Called with the sale price to determine how much royalty is owed and to whom.


### GameItem
ERC1155 token implementation that allows minting and burning of game items.

- `isSoulbound(uint256 id)`: Checks if the given ID is a soulbound token.
- `burn(address account, uint256 id, uint256 amount)`: Burns a specific amount of an item from an account.
- `burnTokens(address account, uint256[] calldata tokenIds, uint256[] calldata amounts)`: Burns multiple items from an account.


### HeroAdventure
- `_initiateAdventure`: This function initiates an adventure for a hero. It takes in the hero ID, an array of item IDs, an array of item amounts, the difficulty of the adventure, and the player's address. It then checks if the hero is already adventuring and if the player has approved the game items. If both checks pass, it creates a new adventure and transfers the game items to the contract.


### Reforging
- `initiateReforge(uint256[] calldata items, uint256[] calldata amounts)`: Initiates the reforging process by transferring the required items and payment item to the contract.
