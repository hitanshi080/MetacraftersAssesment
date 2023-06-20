/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const Parlours= []
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintParlour (_name, _hairColor, _outfit, _piercing) {
    const Parlour= {
        "name": _name,
        "hairColor": _hairColor,
        "outfit": _outfit,
        "piercing": _piercing
    }
    Parlours.push(Parlour);
    console.log("Minted: "+ _name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listParlours () {
    for(let i=0; i < Parlours.length; i++){
        console.log("\nID: \t\t"+ (i+1));
        console.log("Name: \t\t"+Parlours[i].name);
        console.log("HairColor: \t"+Parlours[i].hairColor);
        console.log("Outfit: \t"+Parlours[i].outfit);
        console.log("Piercing: \t"+Parlours[i].piercing);
    }
        
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\n"+Parlours.length);
}

// call your functions below this line
mintParlour("rach", "blonde", "green dress", "ear");
mintParlour("damon", "black", "black overalls", "eyebrow");
mintParlour("geralt", "greenish black", "armour", "ear, eyebrow");
mintParlour("tanjiro", "red", "green kimono", "ear");
mintParlour("blair", "black", "princess dress", "lip");

listParlours();
getTotalSupply();
