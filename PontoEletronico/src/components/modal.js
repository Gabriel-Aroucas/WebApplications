
export function modal(texth1, textp) {
    const main = document.querySelector("#main");
    const component = document.createElement('section');
    const src = document.createElement('div');
    const img = document.createElement('img');
    const content = document.createElement('section');
    const title = document.createElement('div');
    const h1 = document.createElement('h1');
    const description = document.createElement('div');
    const p = document.createElement('p');
    const button = document.createElement('button');
    const closeModal = document.createElement('p');

    main.appendChild(component);
    component.setAttribute('class', 'component')
    closeModal.innerHTML = '&times;'
    closeModal.setAttribute('class', 'closeModal');
    src.setAttribute('class', 'src');
    img.setAttribute('class', 'srcModal');
    img.setAttribute('src', 'https://pbs.twimg.com/media/EeieACpUYAAVJTD.png');
    content.setAttribute('class', 'content')
    title.setAttribute('class', 'divTitle')
    h1.setAttribute('id', 'title');
    h1.innerHTML = texth1;
    description.setAttribute('class', 'divDescription')
    p.setAttribute('id', 'description');
    p.innerHTML = textp;
    button.setAttribute('type', 'button');
    button.setAttribute('class', 'btnModal');
    button.innerHTML = 'ok';


    component.appendChild(src);
    src.appendChild(closeModal);
    src.appendChild(img);
    component.appendChild(content);
    content.appendChild(title);
    title.appendChild(h1);
    content.appendChild(description);
    description.appendChild(p);
    content.appendChild(button)

    console.log(component)
    document.body.appendChild(main)


    
    $(".closeModal").on({
        click:()=>{
            component.style.transition='1s';
            component.style.opacity='0';
            setTimeout(()=>{
                component.style.display='none';
            },1000)
        }
    }) ;
    $(".btnModal").on({
        click:()=>{
            component.style.transition='1s';
            component.style.opacity='0';
            setTimeout(()=>{
                component.style.display='none';
            },1000)
        }
    })
    
}
