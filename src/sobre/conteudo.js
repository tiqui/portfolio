/* ==========================================================================
   CONTEÚDO DA SEÇÃO "SOBRE" E DAS NOTAS (BLOG)
   É só editar este arquivo: index.html e blog.html leem tudo daqui.
   Textos entre [colchetes] são exemplos esperando o conteúdo real.
   ========================================================================== */
window.RY_CONTEUDO = {
  /* E-mail que recebe os pedidos de inscrição na newsletter. */
  emailNewsletter: 'redellenyurisantos@gmail.com',

  /* INFORMAÇÕES: bolsas, formação, prêmios, certificados... Aparecem na ordem abaixo. */
  informacoes: [
    {
      tipo: { pt: 'Bolsa', en: 'Scholarship' },
      titulo: { pt: '[Nome da bolsa]', en: '[Scholarship name]' },
      detalhe: { pt: '[Instituição] · [Período]', en: '[Institution] · [Period]' },
      texto: {
        pt: '[Descreva em uma ou duas frases o que a bolsa cobre e o que você desenvolve com ela.]',
        en: '[Describe in one or two sentences what the scholarship covers and what you work on.]'
      }
    },
    {
      tipo: { pt: 'Formação', en: 'Education' },
      titulo: { pt: 'Engenharia da Computação', en: 'Computer Engineering' },
      detalhe: { pt: 'FAESA · Conclusão 2027', en: 'FAESA · Graduating 2027' },
      texto: { pt: '', en: '' }
    },
    {
      tipo: { pt: 'Certificado', en: 'Certificate' },
      titulo: { pt: 'Google Cybersecurity Professional Certificate', en: 'Google Cybersecurity Professional Certificate' },
      detalhe: { pt: 'Coursera', en: 'Coursera' },
      texto: { pt: '', en: '' }
    }
  ],

  /* NOTAS DO BLOG: para publicar, copie um bloco e troque os campos.
     - slug: identificador do link, sem espaços nem acentos (ex.: meu-homelab)
     - data: AAAA-MM-DD (as mais recentes aparecem primeiro)
     - corpo: HTML; use <p>, <h2>, <ul>, <a>, <pre><code>...
     - sem versão em inglês? Repita o texto em português no campo en. */
  posts: [
    {
      slug: 'primeira-nota',
      data: '2026-11-06',
      titulo: { pt: '[Título da primeira nota]', en: '[First post title]' },
      resumo: {
        pt: '[Uma frase dizendo do que se trata: aparece na lista de notas.]',
        en: '[One sentence about the post: shown in the post list.]'
      },
      corpo: {
        pt: '<p>[Escreva aqui o texto da nota. Cada parágrafo fica dentro de uma tag p.]</p>',
        en: '<p>[Write the post here. Each paragraph goes inside a p tag.]</p>'
      }
    }
  ],

  /* ---------- Daqui para baixo não precisa editar ---------- */
  postsOrdenados() {
    return [...this.posts].sort((a, b) => b.data.localeCompare(a.data));
  },

  /* Monta a data pelas partes: new Date('AAAA-MM-DD') é UTC e no Brasil cairia um dia antes. */
  formatarData(iso, lang) {
    const [ano, mes, dia] = iso.split('-').map(Number);
    return new Date(ano, mes - 1, dia).toLocaleDateString(lang === 'en' ? 'en-US' : 'pt-BR', {
      day: '2-digit', month: 'short', year: 'numeric'
    });
  },

  linkNewsletter(lang) {
    const assunto = lang === 'en' ? 'Newsletter signup' : 'Inscrição na newsletter';
    return `mailto:${this.emailNewsletter}?subject=${encodeURIComponent(assunto)}`;
  }
};
