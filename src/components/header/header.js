class Header{
    render(page){
        const h1 = document.createElement("h1");
        h1.innerText=`the current image is ${page}`
        const body = document.querySelector("div");
        body.appendChild(h1);
    }
}

export default Header;