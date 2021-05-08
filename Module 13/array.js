let friendName = ["hello","holla", "rokli", "tom"];
    friendName[0] = "jerry";
    friendName.push("talha", "johani");
    friendName.pop();
    friendName.unshift("fahim", "jobayer");
    friendName.shift();
    friendName.splice(2, 4, "korim", "rohim", "anik");
let slice = friendName.slice(2, 4);

console.log(friendName, friendName.length, slice)