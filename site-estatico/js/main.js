// Comportamentos do site.


// ---------- Menu mobile ----------
// Abrir/fechar é feito pelo HTML nativo (<dialog> + command/commandfor); aqui só fechamos ao clicar em um link.
const drawer = document.getElementById('menuDrawer');
if (drawer) {
  drawer.addEventListener('click', (e) => {
    if (e.target.closest('a')) drawer.close();
  });
}

// ---------- Formulário ----------
// Só a Home tem o formulário; nas outras páginas (ex.: Cursos) este bloco não roda.
const form = document.getElementById('form-lead');
if (form) {
  const status = document.getElementById('status-form');
  const campoWhatsapp = document.getElementById('whatsapp');

  // Máscara: (21) 90000-0000
  campoWhatsapp.addEventListener('input', () => {
    const d = campoWhatsapp.value.replace(/\D/g, '').slice(0, 11);
    let r = d;
    if (d.length > 2) r = `(${d.slice(0, 2)}) ${d.slice(2)}`;
    if (d.length > 7) r = `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
    campoWhatsapp.value = r;
  });

  const regras = {
    nome: (v) => (v.trim().split(/\s+/).length < 2 ? 'Informe nome e sobrenome.' : ''),
    whatsapp: (v) => (v.replace(/\D/g, '').length < 10 ? 'Informe um WhatsApp com DDD.' : ''),
    email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? '' : 'Informe um e-mail válido.'),
    curso: (v) => (v ? '' : 'Escolha um curso.'),
    idade: (v) => (Number(v) >= 7 && Number(v) <= 120 ? '' : 'Informe a idade do aluno (a partir de 7 anos).'),
  };

  function validarCampo(input) {
    const msg = regras[input.name](input.value);
    const campo = input.closest('.campo');
    campo.classList.toggle('invalido', Boolean(msg));
    campo.querySelector('.erro').textContent = msg;
    input.setAttribute('aria-invalid', msg ? 'true' : 'false');
    return !msg;
  }

  form.querySelectorAll('input, select').forEach((input) => {
    input.addEventListener('blur', () => validarCampo(input));
    input.addEventListener('input', () => {
      if (input.closest('.campo').classList.contains('invalido')) validarCampo(input);
    });
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    status.className = 'status-form';
    status.textContent = '';

    const campos = [...form.querySelectorAll('input, select')];
    const validos = campos.map(validarCampo);
    if (validos.includes(false)) {
      campos[validos.indexOf(false)].focus();
      return;
    }

    const botao = form.querySelector('button[type="submit"]');
    botao.disabled = true;

    try {
      // TODO (semana 2): rota /api/lead
      const resposta = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      if (!resposta.ok) throw new Error('Falha no envio');

      form.reset();
      status.classList.add('ok');
      status.textContent = 'Recebemos seus dados! Enviaremos o link do teste de nivelamento.';
    } catch (erro) {
      status.classList.add('falha');
      status.textContent = 'Não foi possível enviar agora. Tente novamente ou fale pelo WhatsApp.';
    } finally {
      botao.disabled = false;
    }
  });
}
