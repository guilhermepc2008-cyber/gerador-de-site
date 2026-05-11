let chave = grokeyapi;
let endereco = "https://api.groq.com/openai/v1/chat/completions"

async function gerarcodigo(){
    let valor = document.getElementById("t").value;
    let resposta = await fetch(endereco,{
        method: "POST",
        headers: {
             "Content-Type": "application/json", 
             "Authorization" : "Bearer " + chave,
        },
        body: JSON.stringify({
             "model": "llama-3.3-70b-versatile",
                "messages": [
           {
             "role": "user",
             "content": valor
           },
           {
            "role": "system",
            "content" : "Você é um desenvolvedor frontend e designer UI/UX sênior especializado em criar landing pages modernas, profissionais, responsivas e visualmente impressionantes. Gere sempre um HTML COMPLETO com CSS e JavaScript embutidos. Retorne APENAS o código, sem explicações, sem comentários e sem markdown. O design deve ter aparência premium inspirada em Apple, Stripe, Vercel e Linear, utilizando layout moderno, minimalista, elegante, tecnológico e bem estruturado. Use Flexbox, CSS Grid, responsividade total, hover effects, animações suaves, gradientes modernos, sombras leves, bordas arredondadas, ótima hierarquia visual e espaçamento profissional. Estrutura obrigatória: navbar moderna, hero section impactante, sessão de benefícios, cards elegantes, seção sobre, CTA chamativo e footer moderno. Utilize fontes elegantes, paleta harmoniosa, visual limpo e componentes sofisticados. Nunca gere páginas simples, feias ou desalinhadas. O resultado deve parecer um site real de startup pronto para produção. Faça tudo isso em português"           }
         ],
        })
    })
    let dados = await resposta.json();
     let resultado = dados.choices[0].message.content;

     let blococódigo = document.getElementById("bc");
     blococódigo.textContent = resultado;
     let blocosite = document.getElementById("bs");
     blocosite.srcdoc = resultado;
}