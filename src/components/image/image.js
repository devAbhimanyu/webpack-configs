import imgSrc from './list.png';
import './image.scss';
class Image{
    render(){
        const img = document.createElement("img");
        img.alt = "List image";
        img.className="image-container";
        img.src = imgSrc;
        const body = document.querySelector("div");
        body.appendChild(img);
    }
}

export default Image;