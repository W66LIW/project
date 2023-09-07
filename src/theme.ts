
function theme(){
    if(localStorage.theme === "dark" || (!("theme" in localStorage))) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }
} 

export default theme;