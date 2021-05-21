
var documents = [{
    "id": 0,
    "url": "/blog/404.html",
    "title": "404",
    "body": "404 Page does not exist!Please use the search bar at the top or visit our homepage! "
    }, {
    "id": 1,
    "url": "/blog/about",
    "title": "Mediumish Template for Jekyll",
    "body": "This website is built with Jekyll and Mediumish template for Jekyll. It's for demonstration purposes, no real content can be found. Mediumish template for Jekyll is compatible with Github pages, in fact even this demo is created with Github Pages and hosted with Github.  Documentation: Please, read the docs here. Questions or bug reports?: Head over to our Github repository! Buy me a coffeeThank you for your support! Your donation helps me to maintain and improve Mediumish . Buy me a coffee Documentation"
    }, {
    "id": 2,
    "url": "/blog/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "/blog/",
    "title": "Home",
    "body": "{% if page. url == “/” %}       Featured:       {% for post in site. posts %}    {% if post. featured == true %}      {% include featuredbox. html %}    {% endif %}  {% endfor %}  {% endif %}       All Stories:         {% for post in paginator. posts %}    {% include postbox. html %}    {% endfor %}    {% include pagination. html %}"
    }, {
    "id": 4,
    "url": "/blog/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ &#8220;sitemap. xml&#8221;   absolute_url }}   "
    }, {
    "id": 5,
    "url": "/blog/quick-start-guide1/",
    "title": "Cómo sé que necesito un Product Manager",
    "body": "2018/01/11 - Como emprendedor necesitas una propuesta de valor sólida antes de iniciar el desarrollo de un producto. Si omites este paso, acabarás desperdiciando recursos. La creación de un producto mínimo viable es en esencia desarrollar una versión mínima funcional enfocada en generar valor, que a la vez permita evaluar su grado de aceptación en el mercado. El lanzamiento de un producto digital es un proceso que requiere tiempo, atención a los detalles y coordinación con cada miembro de la organización. Tener una de hoja de ruta (product roadmap) es indispensable, esta herramienta permite a cualquiera que participa del proyecto conocer el estado del proceso y ver el panorama completo. Sin embargo; si esta no es realista los retrasos y sobrecostos serán continuos. Si crees que tu proyecto avanza con demasiada lentitud, contar con un profesional experimentado te ayudará a evitar distracciones y a mantenerte centrado en la generación de valor. Los gestores de producto aportan una perspectiva única a los problemas empresariales, identificando y resolviendo obstáculos que de otro modo podrían pasarse por alto. En un mercado global, digital y muy veloz no se puede confiar únicamente en el instinto, solo un correcto análisis cuantitativo convertirá datos técnicos en ventajas para el usuario. Conocer y comprender sus deseos y necesidades es clave importante para competir de forma exitosa. Los ciclos de vida de los productos se han vuelto más complejos. Los usuarios son ahora más exigentes y esperan nuevas funciones, mejoras y actualizaciones frecuentes. El desarrollo de productos en la industria digital involucra equipos de ingeniería. Una gran capacidad de liderazgo, experiencia y conocimientos técnicos le permiten al gestor de productos trabajar en simultáneo con ingenieros, diseñadores, desarrolladores, etc. Incluidos externos. Si estás buscando construir, lanzar y optimizar productos de manera más eficiente es momento de contactar a un experto. So how do we do spoilers?: 1&lt;span class= spoiler &gt;My hidden paragraph here. &lt;/span&gt;"
    }, {
    "id": 6,
    "url": "/blog/quick-start-guide/",
    "title": "Un buen gerente de producto",
    "body": "2018/01/11 - Antiguamente, los gerentes de producto centraban su atención y esfuerzos en el proceso de comprender y encontrar la mejor manera de satisfacer las necesidades de los clientes utilizando la combinación de marketing clásica: el Producto correcto, en el Lugar correcto, al Precio correcto, utilizando la Promoción correcta. Sin embargo; hoy, el paso más importante en el proceso de desarrollo de productos es la identificación de un Problema en el mercado. Tras identificarlo, se evalúa la rentabilidad de la solución a proponer y se comunican los hallazgos al resto de la organización con el objetivo de crear en conjunto un producto o servicio que la gente quiera comprar. Un buen gerente de producto interactúa con su mercado, analiza la competencia y toma decisiones basadas en evidencias y datos, en lugar de opiniones y demandas de clientes, vendedores o directivos. El Gerente de Producto crea propuestas de valor, su buena gestión es sinónimo de ventaja competitiva sostenible, esto quiere decir que tiene la misión de diseñar una estrategia a largo plazo para comunicar de forma eficaz el valor del producto a su mercado objetivo. Además, involucra a otros miembros de la organización para asegurar que el producto sea diseñado, producido, distribuido, y comercializado adecuadamente. En la industria tecnológica, la gestión de productos camina de la mano con las nuevas tendencias, es importante comprender que, al haber estado relacionado con el hallazgo y análisis de la problemática incluyendo la creación de una propuesta de valor rentable, el Gerente de Producto es el profesional más capacitado para gestionar el lanzamiento y posteriormente determinar el futuro comercial o viabilidad del producto o servicio ofrecido, incluyendo mejoras o eliminando características poco útiles para el usuario. El éxito de un producto digital en el mercado está directamente relacionado con una correcta comprensión del usuario y su comunidad. El Gerente de Producto le ayudará a agilizar y gestionar este proceso, su rol es vital. A major clue to everything that truly happened was the scene that played next under the credits - hospital staff failed to bring a patient back to life with a defibrillator after a car accident. Chest compressions failed and there was no pulse. A second major clue was provided by hospital orderly Travis (Stephen Graham): Everybody dies. No mystery there. But why and how everyone dies. Now, there’s a mystery worth solving. Probably the biggest mystery there is. So how do we do spoilers?: 1&lt;span class= spoiler &gt;My hidden paragraph here. &lt;/span&gt;"
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});