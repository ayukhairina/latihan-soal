function cek(username){
    var Regex = /^[a-z,A-Z]{5,9}$/;
    return Regex.test(username);
    if(cek.value.match(Regex)){
        return true;
    }
    else {
        return false;
    }
}

console.log(cek('WAhyukha'));