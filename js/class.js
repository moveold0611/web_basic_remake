// 일반적으로 정보 담는 용도로 사용
const user = { // key and value
    username: null,
    password: null,
    name: null,
    email: null,
    toString: () => {
        return "user(" + user.username + ", " + user.password + ", " + user.name + ", " + user.email + ")"; 
    }, 
}
user.username = "aaa";
user.password = "1234";
user.name = "김준일";
user.email = "aaa@gmail.com";

console.log(user.toString());
console.log(user);



// 기능을 정리하는데 사용
class User {
    username;
    password;

    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    usernameAndPasswordCheck(username, password) {
        console.log("입력한 아이디 " + username);
        console.log("입력한 비밀번호 " + password);
        if(username !== this.username || password !== this.password) {
            alert ("로그인 실패");
            return;
        }
        alert("로그인 성공");
    }
}

const bbb = new User("bbb", "1234");

bbb.usernameAndPasswordCheck("ccc", "1234");
bbb.usernameAndPasswordCheck("bbb", "1234");

