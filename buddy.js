const loadBuddies= () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => dataOfBuddies(data))
}
loadBuddies()


const dataOfBuddies= data => {
    const buddies= data.results
    console.log(data.results)
    const buddiesDiv= document.getElementById('buddies')
    for( const buddy of buddies){
        console.log(buddy.email)
        const p= document.createElement('p')
        p.innerText= buddy.email
        buddiesDiv.appendChild(p)
    }
}