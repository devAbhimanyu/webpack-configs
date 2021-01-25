import './button.scss'
const appendToBody = (child)=>{
    const body = document.querySelector("div");
    body.appendChild(child);
}
export class Button{
    buttonClass = "button";
    render(){
        const button = document.createElement("button");
        button.innerHTML="Click me"
        button.className=this.buttonClass
        button.onclick=()=>{
            const p = document.createElement("p");
            p.innerText="button clicked"
            p.className="text"
            appendToBody(p)
        }
        appendToBody(button)
    }
}