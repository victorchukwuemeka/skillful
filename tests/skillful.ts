import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { Skillful } from "../target/types/skillful";
import * as assert from "assert";
import * as bs58 from "bs58";
import { describe, it } from "mocha";
import { associatedAddress } from "@coral-xyz/anchor/dist/cjs/utils/token";
const { SystemProgram } = anchor.web3;



describe("skillful ", ()=> {

 // anchor.setProvider(anchor.AnchorProvider.env());
  const provider = anchor.AnchorProvider.env()
  anchor.setProvider(provider);
  const program = anchor.workspace.Skillful as Program<Skillful>;

  it('skillful validate', async () => {
    const name = "victor";
    const userProfile = anchor.web3.Keypair.generate();
    await program.methods
     .initializeUser(name)
     .accounts({
      userProfile: userProfile.publicKey,
      user : provider.wallet.publicKey,
      systemProgram: SystemProgram.programId,
     })
     .signers([userProfile])
     .rpc()
  });

  
});