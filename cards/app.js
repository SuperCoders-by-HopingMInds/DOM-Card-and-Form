
let info = [
    {
        name: "John",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus accusantium nostrum molestiae, aut aspernatur dolorem voluptatem inventore animi. Ipsa doloribus aperiam, officia modi facere placeat omnis ullam officiis debitis. Ad, asperiores at praesentium fugiat, dicta, esse voluptatum eveniet distinctio labore ipsum nulla nesciunt! Consequuntur molestiae saepe amet exercitationem, quos eum.",
    },
    {
        name: "Tom",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus accusantium nostrum molestiae, aut aspernatur dolorem voluptatem inventore animi. Ipsa doloribus aperiam, officia modi facere placeat omnis ullam officiis debitis. Ad, asperiores at praesentium fugiat, dicta, esse voluptatum eveniet distinctio labore ipsum nulla nesciunt! Consequuntur molestiae saepe amet exercitationem, quos eum.",
    },
    {
        name: "Ram",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus accusantium nostrum molestiae, aut aspernatur dolorem voluptatem inventore animi. Ipsa doloribus aperiam, officia modi facere placeat omnis ullam officiis debitis. Ad, asperiores at praesentium fugiat, dicta, esse voluptatum eveniet distinctio labore ipsum nulla nesciunt! Consequuntur molestiae saepe amet exercitationem, quos eum.",
    },
    {
        name: "Pankaj",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus accusantium nostrum molestiae, aut aspernatur dolorem voluptatem inventore animi. Ipsa doloribus aperiam, officia modi facere placeat omnis ullam officiis debitis. Ad, asperiores at praesentium fugiat, dicta, esse voluptatum eveniet distinctio labore ipsum nulla nesciunt! Consequuntur molestiae saepe amet exercitationem, quos eum.",
    },
    {
        name: "Shyam",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus accusantium nostrum molestiae, aut aspernatur dolorem voluptatem inventore animi. Ipsa doloribus aperiam, officia modi facere placeat omnis ullam officiis debitis. Ad, asperiores at praesentium fugiat, dicta, esse voluptatum eveniet distinctio labore ipsum nulla nesciunt! Consequuntur molestiae saepe amet exercitationem, quos eum.",
    },


]

for(let t of info){
    // t is an object of info array
    let div = document.createElement("div");
    let name = document.createElement("h1");
    let description = document.createElement("p");

    // add text to name and description 
    name.innerText = t.name
    description.innerText = t.description

    div.append(name)
    div.append(description)
    div.className = "card"

    // div.style.cssText = `
    // background-color: #fff;
    // border-radius: 5px;
    // box-shadow: 0 2px 8px rgba(0,0,0,.26);
    // margin: 10px;
    // padding: 10px;
    // text-align: center;
    // width: 300px;
    
    // `

    div.style.backgroundColor =  "#fff";
    div.style.borderRadius =  "5px";
    div.style.boxShadow =  "0 2px 8px rgba(0,0,0,.26)";
    div.style.margin =  "10px";
    div.style.padding =  "10px";
    div.style.textAlign =  "center";
    div.style.width =  "300px";

    document.body.append(div)

}

