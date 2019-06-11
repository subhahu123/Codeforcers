async function get_contests_list() {
    let response = await fetch('https://codeforces.com/api/contest.list?gym=false')
    let data = await response.json();
    console.log(data);
    console.log("subhahu");
    return data;
}

