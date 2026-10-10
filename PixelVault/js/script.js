(() => {
    'use strict';
    const root = document.documentElement; function setTheme(t) { root.setAttribute('data-bs-theme', t); try { localStorage.setItem('pv-theme', t) } catch (e) { } document.querySelectorAll('.theme-toggle').forEach(b => { const i = b.querySelector('i'); if (i) i.className = t === 'dark' ? 'bi bi-sun' : 'bi bi-moon-stars'; b.setAttribute('aria-label', t === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro') }) } setTheme(root.getAttribute('data-bs-theme') || 'light'); document.querySelectorAll('.theme-toggle').forEach(b => b.addEventListener('click', () => setTheme(root.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark')));
    const search = document.getElementById('searchGame'); if (search) { const items = [...document.querySelectorAll('.game-item')]; search.addEventListener('input', () => { let n = 0; items.forEach(el => { const ok = (el.dataset.search || '').includes(search.value.toLowerCase().trim()); el.classList.toggle('d-none', !ok); if (ok) n++ }); document.getElementById('noGames').classList.toggle('d-none', n > 0) }) }
    const cart = new Map(), count = document.getElementById('cartCount'), list = document.getElementById('cartItems'), totalEl = document.getElementById('cartTotal'), checkout = document.getElementById('checkout'); const money = n => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(n); function render() { let n = 0, total = 0; cart.forEach(x => { n += x.qty; total += x.price * x.qty }); if (count) count.textContent = n; if (totalEl) totalEl.textContent = money(total); if (!list) return; list.replaceChildren(); if (!cart.size) { list.innerHTML = '<p class="text-secondary">Todavía no has agregado juegos.</p>'; return } cart.forEach(x => { const row = document.createElement('div'); row.className = 'cart-line'; const text = document.createElement('div'); text.innerHTML = '<strong></strong><div class="small text-secondary"></div>'; text.querySelector('strong').textContent = x.name; text.querySelector('div').textContent = x.qty + ' × ' + money(x.price); const remove = document.createElement('button'); remove.className = 'btn btn-sm btn-outline-danger'; remove.textContent = 'Quitar'; remove.addEventListener('click', () => { cart.delete(x.id); render() }); row.append(text, remove); list.append(row) }) }
    function toast(msg) { const el = document.getElementById('pvToast'); if (!el || !window.bootstrap) return; document.getElementById('toastText').textContent = msg; bootstrap.Toast.getOrCreateInstance(el).show() }
    document.querySelectorAll('.add-cart').forEach(b => b.addEventListener('click', () => { const id = b.dataset.id, old = cart.get(id); if (old) old.qty++; else cart.set(id, { id, name: b.dataset.name, price: Number(b.dataset.price), qty: 1 }); render(); toast(b.dataset.name + ' se agregó al carrito.') }));
    if (checkout) checkout.addEventListener('click', () => { if (!cart.size) { toast('Agrega un juego antes de simular el pedido.'); return } alert('Pedido de demostración realizado. No se cobró dinero.'); cart.clear(); render() }); render();
    const form = document.getElementById('contactForm'); if (form) form.addEventListener('submit', e => { e.preventDefault(); e.stopPropagation(); form.classList.add('was-validated'); if (!form.checkValidity()) return; const s = document.getElementById('contactStatus'); s.className = 'alert alert-success mt-3'; s.textContent = '¡Gracias! El formulario es válido. En esta versión no se envía a un servidor.'; form.reset(); form.classList.remove('was-validated') });
    const jsDemo = document.getElementById('jsDemo'); if (jsDemo) jsDemo.addEventListener('click', () => document.getElementById('jsMessage').textContent = '¡Funciona! JavaScript respondió al evento click.');
    const jqFade = document.getElementById('jqFade'), jqSlide = document.getElementById('jqSlide'); if (jqFade) jqFade.addEventListener('click', () => { const el = document.getElementById('jqBox'); if (window.jQuery) { const $ = window.jQuery; $(el).is(':visible') ? $(el).fadeOut(200, () => $(el).fadeIn(200)) : $(el).fadeIn(200) } else el.classList.toggle('d-none') }); if (jqSlide) jqSlide.addEventListener('click', () => { const el = document.getElementById('jqPanel'); if (window.jQuery) window.jQuery(el).slideToggle(250); else el.style.display = el.style.display === 'block' ? 'none' : 'block' });
    const jsonDemo = document.getElementById('jsonDemo'); if (jsonDemo) jsonDemo.addEventListener('click', () => { const data = JSON.parse('{"nombre":"Minecraft","precio":29.99,"disponible":true}'); const out = document.getElementById('jsonOutput'); out.textContent = `${data.nombre} · Precio: ${money(data.precio)} · Disponible: ${data.disponible ? 'Sí' : 'No'}` });
    const quiz = document.getElementById('quiz'); if (quiz) { const answers = { q1: 'a', q2: 'b', q3: 'c', q4: 'a', q5: 'b', q6: 'c' }; quiz.addEventListener('submit', e => { e.preventDefault(); if (!quiz.checkValidity()) { quiz.reportValidity(); return } const data = new FormData(quiz); let score = 0; Object.entries(answers).forEach(([q, a]) => { if (data.get(q) === a) score++ }); const out = document.getElementById('quizResult'); out.className = 'alert mt-4 ' + (score >= 4 ? 'alert-success' : 'alert-info'); out.textContent = `Obtuviste ${score} de 6 respuestas correctas. ` + (score === 6 ? '¡Excelente!' : score >= 4 ? 'Buen trabajo.' : 'Repasa los temas e inténtalo otra vez.') }); quiz.addEventListener('reset', () => { const out = document.getElementById('quizResult'); out.className = 'alert d-none mt-4'; out.textContent = '' }) }
})();


const formularioDiscord = document.getElementById("contactForm");

if (formularioDiscord) {
    formularioDiscord.addEventListener("submit", async function (event) {
        event.preventDefault();

        formularioDiscord.classList.add("was-validated");

        if (!formularioDiscord.checkValidity()) {
            event.stopPropagation();
            return;
        }

        const boton = formularioDiscord.querySelector(
            'button[type="submit"]'
        );
        const estado = document.getElementById("contactStatus");

        const datos = {
            nombre: document.getElementById("contactName").value.trim(),
            correo: document.getElementById("contactEmail").value.trim(),
            motivo: document.getElementById("contactReason").value,
            mensaje: document.getElementById("contactMessage").value.trim()
        };

        boton.disabled = true;
        boton.innerHTML = "Enviando consulta...";

        estado.className = "alert alert-info mt-3";
        estado.textContent = "Enviando tu consulta a PixelVault...";

        try {
            const respuesta = await fetch(
                "https://pixelvault-contactos.adielvelasquez444.workers.dev/",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(datos)
                }
            );

            const resultado = await respuesta.json();

            if (!respuesta.ok || !resultado.success) {
                throw new Error(
                    resultado.error || "No se pudo enviar la consulta"
                );
            }

            estado.className = "alert alert-success mt-3";
            estado.textContent =
                "¡Consulta enviada correctamente a PixelVault!";

            formularioDiscord.reset();
            formularioDiscord.classList.remove("was-validated");

        } catch (error) {
            console.error("Error de contacto:", error);

            estado.className = "alert alert-danger mt-3";
            estado.textContent =
                "No se pudo enviar la consulta. Inténtalo de nuevo.";
        } finally {
            boton.disabled = false;
            boton.innerHTML =
                '<i class="bi bi-send me-2"></i>Enviar consulta';
        }
    });
}