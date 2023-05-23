function validateName()
{
    let nameError = document.getElementById('username-error')
    let name = document.getElementById('username')
    if (name.value.trim()== '') {
        nameError.innerHTML='username cannot be blank'
        return false
    } else if(name.value.length < 5){
        nameError.innerHTML = 'username must not be less than characters'
        return false
    }
    else{
        nameError.innerHTML = ''
        return true
    }
}