
let userData = {}; 



export async function login(loginUser){

    const res = await fetch('https://codewarsreservation.azurewebsites.net/User/AddUser', {
        method: "no-cors",
        headers: {

            'Content-Type': "application/json"
            },
        body: JSON.stringify(loginUser)
});
if(!res.ok){


    const message = `An Erros has Occured ${res.status}`;
    throw new Error (message);
}

let data = await res.json();

}

export async function GetLoggedInUserData(userName){
    let res = await fetch (`https://codewarsreservation.azurewebsites.net/User/GetUserInfo/${userName}`)
    let data = await res.json();
    userData = data;
    console.log(userData);

    return userData;
}

export async function GetCodewarUserInfo(){
    let res = await fetch (`https://www.codewars.com/api/v1/users/Blasterphantom`)
    let data = await res.json();
    userData = data;
    console.log(userData);

    return userData;
}

async function CodeWarsByChallenge(){
    const kataSlugs = [
        'sum-of-positive',
        'convert-a-string-to-a-number',
        'isograms',
        'valid-parentheses',
        'two-sum',
        'multiples-of-3-or-5',
        'counting-duplicates',
        'highest-and-lowest',
        'roman-numerals-encoder',
        'persistent-bugger',
        'find-the-odd-int',
        'moving-zeros-to-the-end',
        'disemvowel-trolls',
        'sort-the-odd',
        'human-readable-time',
        'take-a-ten-minute-walk',
        'tribonacci-sequence',
        'printer-errors',
        'shortest-word',
        'mumbling',
        'bit-counting',
        'who-likes-it',
        'simple-pig-latin',
        'rgb-to-hex-conversion',
        'alternating-case',
        'vowel-count',
        'maximum-subarray-sum',
        'valid-braces',
        'playing-with-digits',
        'count-the-digit',
        'sums-of-parts',
        'digital-root',
        'largest-5-digit-number-in-a-series',
        'sum-of-digits-slash-digital-root',
        'string-incrementer',
        'duplicate-encoder',
        'count-characters-in-your-string',
        'disemvowel-from-the-right',
        'moving-shifted-parts',
        'break-camelcase',
        'scramblies',
        'unique-in-order',
        'perimeter-of-squares-in-a-rectangle',
        'replace-with-alphabet-position',
        'counting-sheep',
        'replace-dots',
        'abbreviate-a-two-word-name',
        'shortest-distance-to-a-character'
      ];

      const randomIndex = Math.floor(Math.random() * kataSlugs.length);
      const randomKata = kataSlugs[randomIndex];
    const promise = await fetch(`https://www.codewars.com/api/v1/code-challenges/${randomKata}`);
    const data = await promise.json()
    return data;
}

async function SearchKata(slug){
    const promise = await fetch(`https://www.codewars.com/api/v1/code-challenges/${slug}`);
    const data = await promise.json()
    return data;
}

export { CodeWarsByChallenge, SearchKata}