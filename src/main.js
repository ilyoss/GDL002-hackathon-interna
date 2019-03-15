const history = () =>{
    document.getElementById("marvel_universe").style.display='block';
    document.getElementById("welcome_content").style.display='none';
}
document.getElementById("history").addEventListener('click', history);

const home = () =>{
    document.getElementById("marvel_universe").style.display='none';
    document.getElementById("welcome_content").style.display='block';
    document.getElementById("aboutUsPage").style.display='none';
    document.getElementById("marvel_heroes").style.display='none';
}
document.getElementById("home").addEventListener('click', home);

const about_us = ()=> {
    document.getElementById("marvel_universe").style.display='none';
    document.getElementById("welcome_content").style.display='none';
    document.getElementById("aboutUsPage").style.display='block';
    document.getElementById("marvel_heroes").style.display='none';
}
document.getElementById("about_us").addEventListener('click', about_us);

const heroes = ()=> {
    document.getElementById("welcome_content").style.display='none';
    document.getElementById("marvel_heroes").style.display='block';
}
document.getElementById("heroes").addEventListener('click', heroes);
