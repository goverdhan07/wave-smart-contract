const main = async() => {
    //Compiling our smart contract
    //hre == hardhat runtime env
    const waveContractFactory = await hre.ethers.getContractFactory("MyWavePortal")

    //Deploy our contract to local blockchain
    const waveContract = await waveContractFactory.deploy()

    //We need to wait for contracct to be mined
    await waveContract.deployed();

    //print address
    console.log("Contract deployed to: ",waveContract.address);
    let waveCount;
    waveCount = await waveContract.getTotalWaves();

    let waveTxn = await waveContract.wave();
    await waveTxn.wait();

    waveCount = await waveContract.getTotalWaves();

}
const runMain = async() => {
    try{
        await main();
        process.exit(0);
    }catch(error) {
        console.log(error);
        process.exit(1);
    }
};
runMain();