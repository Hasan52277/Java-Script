const promiseOne = new Promise(function (resolve, reject) {
  // Do an asyn task
  // DB calls,cryptography,network

  setTimeout(function () {
    console.log("Async task is completed");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  // iska relation resolve ke sath hai
  console.log("Promise consumed");
});

// Another Method

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Asyn task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Asyn 2 reolved");
});

// 3.. Method

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ name: "Hasan", email: "hasan@786" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

4.. Method

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ name: "Mohd", password: "123" });
    } else {
      reject("ERROR:Somthing is worng");
    }
  }, 2000);
});

promiseFour
  .then((then) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (err) {
    console.log(err);
  }).finally(()=> console.log("The Promise is either resolve and reject"))

// 5... Method

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    setTimeout(function () {
      let error = true;
      if (!error) {
        resolve({ name: "Hasan", password: "123" });
      } else {
        reject("ERROR:Somthing is worng");
      }
    }, 2000);
  }, 1000);
});

async function consumePromiseFive () {
const response = await promiseFive()
console.log(response);

    
}
consumePromiseFive()
// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }
//getAllUsers()
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro
// yes this is also available, kuch reading aap b kro.