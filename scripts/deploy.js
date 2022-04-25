async function main() {
    // Grab the contract factory 
    const NFThesis = await ethers.getContractFactory("NFThesis");
 
    // Start deployment, returning a promise that resolves to a contract object
    const nfthesis = await NFThesis.deploy(); // Instance of the contract 
    console.log("Contract deployed to address:", nfthesis.address);
 }
 
 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });