export function tst() {
    let component = document.createElement('section');
    let src = document.createElement('div');
    let img = document.createElement('img');
    let content = document.createElement('section');
    let title = document.createElement('div');
    let h1 = document.createElement('h1');
    let description = document.createElement('div');
    let p = document.createElement('p');

    component.setAttribute('class','component')
    src.setAttribute('class','src');
    img.setAttribute('class','srcModal')
    content.setAttribute('class','content')
    title.setAttribute('class','divTitle')
    h1.setAttribute('id','title')
    description.setAttribute('class','divDescription')
    p.setAttribute('id','description')

    component.appendChild(src);
    src.appendChild(img);
    component.appendChild(content);
    content.appendChild(title);
    title.appendChild(h1);
    content.appendChild(description);
    description.appendChild(p);

    console.log(component)
}

/**
 *    <section class="component">
            <div class="src">
                <img src="https://via.placeholder.com/100" alt="logomark" id="srcModal">
            </div>
            <div class="content">
                <div class="title">
                    <h1 id="title"></h1>
                </div>
                <div class="description">
                    <p id="description"></p>
                </div>
            </div>
        </section>
     
 */