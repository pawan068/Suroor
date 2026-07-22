const { Saavn } = require("@saavn-labs/sdk");

const saavn = new Saavn();

async function test() {
  try {
    const result = await saavn.searchSongs("Arijit Singh");

    console.log("RESULT:");
    console.log(JSON.stringify(result, null, 2));

  } catch (error) {
    console.log("ERROR:");
    console.log(error);
  }
}

test();