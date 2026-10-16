(() => {
    'use strict';

    // ==========================================
    // SISTEMA DE TRADUCCIÓN ES/EN
    // ==========================================
    const translations = {
        es: {
            // Navegación
            nav_inicio: "Inicio",
            nav_juegos: "Juegos",
            nav_contacto: "Contacto",
            nav_js: "JavaScript",
            nav_jquery: "jQuery",
            nav_json: "JSON",
            nav_hosting: "Hosting y dominios",
            nav_cuestionario: "Cuestionario",
            nav_herramientas: "Herramientas Google",
            btn_tema: "Tema",
            btn_carrito: "Carrito",
            
            // Hero Section
            hero_eyebrow: "TU PRÓXIMA AVENTURA EMPIEZA AQUÍ",
            hero_title: "Encuentra tu próximo juego favorito.",
            hero_desc: "Aventuras, carreras, mundos abiertos y diversión para cada tipo de jugador.",
            btn_explorar: "Explorar juegos",
            btn_contacto: "Contáctanos",
            hero_note: "Tienda de demostración para un proyecto escolar.",
            
            // Carousel
            slide1_title: "Historias que te atrapan",
            slide1_desc: "Descubre nuevos mundos.",
            slide2_title: "Juega a tu manera",
            slide2_desc: "Acción, estrategia y aventuras.",
            slide3_title: "Comparte la diversión",
            slide3_desc: "Tu siguiente partida te espera.",
            
            // Catálogo
            catalog_eyebrow: "CATÁLOGO",
            catalog_title: "Juegos destacados",
            catalog_desc: "Precios de ejemplo, no son ofertas reales.",
            search_placeholder: "Buscar juego...",
            no_games: "No encontramos juegos con ese nombre.",
            
            // Juegos
            zelda_name: "The Legend of Zelda",
            zelda_desc: "Explora tierras misteriosas y resuelve acertijos.",
            minecraft_name: "Minecraft",
            minecraft_desc: "Construye, reúne recursos y crea tu propio mundo.",
            gta_name: "Grand Theft Auto V",
            gta_desc: "Recorre una gran ciudad y completa misiones.",
            fc_name: "EA Sports FC",
            fc_desc: "Forma tu equipo y compite en el campo virtual.",
            forza_name: "Forza Horizon",
            forza_desc: "Conduce coches increíbles en escenarios abiertos.",
            nfs_name: "NFS Most Wanted",
            nfs_desc: "Escapa de la policía y desafía a la blacklist.",
            btn_agregar: "Agregar",
            
            // Sobre Nosotros
            about_eyebrow: "SOBRE PIXELVAULT",
            about_title: "Un espacio para quienes disfrutan jugar.",
            about_desc: "PixelVault es una propuesta de tienda digital para practicar el diseño y desarrollo web. El catálogo, los precios y el carrito son demostrativos; no se venden productos ni se procesan pagos reales.",
            feature1_title: "Catálogo organizado",
            feature1_desc: "Busca juegos por nombre o categoría.",
            feature2_title: "Carrito interactivo",
            feature2_desc: "Agrega o elimina juegos y calcula el total.",
            
            // Contacto
            contact_eyebrow: "CONTACTO",
            contact_title: "¿En qué podemos ayudarte?",
            contact_desc: "Completa el formulario para probar la validación. En esta versión los mensajes no se envían a un servidor.",
            contact_email: "adielvelasquez444@gmail.com",
            contact_hours: "Lunes a viernes, 8:00 a. m. – 5:00 p. m.",
            label_nombre: "Nombre",
            label_correo: "Correo electrónico",
            label_motivo: "Motivo",
            label_mensaje: "Mensaje",
            opt_elige: "Elige una opción",
            opt_info: "Información de un juego",
            opt_pedido: "Consulta sobre un pedido",
            opt_sugerencia: "Sugerencia",
            opt_otro: "Otro",
            btn_enviar: "Enviar consulta",
            sending: "Enviando tu consulta a PixelVault...",
            success: "¡Consulta enviada correctamente a PixelVault!",
            error: "No se pudo enviar la consulta. Inténtalo de nuevo.",
            
            // Carrito
            cart_title: "Tu carrito",
            cart_subtitle: "Pedido de demostración",
            cart_empty: "Todavía no has agregado juegos.",
            cart_total: "Total",
            btn_simular: "Simular pedido",
            cart_note: "No se realizan cobros reales.",
            btn_quitar: "Quitar",
            toast_added: " se agregó al carrito.",
            toast_empty: "Agrega un juego antes de simular el pedido.",
            toast_order: "Pedido de demostración realizado. No se cobró dinero.",
            
            // Footer
            footer_brand: "🎮 PixelVault",
            footer_text: "Proyecto escolar · HTML, CSS, JavaScript y Bootstrap · 2026",
            footer_link: "Volver a la tienda",
            
            // Página JavaScript
            js_eyebrow: "PIXELVAULT · APRENDE DESARROLLO WEB",
            js_title: "JavaScript",
            js_desc: "El lenguaje que permite agregar comportamiento a una página web.",
            js_what: "¿Qué es JavaScript?",
            js_what_desc: "Es un lenguaje de programación que permite responder a las acciones del usuario, actualizar el contenido y validar formularios.",
            js_table_title: "HTML, CSS y JavaScript",
            js_tech: "Tecnología",
            js_func: "Función",
            js_ex: "Ejemplo",
            js_html: "HTML",
            js_html_func: "Estructura",
            js_html_ex: "Tarjetas y formularios",
            js_css: "CSS",
            js_css_func: "Diseño",
            js_css_ex: "Colores y distribución",
            js_js: "JavaScript",
            js_js_func: "Interacción",
            js_js_ex: "Carrito y búsqueda",
            js_vars: "const y let declaran variables; las funciones agrupan instrucciones y los eventos como click detectan acciones.",
            js_demo_eyebrow: "PRUEBA INTERACTIVA",
            js_demo_title: "Evento click",
            js_demo_text: "Presiona el botón para ejecutar una función.",
            js_demo_btn: "Probar JavaScript",
            js_demo_success: "¡Funciona! JavaScript respondió al evento click.",
            
            // Página jQuery
            jq_eyebrow: "PIXELVAULT · APRENDE DESARROLLO WEB",
            jq_title: "jQuery",
            jq_desc: "Una biblioteca de JavaScript que simplifica algunas tareas con elementos HTML.",
            jq_what: "¿Qué es jQuery?",
            jq_what_desc: "jQuery se publicó en 2006 y ofrece métodos para seleccionar elementos, trabajar con eventos, hacer efectos y realizar solicitudes de datos.",
            jq_pros: "Ventajas",
            jq_pros_1: "Sintaxis corta para algunas tareas.",
            jq_pros_2: "Incluye métodos de animación.",
            jq_pros_3: "Es útil en proyectos antiguos.",
            jq_cons: "Desventajas",
            jq_cons_1: "Necesita cargar una biblioteca adicional.",
            jq_cons_2: "Muchas tareas se resuelven hoy con JavaScript nativo.",
            jq_demo_eyebrow: "DEMOSTRACIÓN",
            jq_demo_box: "¡Hola desde jQuery!",
            jq_btn_fade: "fadeIn / fadeOut",
            jq_btn_slide: "slideToggle",
            jq_panel: "Este panel se abre y se cierra con slideToggle().",
            jq_note: "Requiere conexión para cargar jQuery desde CDN.",
            
            // Página JSON
            json_eyebrow: "PIXELVAULT · APRENDE DESARROLLO WEB",
            json_title: "JSON",
            json_desc: "Un formato de texto utilizado para representar e intercambiar datos.",
            json_what: "¿Qué significa JSON?",
            json_what_desc: "JSON significa JavaScript Object Notation. Organiza datos mediante pares de clave y valor, objetos y arreglos.",
            json_rule1: "Las claves y cadenas usan comillas dobles.",
            json_rule2: "Admite cadenas, números, booleanos, null, objetos y arreglos.",
            json_rule3: "No permite comentarios ni comas sobrantes al final.",
            json_demo_title: "Leer datos JSON",
            json_demo_desc: "El botón convierte un texto JSON en datos que podemos mostrar en pantalla.",
            json_demo_btn: "Mostrar datos",
            json_output: "Aquí aparecerán los datos.",
            json_game: "Minecraft",
            json_price: "Precio",
            json_available: "Disponible",
            json_yes: "Sí",
            json_no: "No",


        //Hosting:
host_eyebrow: "PIXELVAULT · APRENDE DESARROLLO WEB",
host_title_page: "Hosting y dominios",
host_desc_page: "Los servicios y nombres que permiten que un sitio esté disponible en Internet.",
host_what_title: "¿Qué es el hosting?",
host_what_desc: "Es un servicio que almacena los archivos del sitio y los entrega a las personas que lo visitan.",
host_shared: "Compartido: varios sitios comparten servidor.",
host_vps: "VPS: recursos virtuales más aislados.",
host_cloud: "Nube: usa infraestructura en la nube.",
host_static: "Estático: adecuado para HTML, CSS y JavaScript sin backend.",
host_domain_title: "¿Qué es un dominio?",
host_domain_desc: "Es el nombre que se escribe para encontrar una página. El DNS relaciona el dominio con el servidor correspondiente.",
host_steps_title: "Pasos para publicar",
host_step1: "Organizar y revisar archivos.",
host_step2: "Elegir un servicio de hosting.",
host_step3: "Subir los archivos.",
host_step4: "Configurar el dominio.",
host_step5: "Probar enlaces y formularios.",
host_pv_title: "Para PixelVault",
host_pv_desc: "Un hosting estático puede publicar la demostración. Una tienda real con cuentas, pedidos o pagos requiere backend y medidas de seguridad; el carrito actual no procesa pagos.",

            
            // Página Cuestionario
            quiz_eyebrow: "REPASO",
            quiz_title: "Cuestionario de repaso",
            quiz_desc: "JavaScript, jQuery, JSON, hosting y dominios.",
            quiz_intro: "Selecciona una respuesta por pregunta y revisa tu resultado.",
            quiz_q1: "1. ¿Para qué sirve JavaScript?",
            quiz_q1_a: "Crear interacción",
            quiz_q1_b: "Guardar archivos del servidor",
            quiz_q1_c: "Comprar dominios",
            quiz_q2: "2. ¿Qué biblioteca ofrece fadeIn() y slideToggle()?",
            quiz_q2_a: "Bootstrap",
            quiz_q2_b: "jQuery",
            quiz_q2_c: "JSON",
            quiz_q3: "3. ¿Para qué se usa JSON?",
            quiz_q3_a: "Cambiar colores",
            quiz_q3_b: "Crear dominios",
            quiz_q3_c: "Representar e intercambiar datos",
            quiz_q4: "4. ¿Qué servicio aloja los archivos de una página?",
            quiz_q4_a: "Hosting",
            quiz_q4_b: "Dominio",
            quiz_q4_c: "Evento click",
            quiz_q5: "5. ¿Qué es un dominio?",
            quiz_q5_a: "Un precio",
            quiz_q5_b: "El nombre que identifica un sitio",
            quiz_q5_c: "Una variable",
            quiz_q6: "6. ¿El carrito de PixelVault cobra dinero real?",
            quiz_q6_a: "Sí, automáticamente",
            quiz_q6_b: "Solo con JSON",
            quiz_q6_c: "No, es una simulación",
            quiz_btn_submit: "Calificar",
            quiz_btn_reset: "Intentar de nuevo",
            quiz_result: "Obtuviste ",
            quiz_correct: " de 6 respuestas correctas. ",
            quiz_excellent: "¡Excelente!",
            quiz_good: "Buen trabajo.",
            quiz_review: "Repasa los temas e inténtalo otra vez.",
            
            // Página Herramientas Google
            tools_eyebrow: "RECURSOS GRATUITOS",
            tools_title: "15 Herramientas de Google",
            tools_desc: "Las herramientas más utilizadas para investigación, productividad y educación. Todas gratuitas, con sus logos oficiales y guías de uso.",
            tools_how: "¿Cómo se usa?",
            
            // Footer tools
            tools_footer: "Sección educativa: 15 herramientas de Google"
        },
        en: {// Agrega esto dentro de 'en':
t1_name: "Google Search", t1_desc: "The world's most used search engine. Find information on any topic in seconds.", t1_how: "Type your query on google.com. Use quotes for exact searches.",
t2_name: "Google Scholar", t2_desc: "Academic search engine for scientific articles, theses, and books. Ideal for serious research.", t2_how: "Go to scholar.google.com. Search academic topics and export citations in APA format.",
t3_name: "Google Docs", t3_desc: "Cloud-based document editor. Write, edit, and share texts in real time.", t3_how: "Go to docs.google.com, create a document and share the link with editing permissions.",
t4_name: "Google Sheets", t4_desc: "Cloud spreadsheets with formulas, charts, and pivot tables to organize data.", t4_how: "Go to sheets.google.com. Use formulas like =SUM() and insert charts from the menu.",
t5_name: "Google Slides", t5_desc: "Create professional presentations with slides, animations, images, and videos.", t5_how: "Go to slides.google.com. Choose a template, add content, and present from the browser.",
t6_name: "Google Forms", t6_desc: "Create surveys, quizzes, and forms. Responses are saved in a spreadsheet.", t6_how: "Go to forms.google.com. Create questions and share the link to receive real-time responses.",
t7_name: "Google Drive", t7_desc: "Cloud storage with 15GB free. Save files, photos, and documents.", t7_how: "Go to drive.google.com. Upload files, organize in folders, and share with links.",
t8_name: "Google Classroom", t8_desc: "Educational platform to create virtual classes, assign tasks, and grade work.", t8_how: "Go to classroom.google.com. Create a class, generate a code, and post assignments.",
t9_name: "Google Meet", t9_desc: "Free HD video calls. Share screen and record meetings.", t9_how: "Go to meet.google.com. Create a meeting and share the link with participants.",
t10_name: "Google Calendar", t10_desc: "Digital agenda to schedule events, reminders, and meetings.", t10_how: "Go to calendar.google.com. Create events, add time, description, and reminders.",
t11_name: "Google Keep", t11_desc: "Quick notes app. Create text notes, lists, and reminders with alarms.", t11_how: "Go to keep.google.com. Create notes, add labels, and pin important ones to the top.",
t12_name: "Google Sites", t12_desc: "Create websites and portfolios without coding, by dragging and dropping elements.", t12_how: "Go to sites.google.com. Choose a template, add content, and publish with one click.",
t13_name: "Google Translate", t13_desc: "Free translator supporting over 100 languages. Translates text, voice, and images.", t13_how: "Go to translate.google.com. Select languages and type or paste the text.",
t14_name: "Google Maps", t14_desc: "Interactive maps with GPS navigation, satellite views, and public transport.", t14_how: "Go to maps.google.com. Search a place, get directions, and save favorite spots.",
t15_name: "Google Earth", t15_desc: "Explore the planet in 3D with high-resolution satellite imagery.", t15_how: "Go to earth.google.com. Navigate the globe and discover places with",
    
            // Navigation
            nav_inicio: "Home",
            nav_juegos: "Games",
            nav_contacto: "Contact",
            nav_js: "JavaScript",
            nav_jquery: "jQuery",
            nav_json: "JSON",
            nav_hosting: "Hosting & Domains",
            nav_cuestionario: "Quiz",
            nav_herramientas: "Google Tools",
            btn_tema: "Theme",
            btn_carrito: "Cart",
            
            // Hero Section
            hero_eyebrow: "YOUR NEXT ADVENTURE STARTS HERE",
            hero_title: "Find your next favorite game.",
            hero_desc: "Adventures, racing, open worlds and fun for every type of player.",
            btn_explorar: "Explore games",
            btn_contacto: "Contact us",
            hero_note: "Demo store for a school project.",
            
            // Carousel
            slide1_title: "Stories that captivate you",
            slide1_desc: "Discover new worlds.",
            slide2_title: "Play your way",
            slide2_desc: "Action, strategy and adventures.",
            slide3_title: "Share the fun",
            slide3_desc: "Your next game awaits.",
            
            // Catalog
            catalog_eyebrow: "CATALOG",
            catalog_title: "Featured games",
            catalog_desc: "Example prices, not real offers.",
            search_placeholder: "Search game...",
            no_games: "We didn't find games with that name.",
            
            // Games
            zelda_name: "The Legend of Zelda",
            zelda_desc: "Explore mysterious lands and solve puzzles.",
            minecraft_name: "Minecraft",
            minecraft_desc: "Build, gather resources and create your own world.",
            gta_name: "Grand Theft Auto V",
            gta_desc: "Travel a big city and complete missions.",
            fc_name: "EA Sports FC",
            fc_desc: "Form your team and compete on the virtual field.",
            forza_name: "Forza Horizon",
            forza_desc: "Drive amazing cars in open scenarios.",
            nfs_name: "NFS Most Wanted",
            nfs_desc: "Escape from the police and challenge the blacklist.",
            btn_agregar: "Add",
            
            // About Us
            about_eyebrow: "ABOUT PIXELVAULT",
            about_title: "A space for those who enjoy playing.",
            about_desc: "PixelVault is a digital store proposal to practice web design and development. The catalog, prices and cart are demonstrative; products are not sold and real payments are not processed.",
            feature1_title: "Organized catalog",
            feature1_desc: "Search games by name or category.",
            feature2_title: "Interactive cart",
            feature2_desc: "Add or remove games and calculate the total.",
            
            // Contact
            contact_eyebrow: "CONTACT",
            contact_title: "How can we help you?",
            contact_desc: "Fill out the form to test validation. In this version messages are not sent to a server.",
            contact_email: "adielvelasquez444@gmail.com",
            contact_hours: "Monday to Friday, 8:00 a.m. – 5:00 p.m.",
            label_nombre: "Name",
            label_correo: "Email",
            label_motivo: "Reason",
            label_mensaje: "Message",
            opt_elige: "Choose an option",
            opt_info: "Game information",
            opt_pedido: "Order inquiry",
            opt_sugerencia: "Suggestion",
            opt_otro: "Other",
            btn_enviar: "Send inquiry",
            sending: "Sending your inquiry to PixelVault...",
            success: "Inquiry sent successfully to PixelVault!",
            error: "Could not send inquiry. Please try again.",
            
            // Cart
            cart_title: "Your cart",
            cart_subtitle: "Demo order",
            cart_empty: "You haven't added games yet.",
            cart_total: "Total",
            btn_simular: "Simulate order",
            cart_note: "No real charges are made.",
            btn_quitar: "Remove",
            toast_added: " was added to cart.",
            toast_empty: "Add a game before simulating the order.",
            toast_order: "Demo order completed. No money was charged.",
            
            // Footer
            footer_brand: "🎮 PixelVault",
            footer_text: "School project · HTML, CSS, JavaScript & Bootstrap · 2026",
            footer_link: "Back to store",
            
            // JavaScript Page
            js_eyebrow: "PIXELVAULT · LEARN WEB DEVELOPMENT",
            js_title: "JavaScript",
            js_desc: "The language that allows adding behavior to a web page.",
            js_what: "What is JavaScript?",
            js_what_desc: "It is a programming language that allows responding to user actions, updating content and validating forms.",
            js_table_title: "HTML, CSS and JavaScript",
            js_tech: "Technology",
            js_func: "Function",
            js_ex: "Example",
            js_html: "HTML",
            js_html_func: "Structure",
            js_html_ex: "Cards and forms",
            js_css: "CSS",
            js_css_func: "Design",
            js_css_ex: "Colors and layout",
            js_js: "JavaScript",
            js_js_func: "Interaction",
            js_js_ex: "Cart and search",
            js_vars: "const and let declare variables; functions group instructions and events like click detect actions.",
            js_demo_eyebrow: "INTERACTIVE TEST",
            js_demo_title: "Click event",
            js_demo_text: "Press the button to execute a function.",
            js_demo_btn: "Try JavaScript",
            js_demo_success: "It works! JavaScript responded to the click event.",
            
            // jQuery Page
            jq_eyebrow: "PIXELVAULT · LEARN WEB DEVELOPMENT",
            jq_title: "jQuery",
            jq_desc: "A JavaScript library that simplifies some tasks with HTML elements.",
            jq_what: "What is jQuery?",
            jq_what_desc: "jQuery was published in 2006 and offers methods to select elements, work with events, make effects and perform data requests.",
            jq_pros: "Advantages",
            jq_pros_1: "Short syntax for some tasks.",
            jq_pros_2: "Includes animation methods.",
            jq_pros_3: "It is useful in old projects.",
            jq_cons: "Disadvantages",
            jq_cons_1: "It needs to load an additional library.",
            jq_cons_2: "Many tasks are solved today with native JavaScript.",
            jq_demo_eyebrow: "DEMONSTRATION",
            jq_demo_box: "Hello from jQuery!",
            jq_btn_fade: "fadeIn / fadeOut",
            jq_btn_slide: "slideToggle",
            jq_panel: "This panel opens and closes with slideToggle().",
            jq_note: "Requires connection to load jQuery from CDN.",
            
            // JSON Page
            json_eyebrow: "PIXELVAULT · LEARN WEB DEVELOPMENT",
            json_title: "JSON",
            json_desc: "A text format used to represent and exchange data.",
            json_what: "What does JSON mean?",
            json_what_desc: "JSON means JavaScript Object Notation. It organizes data through key-value pairs, objects and arrays.",
            json_rule1: "Keys and strings use double quotes.",
            json_rule2: "Supports strings, numbers, booleans, null, objects and arrays.",
            json_rule3: "Does not allow comments or trailing commas.",
            json_demo_title: "Read JSON data",
            json_demo_desc: "The button converts JSON text into data that we can display on screen.",
            json_demo_btn: "Show data",
            json_output: "The data will appear here.",
            json_game: "Minecraft",
            json_price: "Price",
            json_available: "Available",
            json_yes: "Yes",
            json_no: "No",

            //Hositng:
host_eyebrow: "PIXELVAULT · LEARN WEB DEVELOPMENT",
host_title_page: "Hosting and Domains",
host_desc_page: "The services and names that allow a site to be available on the Internet.",
host_what_title: "What is hosting?",
host_what_desc: "It is a service that stores the site's files and delivers them to the people who visit it.",
host_shared: "Shared: multiple sites share a server.",
host_vps: "VPS: more isolated virtual resources.",
host_cloud: "Cloud: uses cloud infrastructure.",
host_static: "Static: suitable for HTML, CSS, and JavaScript without a backend.",
host_domain_title: "What is a domain?",
host_domain_desc: "It is the name typed to find a page. DNS relates the domain to the corresponding server.",
host_steps_title: "Steps to publish",
host_step1: "Organize and review files.",
host_step2: "Choose a hosting service.",
host_step3: "Upload the files.",
host_step4: "Configure the domain.",
host_step5: "Test links and forms.",
host_pv_title: "For PixelVault",
host_pv_desc: "A static hosting can publish the demo. A real store with accounts, orders, or payments requires a backend and security measures; the current cart does not process payments.",
            
            // Quiz Page
            quiz_eyebrow: "REVIEW",
            quiz_title: "Review Quiz",
            quiz_desc: "JavaScript, jQuery, JSON, hosting and domains.",
            quiz_intro: "Select one answer per question and check your result.",
            quiz_q1: "1. What is JavaScript for?",
            quiz_q1_a: "Create interaction",
            quiz_q1_b: "Save server files",
            quiz_q1_c: "Buy domains",
            quiz_q2: "2. Which library offers fadeIn() and slideToggle()?",
            quiz_q2_a: "Bootstrap",
            quiz_q2_b: "jQuery",
            quiz_q2_c: "JSON",
            quiz_q3: "3. What is JSON used for?",
            quiz_q3_a: "Change colors",
            quiz_q3_b: "Create domains",
            quiz_q3_c: "Represent and exchange data",
            quiz_q4: "4. Which service hosts page files?",
            quiz_q4_a: "Hosting",
            quiz_q4_b: "Domain",
            quiz_q4_c: "Click event",
            quiz_q5: "5. What is a domain?",
            quiz_q5_a: "A price",
            quiz_q5_b: "The name that identifies a site",
            quiz_q5_c: "A variable",
            quiz_q6: "6. Does PixelVault's cart charge real money?",
            quiz_q6_a: "Yes, automatically",
            quiz_q6_b: "Only with JSON",
            quiz_q6_c: "No, it's a simulation",
            quiz_btn_submit: "Grade",
            quiz_btn_reset: "Try again",
            quiz_result: "You got ",
            quiz_correct: " out of 6 correct answers. ",
            quiz_excellent: "Excellent!",
            quiz_good: "Good job.",
            quiz_review: "Review the topics and try again.",
            
            // Google Tools Page
            tools_eyebrow: "FREE RESOURCES",
            tools_title: "15 Google Tools",
            tools_desc: "The most used tools for research, productivity and education. All free, with their official logos and usage guides.",
            tools_how: "How to use it?",
            
            // Footer tools
            tools_footer: "Educational section: 15 Google tools",
        
t1_name: "Google Search", t1_desc: "El motor de búsqueda más usado del mundo. Permite encontrar información de cualquier tema en segundos.", t1_how: "Escribe tu consulta en google.com. Usa comillas para búsquedas exactas.",
t2_name: "Google Scholar", t2_desc: "Buscador académico que encuentra artículos científicos, tesis y libros. Ideal para investigaciones serias.", t2_how: "Entra a scholar.google.com. Busca temas académicos y exporta citas en formato APA.",
t3_name: "Google Docs", t3_desc: "Editor de documentos en la nube. Permite escribir, editar y compartir textos en tiempo real.", t3_how: "Entra a docs.google.com, crea un documento y comparte el enlace con permisos de edición.",
t4_name: "Google Sheets", t4_desc: "Hojas de cálculo en la nube con fórmulas, gráficos y tablas dinámicas para organizar datos.", t4_how: "Entra a sheets.google.com. Usa fórmulas como =SUMA() e inserta gráficos desde el menú.",
t5_name: "Google Slides", t5_desc: "Crea presentaciones profesionales con diapositivas, animaciones, imágenes y videos.", t5_how: "Entra a slides.google.com. Elige una plantilla, agrega contenido y presenta desde el navegador.",
t6_name: "Google Forms", t6_desc: "Crea encuestas, cuestionarios y formularios. Las respuestas se guardan en una hoja de cálculo.", t6_how: "Entra a forms.google.com. Crea preguntas y comparte el enlace para recibir respuestas en tiempo real.",
t7_name: "Google Drive", t7_desc: "Almacenamiento en la nube con 15GB gratis. Guarda archivos, fotos y documentos.", t7_how: "Entra a drive.google.com. Sube archivos, organiza en carpetas y comparte con enlaces.",
t8_name: "Google Classroom", t8_desc: "Plataforma educativa para crear clases virtuales, asignar tareas y calificar trabajos.", t8_how: "Entra a classroom.google.com. Crea una clase, genera un código y publica tareas.",
t9_name: "Google Meet", t9_desc: "Videollamadas gratuitas en HD. Comparte pantalla y graba reuniones.", t9_how: "Entra a meet.google.com. Crea una reunión y comparte el enlace con los participantes.",
t10_name: "Google Calendar", t10_desc: "Agenda digital para programar eventos, recordatorios y reuniones.", t10_how: "Entra a calendar.google.com. Crea eventos, agrega hora, descripción y recordatorios.",
t11_name: "Google Keep", t11_desc: "Aplicación de notas rápidas. Crea notas de texto, listas y recordatorios con alarma.", t11_how: "Entra a keep.google.com. Crea notas, agrega etiquetas y fija las importantes arriba.",
t12_name: "Google Sites", t12_desc: "Crea sitios web y portafolios sin saber programar, arrastrando y soltando elementos.", t12_how: "Entra a sites.google.com. Elige una plantilla, agrega contenido y publica con un clic.",
t13_name: "Google Translate", t13_desc: "Traductor gratuito que soporta más de 100 idiomas. Traduce texto, voz e imágenes.", t13_how: "Entra a translate.google.com. Selecciona los idiomas y escribe o pega el texto.",
t14_name: "Google Maps", t14_desc: "Mapas interactivos con navegación GPS, vistas satelitales y transporte público.", t14_how: "Entra a maps.google.com. Busca un lugar, obtén indicaciones y guarda lugares favoritos.",
t15_name: "Google Earth", t15_desc: "Explora el planeta en 3D con imágenes satelitales de alta resolución.", t15_how: "Entra a earth.google.com. Navega por el globo y descubre lugares con 'Voy a tener suerte'.",


            
        }
    };

    // Aplicar idioma
    function applyLanguage(lang) {
        document.documentElement.lang = lang;
        localStorage.setItem('pv-lang', lang);
        
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
        
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translations[lang][key]) {
                el.placeholder = translations[lang][key];
            }
        });
        
        const btnText = document.getElementById('textoIdioma');
        if (btnText) {
            btnText.textContent = lang === 'es' ? 'ES | EN' : 'EN | ES';
        }
    }

    // Inicializar idioma guardado
    const savedLang = localStorage.getItem('pv-lang') || 'es';
    applyLanguage(savedLang);

    // Botón de idioma
    const btnIdioma = document.getElementById('btnIdioma');
    if (btnIdioma) {
        btnIdioma.addEventListener('click', () => {
            const current = document.documentElement.lang;
            applyLanguage(current === 'es' ? 'en' : 'es');
        });
    }

    // ==========================================
    // TEMA CLARO Y OSCURO (Mantiene tu código)
    // ==========================================
    const root = document.documentElement;

    function setTheme(theme) {
        root.setAttribute('data-bs-theme', theme);
        try {
            localStorage.setItem('pv-theme', theme);
        } catch (error) {}

        document.querySelectorAll('.theme-toggle').forEach(button => {
            const icon = button.querySelector('i');
            if (icon) {
                icon.className = theme === 'dark' ? 'bi bi-sun' : 'bi bi-moon-stars';
            }
            button.setAttribute('aria-label', theme === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro');
        });
    }

    setTheme(root.getAttribute('data-bs-theme') || 'light');

    document.querySelectorAll('.theme-toggle').forEach(button => {
        button.addEventListener('click', () => {
            setTheme(root.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark');
        });
    });

    // ==========================================
    // BUSCADOR DE VIDEOJUEGOS (Mantiene tu código)
    // ==========================================
    const search = document.getElementById('searchGame');
    if (search) {
        const items = [...document.querySelectorAll('.game-item')];
        search.addEventListener('input', () => {
            let visibleCount = 0;
            items.forEach(item => {
                const searchText = (item.dataset.search || '').toLowerCase();
                const matches = searchText.includes(search.value.toLowerCase().trim());
                item.classList.toggle('d-none', !matches);
                if (matches) visibleCount++;
            });
            const noGames = document.getElementById('noGames');
            if (noGames) {
                noGames.classList.toggle('d-none', visibleCount > 0);
            }
        });
    }

    // ==========================================
    // CARRITO DE COMPRAS (Mantiene tu código)
    // ==========================================
    const cart = new Map();
    const count = document.getElementById('cartCount');
    const list = document.getElementById('cartItems');
    const totalEl = document.getElementById('cartTotal');
    const checkout = document.getElementById('checkout');

    const money = amount => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);

    function render() {
        let quantity = 0;
        let total = 0;
        cart.forEach(item => {
            quantity += item.qty;
            total += item.price * item.qty;
        });
        if (count) count.textContent = quantity;
        if (totalEl) totalEl.textContent = money(total);
        if (!list) return;
        list.replaceChildren();
        if (!cart.size) {
            const emptyMessage = document.createElement('p');
            emptyMessage.className = 'text-secondary';
            emptyMessage.textContent = translations[document.documentElement.lang].cart_empty;
            list.append(emptyMessage);
            return;
        }
        cart.forEach(item => {
            const row = document.createElement('div');
            row.className = 'cart-line';
            const text = document.createElement('div');
            const name = document.createElement('strong');
            const details = document.createElement('div');
            name.textContent = item.name;
            details.className = 'small text-secondary';
            details.textContent = item.qty + ' × ' + money(item.price);
            text.append(name, details);
            const remove = document.createElement('button');
            remove.className = 'btn btn-sm btn-outline-danger';
            remove.textContent = translations[document.documentElement.lang].btn_quitar;
            remove.addEventListener('click', () => {
                cart.delete(item.id);
                render();
            });
            row.append(text, remove);
            list.append(row);
        });
    }

    function toast(message) {
        const element = document.getElementById('pvToast');
        if (!element || !window.bootstrap) return;
        const text = document.getElementById('toastText');
        if (text) text.textContent = message;
        window.bootstrap.Toast.getOrCreateInstance(element).show();
    }

    document.querySelectorAll('.add-cart').forEach(button => {
        button.addEventListener('click', () => {
            const id = button.dataset.id;
            const existing = cart.get(id);
            if (existing) {
                existing.qty++;
            } else {
                cart.set(id, {
                    id,
                    name: button.dataset.name,
                    price: Number(button.dataset.price),
                    qty: 1
                });
            }
            render();
            const lang = document.documentElement.lang;
            toast(button.dataset.name + translations[lang].toast_added);
        });
    });

    if (checkout) {
        checkout.addEventListener('click', () => {
            const lang = document.documentElement.lang;
            if (!cart.size) {
                toast(translations[lang].toast_empty);
                return;
            }
            alert(translations[lang].toast_order);
            cart.clear();
            render();
        });
    }

    render();

    // ==========================================
    // FORMULARIO DE CONTACTO (Mantiene tu código)
    // ==========================================
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', async event => {
            event.preventDefault();
            event.stopPropagation();
            form.classList.add('was-validated');
            if (!form.checkValidity()) return;

            const button = form.querySelector('button[type="submit"]');
            const status = document.getElementById('contactStatus');
            const nameInput = document.getElementById('contactName');
            const emailInput = document.getElementById('contactEmail');
            const reasonInput = document.getElementById('contactReason');
            const messageInput = document.getElementById('contactMessage');

            if (!button || !status || !nameInput || !emailInput || !reasonInput || !messageInput) {
                console.error('No se encontraron todos los campos del formulario.');
                return;
            }

            const data = {
                nombre: nameInput.value.trim(),
                correo: emailInput.value.trim(),
                motivo: reasonInput.value,
                mensaje: messageInput.value.trim()
            };

            button.disabled = true;
            const lang = document.documentElement.lang;
            button.innerHTML = translations[lang].sending;
            status.className = 'alert alert-info mt-3';
            status.textContent = translations[lang].sending;

            try {
                const response = await fetch('https://pixelvault-contactos.adielvelasquez444.workers.dev/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });
                const result = await response.json();
                if (!response.ok || !result.success) {
                    throw new Error(result.error || 'No se pudo enviar la consulta.');
                }
                status.className = 'alert alert-success mt-3';
                status.textContent = translations[lang].success;
                form.reset();
                form.classList.remove('was-validated');
            } catch (error) {
                console.error('Error de contacto:', error);
                status.className = 'alert alert-danger mt-3';
                status.textContent = translations[lang].error;
            } finally {
                button.disabled = false;
                button.innerHTML = '<i class="bi bi-send me-2"></i>' + translations[lang].btn_enviar;
            }
        });
    }

    // ==========================================
    // DEMOSTRACIÓN DE JAVASCRIPT (Mantiene tu código)
    // ==========================================
    const jsDemo = document.getElementById('jsDemo');
    if (jsDemo) {
        jsDemo.addEventListener('click', () => {
            const message = document.getElementById('jsMessage');
            if (message) {
                const lang = document.documentElement.lang;
                message.textContent = translations[lang].js_demo_success;
            }
        });
    }

    // ==========================================
    // DEMOSTRACIONES DE JQUERY (Mantiene tu código)
    // ==========================================
    const jqFade = document.getElementById('jqFade');
    const jqSlide = document.getElementById('jqSlide');
    if (jqFade) {
        jqFade.addEventListener('click', () => {
            const element = document.getElementById('jqBox');
            if (!element) return;
            if (window.jQuery) {
                const $ = window.jQuery;
                $(element).is(':visible') ? $(element).fadeOut(200, () => $(element).fadeIn(200)) : $(element).fadeIn(200);
            } else {
                element.classList.toggle('d-none');
            }
        });
    }
    if (jqSlide) {
        jqSlide.addEventListener('click', () => {
            const panel = document.getElementById('jqPanel');
            if (!panel) return;
            if (window.jQuery) {
                window.jQuery(panel).slideToggle(250);
            } else {
                panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
            }
        });
    }

    // ==========================================
    // DEMOSTRACIÓN DE JSON (Mantiene tu código)
    // ==========================================
    const jsonDemo = document.getElementById('jsonDemo');
    if (jsonDemo) {
        jsonDemo.addEventListener('click', () => {
            const data = { nombre: 'Minecraft', precio: 29.99, disponible: true };
            const output = document.getElementById('jsonOutput');
            if (output) {
                const lang = document.documentElement.lang;
                output.textContent = `${data.nombre} · ${translations[lang].json_price}: ${money(data.precio)} · ${translations[lang].json_available}: ${data.disponible ? translations[lang].json_yes : translations[lang].json_no}`;
            }
        });
    }

    // ==========================================
    // CUESTIONARIO WEB (Mantiene tu código)
    // ==========================================
    const quiz = document.getElementById('quiz');
    if (quiz) {
        const answers = { q1: 'a', q2: 'b', q3: 'c', q4: 'a', q5: 'b', q6: 'c' };
        quiz.addEventListener('submit', event => {
            event.preventDefault();
            if (!quiz.checkValidity()) {
                quiz.reportValidity();
                return;
            }
            const data = new FormData(quiz);
            let score = 0;
            Object.entries(answers).forEach(([question, answer]) => {
                if (data.get(question) === answer) score++;
            });
            const output = document.getElementById('quizResult');
            if (!output) return;
            const lang = document.documentElement.lang;
            output.className = 'alert mt-4 ' + (score >= 4 ? 'alert-success' : 'alert-info');
            output.textContent = translations[lang].quiz_result + score + translations[lang].quiz_correct + (score === 6 ? translations[lang].quiz_excellent : score >= 4 ? translations[lang].quiz_good : translations[lang].quiz_review);
        });
        quiz.addEventListener('reset', () => {
            const output = document.getElementById('quizResult');
            if (output) {
                output.className = 'alert d-none mt-4';
                output.textContent = '';
            }
        });
    }
})();

// ==========================================
// MÚSICA DE FONDO
// ==========================================
const musica = document.getElementById('musicaFondo');
const btnMusica = document.getElementById('btnMusica');
const iconoMusica = document.getElementById('iconoMusica');

if (musica && btnMusica) {
    // Volumen bajo para que no moleste
    musica.volume = 0.3;
    
    // Cargar preferencia guardada
    const musicaActivada = localStorage.getItem('pv-musica') === 'true';
    
    if (musicaActivada) {
        musica.play().then(() => {
            btnMusica.classList.add('activa');
            iconoMusica.className = 'bi bi-volume-up-fill';
        }).catch(err => {
            console.log('Autoplay bloqueado, esperando interacción');
        });
    }
    
    // Botón para activar/desactivar
    btnMusica.addEventListener('click', function() {
        if (musica.paused) {
            musica.play().then(() => {
                btnMusica.classList.add('activa');
                iconoMusica.className = 'bi bi-volume-up-fill';
                localStorage.setItem('pv-musica', 'true');
            }).catch(err => {
                console.error('Error al reproducir:', err);
            });
        } else {
            musica.pause();
            btnMusica.classList.remove('activa');
            iconoMusica.className = 'bi bi-volume-mute-fill';
            localStorage.setItem('pv-musica', 'false');
        }
    });
}

