# fund-easy
This project is a comprehensive finance Decentralized Application (DApp) built on the Ethereum blockchain. Its primary functionality revolves around creating wills using smart contracts. The smart contract, named "MyWill," is responsible for managing the will creation and fund allocation process.

Users can interact with the smart contract through various functions. They can set a time limit for the will using the `setTimeLimit` function, ensuring that the timestamp can only be set once. The `makeMyWill` function allows users to create a will by specifying the recipient's address and the desired amount to be allocated. The function verifies the provided Ether value and adds the participant (recipient and amount) to the owner's list of participants.

Users can retrieve their wills using the `getMyWill` function, which returns the owner's information, including the list of participants and the timestamp. Deleting a will is possible through the `deleteMyWill` function, which transfers the allocated funds to the respective recipients and removes the owner's will from the mapping.

To access funds from their wills, users can utilize the `with_drawal` function, which calculates the total amount of funds allocated to the participants and transfers it to the owner, minus a deduction to cover transaction fees. The `transferFunds` function allows users to directly transfer the allocated funds to the participants, executing transfers based on the participant list.

By leveraging the power of smart contracts on the Ethereum blockchain, this project provides a secure, transparent, and automated solution for creating and managing wills. It ensures the seamless execution of the user's final wishes, eliminating the need for traditional legal processes and providing a reliable mechanism for the distribution of assets to designated beneficiaries.
