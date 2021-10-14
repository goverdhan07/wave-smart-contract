const main = async() => {
    //getting signers
    const [deployer] = await hre.ethers.getSigners();
    //getting wallet balance
    const accountBalance = await deployer.getBalance();

    console.log('Deploying contracts with account: ',deployer.address);
    console.log('Account Balance: ', accountBalance.toString());

    const Token = await hre.ethers.getContractFactory('MyWavePortal');
    const portal = await Token.deploy();

    console.log('WavePortal address: ', portal.address);
};

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