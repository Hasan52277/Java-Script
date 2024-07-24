// const promiseFour = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       let error = true;
//       if (!error) {
//         resolve({ username: "Mohd", password: "123" });
//       } else {
//         reject("ERROR:Somthing is worng");
//       }
//     }, 2000);
//   });

//    promiseFour.then(function (user) {
//     console.log(user);
//     return user.username

//   }).then(function (username) {
//     console.log(username);
//   }).catch(function (err) {
//     console.log(err);
//   }).finally(function () {
//     console.log("The Promise is either resolve and reject");

//   })

// promise Five

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "Mohd", password: "123" });
    } else {
      reject("ERROR:Somthing is worng");
    }
  }, 2000);
});

async function consumePromiseFive() {
   const response = await promiseFive
   console.log(response);
}
consumePromiseFive()