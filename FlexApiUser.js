function createFlexList(data, myImageurl) {

  const divelement = document.createElement("div");
  divelement.className = "maindiv";
  data.map((x, i) => {
    const mainUL = document.createElement('ul');
    mainUL.id = "mainul" + `${i}`;//unorderedlist
    mainUL.className = "parent";
    const userImage = document.createElement('li');
    const userLI = document.createElement('li');
    const userCityLI = document.createElement('li');
    const userphonenumber = document.createElement('li');//thirdlistitem

    userLI.id = "userLI" + `${i}`;//firstlistItem
    userLI.className = "child";
    userCityLI.className = "child";//secondListItem
    userphonenumber.className = "child";
    userImage.innerHTML = x.id + "." + `<img class="img" src=${myImageurl[i]}/>`+`<img class="img" src="UniversalPeacock.jpg"/>`;
    userLI.innerHTML = `<label class="label">Name :</label>${x.name}`;//x.id+x.name//x->data[i]
    userCityLI.innerHTML = `<label class="label">City :</label> ${x.address.city} `;
    userphonenumber.innerHTML = `<label class="label">Ph.No:</label>${x.phone}`;//appending data to listitem

    mainUL.appendChild(userImage);
    mainUL.appendChild(userLI);
    mainUL.appendChild(userCityLI);
    mainUL.appendChild(userphonenumber);//appending listitem to mainUL
    divelement.appendChild(mainUL);

  })

  document.body.appendChild(divelement);
}

function fetchmultipleApi() {
  Promise.all([
    fetch('https://jsonplaceholder.typicode.com/users').then(resp => resp.json()),
    fetch('https://jsonplaceholder.typicode.com/photos').then(resp => resp.json()),

  ]).then(([data1, data2]) => {
    const newimgData = data2.filter((x, i) => x.id <= 10);
    console.log(newimgData);
    var myurl = newimgData.map((x) => { return x.url });
    createFlexList(data1, myurl);

  })
}
fetchmultipleApi();