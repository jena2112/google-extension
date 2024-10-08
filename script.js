async function getMatchData()
{
    return await fetch("https://api.cricapi.com/v1/currentMatches?apikey=d7f7da69-d97a-4f62-a192-33ba38cafa44&offset=0")
    .then(data => data.json())
    .then(data=>{
        if(data.status != "success") return

        const matcheslist = data.data;
        if(!matcheslist) return [];

        const relevantData = matcheslist.map(match=>`${match.name}, ${match.status}`)

        console.log({relevantData})

        document.getElementById("matches").innerHTML=relevantData.map(match=>`<li>${match}</li>`).join('')
      
        return relevantData
    })

  .catch(e=>console.log(e))

}

getMatchData();