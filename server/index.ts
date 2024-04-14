import { ApiNetworkProvider } from "@multiversx/sdk-network-providers";
import { Address, Account } from "@multiversx/sdk-core";
import { GenezioDeploy } from "@genezio/types";
import { apiUrl, collectionName } from "./utils/constants";
import axios from "axios"

export type Response = {
  nonce: number;
  balance: number;
}

@GenezioDeploy()
export class MultiversXService {
  networkProvider = new ApiNetworkProvider(apiUrl);

  async queryAddress(address: string): Promise<Response> {
    console.log("Query info about address", address);

    let addressOfUser = new Address(address);
    let user = new Account(addressOfUser);
    let userOnNetwork = await this.networkProvider.getAccount(addressOfUser);
    user.update(userOnNetwork);

    return {
      nonce: user.nonce.valueOf(),
      balance: parseFloat(user.balance.toString()) / Math.pow(10, 18),
    };
  }

  async fetchUserNFTs(address: string): Promise<any> {
    
    console.log("Fetching user's NFTs", address);

    let addressOfUser = new Address(address);
    let user = new Account(addressOfUser);

    axios.get(`${apiUrl}/collections/${collectionName}`).then((response) => {
      console.log(response.data)
    }
    ).catch((error) => {
      console.log(error)
    })


    return {
      nfts: []
    }
  }

  async createNFT(): Promise<any> {


    return {
      message: "NFT Minted succesfully"
    }
  }


}
