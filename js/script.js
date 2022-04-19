const randomFolks = document.querySelector(".random-peeps");

const getImage = async function(){
    const res = await fetch("https://picsum.photos/v2/list?limit=100");
    const images = await res.json();
    console.log(images);
}

getImage();