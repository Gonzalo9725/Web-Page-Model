$(document).ready(function(){

    // Slider
    if(window.location.href.indexOf('index') > -1 ){
        $('.galeria').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1050,
        });
    }

    // Posts
    if(window.location.href.indexOf('index') > -1 ){
        var posts = [
            {
                title: 'Prueba de titulo 1',
                date: 'Publicado el dia ' + moment().format("LLLL"),
                content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur neque magni ipsa, tempore autem mollitia, eveniet veniam cupiditate atque reprehenderit placeat enim, ipsam quod sequi facere. Ipsam odit quo id assumenda itaque voluptates aperiam libero sequi provident ex natus neque ratione accusamus dolor molestiae excepturi deleniti quam, harum molestias dicta? Assumenda laborum qui at ipsam veritatis! Mollitia officia beatae sapiente. Consequatur optio, facere dolor ducimus consequuntur quisquam eos sunt odit minus eaque animi non aut natus a praesentium, sapiente nostrum provident ratione soluta quia explicabo enim deleniti. Facere eveniet veniam dolorum tempora quia est hic totam expedita asperiores! Accusantium, ratione maxime incidunt aliquid ipsum hic ut tenetur amet, neque voluptatem suscipit harum, reprehenderit deserunt assumenda placeat. Alias repudiandae ratione sequi iusto ducimus magni fugiat eligendi, commodi assumenda quisquam similique excepturi sunt doloribus eum consequuntur quas delectus cupiditate. A reiciendis mollitia quae ad omnis eligendi perferendis delectus sit labore voluptatum necessitatibus quibusdam quod, totam nihil corrupti ullam officiis! Nisi dolorem perferendis tenetur possimus natus numquam incidunt, temporibus a neque similique asperiores ea minima voluptatum cupiditate, placeat debitis autem obcaecati vero esse? Alias a odio quam accusantium laboriosam et deserunt, perferendis impedit magni earum rerum, amet veritatis expedita nisi quaerat voluptatibus cum dolor iusto beatae unde aliquid velit placeat omnis. Earum nesciunt officia sed eos doloremque cumque a perspiciatis dolorum fuga rem non quis magni, obcaecati omnis sint, qui nostrum sapiente. Tempore sit, praesentium quisquam aspernatur ipsam quam veritatis facilis fugiat hic incidunt, vel dicta pariatur rerum exercitationem minima nulla aperiam aliquam! Esse adipisci, aperiam unde nesciunt deserunt provident voluptatibus libero. Harum animi ab magni quisquam illo ea incidunt nemo id ut, quos iure commodi tenetur laboriosam ipsum qui inventore tempore a aspernatur recusandae cupiditate doloremque dolore? Cumque repellat qui excepturi iure alias possimus porro! Quidem aliquid, animi quasi ad omnis eius!'
            },
            {
                title: 'Prueba de titulo 2',
                date: 'Publicado el dia ' + moment().format("LLLL"),
                content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur neque magni ipsa, tempore autem mollitia, eveniet veniam cupiditate atque reprehenderit placeat enim, ipsam quod sequi facere. Ipsam odit quo id assumenda itaque voluptates aperiam libero sequi provident ex natus neque ratione accusamus dolor molestiae excepturi deleniti quam, harum molestias dicta? Assumenda laborum qui at ipsam veritatis! Mollitia officia beatae sapiente. Consequatur optio, facere dolor ducimus consequuntur quisquam eos sunt odit minus eaque animi non aut natus a praesentium, sapiente nostrum provident ratione soluta quia explicabo enim deleniti. Facere eveniet veniam dolorum tempora quia est hic totam expedita asperiores! Accusantium, ratione maxime incidunt aliquid ipsum hic ut tenetur amet, neque voluptatem suscipit harum, reprehenderit deserunt assumenda placeat. Alias repudiandae ratione sequi iusto ducimus magni fugiat eligendi, commodi assumenda quisquam similique excepturi sunt doloribus eum consequuntur quas delectus cupiditate. A reiciendis mollitia quae ad omnis eligendi perferendis delectus sit labore voluptatum necessitatibus quibusdam quod, totam nihil corrupti ullam officiis! Nisi dolorem perferendis tenetur possimus natus numquam incidunt, temporibus a neque similique asperiores ea minima voluptatum cupiditate, placeat debitis autem obcaecati vero esse? Alias a odio quam accusantium laboriosam et deserunt, perferendis impedit magni earum rerum, amet veritatis expedita nisi quaerat voluptatibus cum dolor iusto beatae unde aliquid velit placeat omnis. Earum nesciunt officia sed eos doloremque cumque a perspiciatis dolorum fuga rem non quis magni, obcaecati omnis sint, qui nostrum sapiente. Tempore sit, praesentium quisquam aspernatur ipsam quam veritatis facilis fugiat hic incidunt, vel dicta pariatur rerum exercitationem minima nulla aperiam aliquam! Esse adipisci, aperiam unde nesciunt deserunt provident voluptatibus libero. Harum animi ab magni quisquam illo ea incidunt nemo id ut, quos iure commodi tenetur laboriosam ipsum qui inventore tempore a aspernatur recusandae cupiditate doloremque dolore? Cumque repellat qui excepturi iure alias possimus porro! Quidem aliquid, animi quasi ad omnis eius!'
            },
            {
                title: 'Prueba de titulo 3',
                date: 'Publicado el dia ' + moment().format("LLLL"),
            content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur neque magni ipsa, tempore autem mollitia, eveniet veniam cupiditate atque reprehenderit placeat enim, ipsam quod sequi facere. Ipsam odit quo id assumenda itaque voluptates aperiam libero sequi provident ex natus neque ratione accusamus dolor molestiae excepturi deleniti quam, harum molestias dicta? Assumenda laborum qui at ipsam veritatis! Mollitia officia beatae sapiente. Consequatur optio, facere dolor ducimus consequuntur quisquam eos sunt odit minus eaque animi non aut natus a praesentium, sapiente nostrum provident ratione soluta quia explicabo enim deleniti. Facere eveniet veniam dolorum tempora quia est hic totam expedita asperiores! Accusantium, ratione maxime incidunt aliquid ipsum hic ut tenetur amet, neque voluptatem suscipit harum, reprehenderit deserunt assumenda placeat. Alias repudiandae ratione sequi iusto ducimus magni fugiat eligendi, commodi assumenda quisquam similique excepturi sunt doloribus eum consequuntur quas delectus cupiditate. A reiciendis mollitia quae ad omnis eligendi perferendis delectus sit labore voluptatum necessitatibus quibusdam quod, totam nihil corrupti ullam officiis! Nisi dolorem perferendis tenetur possimus natus numquam incidunt, temporibus a neque similique asperiores ea minima voluptatum cupiditate, placeat debitis autem obcaecati vero esse? Alias a odio quam accusantium laboriosam et deserunt, perferendis impedit magni earum rerum, amet veritatis expedita nisi quaerat voluptatibus cum dolor iusto beatae unde aliquid velit placeat omnis. Earum nesciunt officia sed eos doloremque cumque a perspiciatis dolorum fuga rem non quis magni, obcaecati omnis sint, qui nostrum sapiente. Tempore sit, praesentium quisquam aspernatur ipsam quam veritatis facilis fugiat hic incidunt, vel dicta pariatur rerum exercitationem minima nulla aperiam aliquam! Esse adipisci, aperiam unde nesciunt deserunt provident voluptatibus libero. Harum animi ab magni quisquam illo ea incidunt nemo id ut, quos iure commodi tenetur laboriosam ipsum qui inventore tempore a aspernatur recusandae cupiditate doloremque dolore? Cumque repellat qui excepturi iure alias possimus porro! Quidem aliquid, animi quasi ad omnis eius!'
            },
            {
                title: 'Prueba de titulo 4',
                date: 'Publicado el dia ' + moment().format("LLLL"),
                content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur neque magni ipsa, tempore autem mollitia, eveniet veniam cupiditate atque reprehenderit placeat enim, ipsam quod sequi facere. Ipsam odit quo id assumenda itaque voluptates aperiam libero sequi provident ex natus neque ratione accusamus dolor molestiae excepturi deleniti quam, harum molestias dicta? Assumenda laborum qui at ipsam veritatis! Mollitia officia beatae sapiente. Consequatur optio, facere dolor ducimus consequuntur quisquam eos sunt odit minus eaque animi non aut natus a praesentium, sapiente nostrum provident ratione soluta quia explicabo enim deleniti. Facere eveniet veniam dolorum tempora quia est hic totam expedita asperiores! Accusantium, ratione maxime incidunt aliquid ipsum hic ut tenetur amet, neque voluptatem suscipit harum, reprehenderit deserunt assumenda placeat. Alias repudiandae ratione sequi iusto ducimus magni fugiat eligendi, commodi assumenda quisquam similique excepturi sunt doloribus eum consequuntur quas delectus cupiditate. A reiciendis mollitia quae ad omnis eligendi perferendis delectus sit labore voluptatum necessitatibus quibusdam quod, totam nihil corrupti ullam officiis! Nisi dolorem perferendis tenetur possimus natus numquam incidunt, temporibus a neque similique asperiores ea minima voluptatum cupiditate, placeat debitis autem obcaecati vero esse? Alias a odio quam accusantium laboriosam et deserunt, perferendis impedit magni earum rerum, amet veritatis expedita nisi quaerat voluptatibus cum dolor iusto beatae unde aliquid velit placeat omnis. Earum nesciunt officia sed eos doloremque cumque a perspiciatis dolorum fuga rem non quis magni, obcaecati omnis sint, qui nostrum sapiente. Tempore sit, praesentium quisquam aspernatur ipsam quam veritatis facilis fugiat hic incidunt, vel dicta pariatur rerum exercitationem minima nulla aperiam aliquam! Esse adipisci, aperiam unde nesciunt deserunt provident voluptatibus libero. Harum animi ab magni quisquam illo ea incidunt nemo id ut, quos iure commodi tenetur laboriosam ipsum qui inventore tempore a aspernatur recusandae cupiditate doloremque dolore? Cumque repellat qui excepturi iure alias possimus porro! Quidem aliquid, animi quasi ad omnis eius!'
            },
            {
                title: 'Prueba de titulo 5',
                date: 'Publicado el dia ' + moment().format("LLLL"),
                content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur neque magni ipsa, tempore autem mollitia, eveniet veniam cupiditate atque reprehenderit placeat enim, ipsam quod sequi facere. Ipsam odit quo id assumenda itaque voluptates aperiam libero sequi provident ex natus neque ratione accusamus dolor molestiae excepturi deleniti quam, harum molestias dicta? Assumenda laborum qui at ipsam veritatis! Mollitia officia beatae sapiente. Consequatur optio, facere dolor ducimus consequuntur quisquam eos sunt odit minus eaque animi non aut natus a praesentium, sapiente nostrum provident ratione soluta quia explicabo enim deleniti. Facere eveniet veniam dolorum tempora quia est hic totam expedita asperiores! Accusantium, ratione maxime incidunt aliquid ipsum hic ut tenetur amet, neque voluptatem suscipit harum, reprehenderit deserunt assumenda placeat. Alias repudiandae ratione sequi iusto ducimus magni fugiat eligendi, commodi assumenda quisquam similique excepturi sunt doloribus eum consequuntur quas delectus cupiditate. A reiciendis mollitia quae ad omnis eligendi perferendis delectus sit labore voluptatum necessitatibus quibusdam quod, totam nihil corrupti ullam officiis! Nisi dolorem perferendis tenetur possimus natus numquam incidunt, temporibus a neque similique asperiores ea minima voluptatum cupiditate, placeat debitis autem obcaecati vero esse? Alias a odio quam accusantium laboriosam et deserunt, perferendis impedit magni earum rerum, amet veritatis expedita nisi quaerat voluptatibus cum dolor iusto beatae unde aliquid velit placeat omnis. Earum nesciunt officia sed eos doloremque cumque a perspiciatis dolorum fuga rem non quis magni, obcaecati omnis sint, qui nostrum sapiente. Tempore sit, praesentium quisquam aspernatur ipsam quam veritatis facilis fugiat hic incidunt, vel dicta pariatur rerum exercitationem minima nulla aperiam aliquam! Esse adipisci, aperiam unde nesciunt deserunt provident voluptatibus libero. Harum animi ab magni quisquam illo ea incidunt nemo id ut, quos iure commodi tenetur laboriosam ipsum qui inventore tempore a aspernatur recusandae cupiditate doloremque dolore? Cumque repellat qui excepturi iure alias possimus porro! Quidem aliquid, animi quasi ad omnis eius!'
            }
        ];

        posts.forEach((item, index) => {

            var post = `
                <article class="post">
                    <h2>${item.title}</h2>
                    <span class="date">${item.date}</span>
                    <p>${item.content}</p>
                    <a href="#" class="button-more">Leer más</a>
                </article>
            `;

            $("#posts").append(post);
        });
    }

    // Selector de tema con uso de localStorage para mantener el color seleccionado

    var theme = $('#theme');
 
    theme.attr('href', localStorage.theme);
    
    $('#to-green').click(function(){
        let green = theme.attr('href', 'css/green.css');
        localStorage.setItem('theme', green.attr('href'));
    });	
    
    $('#to-red').click(function(){
        let red = theme.attr('href', 'css/red.css');
        localStorage.setItem('theme', red.attr('href'));
    });	
    
    $('#to-blue').click(function(){
        let blue = theme.attr('href', 'css/blue.css');
        localStorage.setItem('theme', blue.attr('href'));
    });

    // Scroll arriba de la web
    $('.subir').click(function(e){

        e.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 2000);

        return false;
    });

    // Login falso
    $('#login form').submit(function(){
        var form_name = $('#form_name').val();

        localStorage.setItem('form_name', form_name);
    });

    var form_name = localStorage.getItem("form_name");

    if(form_name != null && form_name != "undefined"){

        var about_parrafo = $('#about p');

        about_parrafo.html('<br><strong>Bienvenido ' + form_name + '</strong><br>');

        about_parrafo.append("<a href='#' id='logout'>Cerrar sesión</a>");

        $('#login').hide();

        $('#logout').click(function(){
            localStorage.clear();
            location.reload();
        });

    }

    // Acordeón
    if(window.location.href.indexOf('about') > -1 ){
        $('#acordeon').accordion();
    }

    // Reloj
    if(window.location.href.indexOf('reloj') > -1 ){

        setInterval(function(){
            var reloj = moment().format('h:mm:ss');
            $('#reloj').html(reloj);
        }, 1000);
    }

    // Validación
    if(window.location.href.indexOf('contact') > -1 ){

        $("form input[name='date']").datepicker({
            dateFormat: 'dd-mm-yy'
        });

        $.validate({
            lang: 'es',
            errorMessagePosition: 'top',
            scrollToTopOnError: true
        });

    }

});