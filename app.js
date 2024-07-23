function loginUserMessage(username){
    if (username===undefined) {
        console.log("pleace enter user name");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Hasan"))
console.log(loginUserMessage())