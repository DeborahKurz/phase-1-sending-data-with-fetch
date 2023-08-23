// function submitData(personsName, personsEmail){
//     return fetch("http://localhost:3000/users", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json"
//         },
//         body: JSON.stringify({
//             name: `${personsName}`,
//             email: `${personsEmail}`,
//         })
//     });
// };

// function submitData(){
//     return fetch("http://localhost:3000/users",{
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json"
//         },
//         body: JSON.stringify({
//             name: "Steve",
//             email: "steve@steve.com",
//         })
//     })
    // .then(function (response){
    //     return response.json()
    // })
    // .then(function (submitData){
    //     const paragraph = document.body.createElement("p");
    //     paragraph.textContent = submitData.id
    // })
    // .catch(function (error) {
    //     alert("Unauthorized Access");
    //     console.log(error.message);
    // });
// };

// fetch("http://localhost:3000/users", submitData)
//     .then(function (response){
//         return response.json()
//     })
//     .then(function (submitData){
//         // console.log(submitData)
//         // document.body.append(submitData[4].id)
//         const paragraph = document.body.createElement("p");
//         paragraph.textContent = submitData.id
//     })
//     .catch(function (error) {
//         alert("A problem occured");
//         console.log(error.message);
//     });


function submitData(userName, userEmail){
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: `${userName}`,
            email: `${userEmail}`,
        })
    })
    .then(res => res.json())
    .then(data =>{
        const body = document.querySelector("body")
        body.innerHTML = data.id
    })
    .catch(function(error){
        const message = document.querySelector("body")
        message.innerHTML = error.message;
    })
}