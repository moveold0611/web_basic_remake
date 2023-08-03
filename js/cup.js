window.onload = () => {
    const cupImg = document.querySelectorAll(".img-border img");
    cupImg[0].src = "./img/images.jpg "
    cupImg[0].id = ".cup-red"
    cupImg[0].onclick = redCupImgOnClickHandle;
    cupImg[1].src = "img/cup_noun_002_09489.jpg"
    cupImg[1].id = ".cup-blue"
    cupImg[1].onclick = bludCupImgOnClickHandle;

    document.onclick = () => {
        if(cupImg[0].src.includes("images")) {
            cupImg[0].src = "./img/cup_noun_002_09489.jpg";
        }else {
            cupImg[0].src = "./img/images.jpg";
        }

        if(cupImg[1].src.includes("cup_noun_002_09489")) {
            cupImg[1].src = "./img/images.jpg";
        }else {
            cupImg[1].src = "./img/cup_noun_002_09489.jpg";
        }
    }

}

const redCupImgOnClickHandle = (e) => {
    if(e.target.src.includes("images")) {
        e.target.src = "./img/cup_noun_002_09489.jpg";
    }else {
        e.target.src = "./img/images.jpg";
    }
}

const bludCupImgOnClickHandle = (e) => {
    if(e.target.src.includes("cup_noun_002_09489")) {
        e.target.src = "./img/images.jpg";
    }else {
        e.target.src = "./img/cup_noun_002_09489.jpg";
    }
}