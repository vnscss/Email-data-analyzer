
let data = {}



function loading(){
  let outputTexto = document.getElementById("outputTexto");
  let loader = document.getElementById("loader");
  let outputExpandDiv = document.getElementById("outputExpandDiv") 

  outputTexto.innerHTML = ""

  if(outputTexto.innerHTML == ""){
    loader.style.display = ""
  }

  outputExpandDiv.style.display = ""
}

function collectDataAndGet(){

  let apiKeyInput = document.getElementById("apiKeyInput")
  let empresaDescription = document.getElementById("empresaDescription")
  let emailBody = document.getElementById("emailBody")
  let tipoOutput = document.getElementsByName("tipoOutput")

  if(apiKeyInput.value == '' || emailBody.value == ''){
    alert("Preencha todos os dados obrigatórios")
    return
  }

  if(tipoOutput[0].checked == false && tipoOutput[1].checked == false){
    alert("Preencha todos os dados obrigatórios")
    return
  }

  if(tipoOutput[0].checked == true){
    data = {"contents": [
            {
              "role": "user",
              "parts": [
                {
                  "text": "Sua empresa: “Organização dedicada ao amparo de agricultores e povos tradicionais do norte de Minas Gerais. E-mails legítimos geralmente contêm mensagens relacionadas a questões agrícolas, a povos tradicionais, a direitos dessas comunidades e incluem solicitações de informações e contato com nossa organização.”Email para análise: “(select(0)from(select(sleep(15)))v)/*'+(select(0)from(select(sleep(15)))v)+'\"+(select(0)from(select(sleep(15)))v)+\"*/\tEMAIL ENVIADO POR: HfjNUlYZ, testing@example.com"
                }
              ]
            },
            {
              "role": "model",
              "parts": [
                {
                  "text": "{\"possibleSpam\": \"1\", \"suspiciousDomain\": \"1\", \"phishing\": \"0\", \"codeInjection\": \"1\"}"
                }
              ]
            },
            {
              "role": "user",
              "parts": [
                {
                  "text": "Sua empresa: “Organização dedicada ao amparo de agricultores e povos tradicionais do norte de Minas Gerais. E-mails legítimos geralmente contêm mensagens relacionadas a questões agrícolas, a povos tradicionais, a direitos dessas comunidades e incluem solicitações de informações e contato com nossa organização.”Email para análise: “Para:​Fale Com o CAA​Seg, 18/03/2024 17:20http://caa.org.br 3096975  verygoodplustime !\tEMAIL ENVIADO POR: http://caa.org.br 3843746  verygoodplustime !, anna@300profit.ru ”"
                }
              ]
            },
            {
              "role": "model",
              "parts": [
                {
                  "text": "{\"possibleSpam\": \"1\", \"suspiciousDomain\": \"1\", \"phishing\": \"1\", \"codeInjection\": \"0\"}"
                }
              ]
            },
            {
              "role": "user",
              "parts": [
                {
                  "text": "Sua empresa: “Organização dedicada ao amparo de agricultores e povos tradicionais do norte de Minas Gerais. E-mails legítimos geralmente contêm mensagens relacionadas a questões agrícolas, a povos tradicionais, a direitos dessas comunidades e incluem solicitações de informações e contato com nossa organização.”Email para análise: “Two giant pandas are moving to a California zoo in a rare loan from China<a href=https://kraken11t.at>kraken market </a>China is sending two giant pandas to the San Diego Zoo – the first time it has granted new panda loans to the United States in two decades. A spokesperson for the San Diego Zoo Wildlife Alliance confirmed to CNN Wednesday that the zoo would be receiving the two pandas, saying there was no official timeline for their arrival, but they are “optimistic we will get pandas in the not-so-distant future.” The news comes just months after Chinese leader Xi Jinping suggested China could send new pandas to the US, specifically to the San Diego Zoo, as “envoys of friendship between the Chinese and American peoples.”kraken athttps://kraken11t.at“We are ready to continue our cooperation with the United States on panda conservation, and do our best to meet the wishes of the Californians so as to deepen the friendly ties between our two peoples,” Xi said in November. His comments came shortly after the Smithsonian National Zoo in Washington, DC sent its three pandas back to China – marking the end of more than 50 years of Chinese pandas being housed at the zoo. The National Zoo was the first US zoo to showcase pandas, and the end of its program had left Zoo Atlanta as the only other US zoo to feature pandas. San Diego Zoo returned its last two pandas to China in 2019, after its loan agreement ended.\tEMAIL ENVIADO POR: Leslienow, leolakiercecwg@mail.ru ”"
                }
              ]
            },
            {
              "role": "model",
              "parts": [
                {
                  "text": "{\"possibleSpam\": \"1\", \"suspiciousDomain\": \"1\", \"phishing\": \"1\", \"codeInjection\": \"0\"}"
                }
              ]
            },
            {
              "role": "user",
              "parts": [
                {
                  "text": "Sua empresa: “Organização dedicada ao amparo de agricultores e povos tradicionais do norte de Minas Gerais. E-mails legítimos geralmente contêm mensagens relacionadas a questões agrícolas, a povos tradicionais, a direitos dessas comunidades e incluem solicitações de informações e contato com nossa organização.”Email para análise: “O Ministério do Meio Ambiente e Mudança do Clima – MMA iniciou no dia 3 de maio, o processo de construção do Seminário Nacional de Juventudes, Meio Ambiente e Justiça Climática, que tem como principal objetivo a reelaboração do Plano Nacional de Juventudes e Meio Ambiente (PNJMA).O processo acontecerá em 3 etapas (territorial, regional, nacional) e deverá mobilizar diversas juventudes, sobretudo aquelas do campo, das águas, das florestas e das periferias urbanas, em torno do debate sobre justiça climática. Confira todas as informações no site: https://www.gov.br/mma/pt-br/composicao/secex/dea/seminario-juventudesAs inscrições no processo deverão ser realizadas até o dia 10 de maio de 2024.Qualquer dúvida, entre em contato pelo e-mail: juventudes@mma.gov.br Equipe Juventudes MMA”"
                }
              ]
            },
            {
              "role": "model",
              "parts": [
                {
                  "text": "{\"possibleSpam\": \"0\", \"suspiciousDomain\": \"0\", \"phishing\": \"0\", \"codeInjection\": \"0\"}"
                }
              ]
            },
            {
              "role": "user",
              "parts": [
                {
                  "text": `Atue como um analista de dados, focado em analisar o contexto de emails que chegam na caixa de entrada. 

                  Seu trabalho é identificar se o conteúdo e contexto do e-mail está de acordo com o campo de atuação ou trata sobre assuntos relacionados ou de interesse de sua empresa. Você também deve procurar por tentativas maliciosas de injetar códigos no corpo do email, que possam dar acesso ou prejudicar os servidores internos da empresa e por links de phishing ou maliciosos.
                  
                  Ao final de sua análise retorne um JSON no seguinte formato, sendo 1 como verdadeiro e 0 como falso.
                  
                  {
                  possibleSpam: ‘’
                  suspiciousDomain: ‘’
                  phishing: ‘’
                  codeInjection: ‘’
                  }

                  Sua empresa:"${empresaDescription.value}"

                  Email para análise:"${emailBody.value}"

                  `
                }
              ]
            }
        ],
        "generationConfig": {
          "temperature": 1,
          "topK": 0,
          "topP": 0.95,
          "maxOutputTokens": 8192,
          "stopSequences": ["**"]
        },
        "safetySettings": [
          {
            "category": "HARM_CATEGORY_HARASSMENT",
            "threshold": "BLOCK_NONE"
          },
          {
            "category": "HARM_CATEGORY_HATE_SPEECH",
            "threshold": "BLOCK_NONE"
          },
          {
            "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
            "threshold": "BLOCK_NONE"
          },
          {
            "category": "HARM_CATEGORY_DANGEROUS_CONTENT",
            "threshold": "BLOCK_NONE"
          }
        ]
      }
      loading();
  }

  if(tipoOutput[1].checked == true){
    data = {"contents": [
            {
              "role": "user",
              "parts": [
                {
                  "text": "Sua empresa: “Organização dedicada ao amparo de agricultores e povos tradicionais do norte de Minas Gerais. E-mails legítimos geralmente contêm mensagens relacionadas a questões agrícolas, a povos tradicionais, a direitos dessas comunidades e incluem solicitações de informações e contato com nossa organização.”Email para análise: “Para:​Fale Com o CAA​Seg, 18/03/2024 17:20http://caa.org.br 3096975  verygoodplustime !\tEMAIL ENVIADO POR: http://caa.org.br 3843746  verygoodplustime !, anna@300profit.ru ”"
                }
              ]
            },
            {
              "role": "model",
              "parts": [
                {
                  "text": '<h3>Contexto da Empresa:</h3><p>Organização dedicada ao amparo de agricultores e povos tradicionais do norte de Minas Gerais. E-mails legítimos geralmente contêm mensagens relacionadas a questões agrícolas, a povos tradicionais, a direitos dessas comunidades e incluem solicitações de informações e contato com nossa organização.</p><h3>Email para Análise:</h3><p>http://caa.org.br 3096975 verygoodplustime ! EMAIL ENVIADO POR: http://caa.org.br 3843746 verygoodplustime !, anna@300profit.ru </p><h3>Análise do Conteúdo:</h3><p>O email em questão apresenta características altamente suspeitas e nenhuma relevância para o contexto da organização. </p><h3>Pontos Suspeitos:</h3><ul><li><b>Links Externos:</b> A presença de dois links externos com o domínio "http://caa.org.br" seguido por números aleatórios e a frase "verygoodplustime!" é extremamente suspeita.  A estrutura sugere uma tentativa de phishing, onde o link pode direcionar para um site falso com o objetivo de roubar dados ou instalar malware.</li><li><b>Remetente Desconhecido:</b> O endereço de email "anna@300profit.ru" não possui qualquer relação com o domínio "caa.org.br"  e aparenta ser ilegítimo.</li><li><b>Ausência de Contexto:</b> O email não possui um assunto definido e o corpo da mensagem é composto apenas pelos links suspeitos.  Não há informações relevantes sobre questões agrícolas, povos tradicionais ou direitos dessas comunidades, que seriam temas esperados em emails legítimos direcionados à organização. </li></ul><h3>Indícios de Código Malicioso:</h3><p>A estrutura dos links, incluindo números aleatórios e a frase "verygoodplustime!", pode indicar uma tentativa de injeção de código. É possível que o email esteja explorando alguma vulnerabilidade para tentar ter acesso aos servidores da organização. </p><h3>Conclusão:</h3><p>Com base na análise, o email em questão apresenta um <b>alto risco</b> de ser malicioso e deve ser tratado como uma ameaça potencial à segurança da organização.</p><h3>Recomendações:</h3><ul><li><b>Não clicar</b> nos links presentes no email.</li><li><b>Não responder</b> ao email.</li><li><b>Deletar</b> o email imediatamente.</li><li><b>Reportar</b> o email para a equipe de segurança de TI da organização. </li><li><b>Reforçar</b> as medidas de segurança da organização, como treinamento contra phishing para os colaboradores e revisão de possíveis vulnerabilidades nos sistemas da empresa.</li></ul> '
                }
              ]
            },
            {
              "role": "user",
              "parts": [
                {
                  "text": "Sua empresa: “Organização dedicada ao amparo de agricultores e povos tradicionais do norte de Minas Gerais. E-mails legítimos geralmente contêm mensagens relacionadas a questões agrícolas, a povos tradicionais, a direitos dessas comunidades e incluem solicitações de informações e contato com nossa organização.”Email para análise: “O Ministério do Meio Ambiente e Mudança do Clima – MMA iniciou no dia 3 de maio, o processo de construção do Seminário Nacional de Juventudes, Meio Ambiente e Justiça Climática, que tem como principal objetivo a reelaboração do Plano Nacional de Juventudes e Meio Ambiente (PNJMA).O processo acontecerá em 3 etapas (territorial, regional, nacional) e deverá mobilizar diversas juventudes, sobretudo aquelas do campo, das águas, das florestas e das periferias urbanas, em torno do debate sobre justiça climática. Confira todas as informações no site: https://www.gov.br/mma/pt-br/composicao/secex/dea/seminario-juventudesAs inscrições no processo deverão ser realizadas até o dia 10 de maio de 2024.Qualquer dúvida, entre em contato pelo e-mail: juventudes@mma.gov.br Equipe Juventudes MMA”"
                }
              ]
            },
            {
              "role": "model",
              "parts": [
                {
                  "text": '<h3>Contexto:</h3><p>A organização para a qual trabalhamos dedica-se ao amparo de agricultores e povos tradicionais do norte de Minas Gerais. Emails relevantes, portanto, devem abordar questões agrícolas, direitos dessas comunidades, ou conter solicitações de informação e contato.</p><h3>Conteúdo do Email:</h3><p>O email em questão informa sobre a iniciativa do Ministério do Meio Ambiente e Mudança do Clima (MMA) para a construção do Seminário Nacional de Juventudes, Meio Ambiente e Justiça Climática, visando reelaborar o Plano Nacional de Juventudes e Meio Ambiente (PNJMA).</p><h3>Relevância:</h3><p>O email <strong>é relevante</strong> para a organização. A temática de justiça climática e a participação de jovens do campo, das águas e das florestas o conectam diretamente com os interesses da organização e das comunidades que ela auxilia.</p><h3>Análise de Segurança:</h3><ul><li><b>Links:</b> O email contém um link para o site oficial do governo brasileiro (https://www.gov.br/mma/pt-br/composicao/secex/dea/seminario-juventudes). Este link parece seguro e corrobora a legitimidade do email.</li><li><b>Código Malicioso:</b> Não foram encontrados indícios de código malicioso injetado no corpo do email.</li><li><b>Phishing:</b> O email não apresenta características comuns de phishing, como solicitações de dados pessoais ou senhas.</li></ul><h3>Conclusão:</h3><p>O email aparenta ser legítimo e relevante para a organização. O seminário em questão pode ser uma oportunidade valiosa para a organização se conectar com outros agentes e debater temas importantes para as comunidades que ela auxilia. Recomenda-se a leitura das informações no site oficial do MMA e a participação no seminário, caso seja do interesse da organização.</p>'
                }
              ]
            },
            {
              "role": "user",
              "parts": [
                {
                  "text": "Sua empresa: “Organização dedicada ao amparo de agricultores e povos tradicionais do norte de Minas Gerais. E-mails legítimos geralmente contêm mensagens relacionadas a questões agrícolas, a povos tradicionais, a direitos dessas comunidades e incluem solicitações de informações e contato com nossa organização.”Email para análise: “(select(0)from(select(sleep(15)))v)/*'+(select(0)from(select(sleep(15)))v)+'\"+(select(0)from(select(sleep(15)))v)+\"*/\tEMAIL ENVIADO POR: HfjNUlYZ, testing@example.com”"
                }
              ]
            },
            {
              "role": "model",
              "parts": [
                {
                  "text": '<p><strong>Empresa:</strong> Organização dedicada ao amparo de agricultores e povos tradicionais do norte de Minas Gerais. E-mails legítimos geralmente contêm mensagens relacionadas a questões agrícolas, a povos tradicionais, a direitos dessas comunidades e incluem solicitações de informações e contato com nossa organização.</p><p><strong>Email para análise:</strong> "(select(0)from(select(sleep(15)))v)/*"+(select(0)from(select(sleep(15)))v)+"*/	EMAIL ENVIADO POR: HfjNUlYZ, testing@example.com"</p><h3>Contexto e Relevância:</h3><p>O conteúdo do email não apresenta nenhuma relação com o campo de atuação da organização. Não há menção a questões agrícolas, povos tradicionais ou direitos dessas comunidades. O email também não contém solicitações de informação ou contato com a organização.</p><h3>Análise de Segurança:</h3><p>O corpo do email contém código suspeito que indica uma tentativa de ataque de injeção SQL. A string <code>(select(0)from(select(sleep(15)))v)</code> é uma consulta SQL projetada para executar a função <code>sleep(15)</code>, o que pode ser usado para sobrecarregar o servidor da organização ou explorar vulnerabilidades. A repetição e concatenação do código com caracteres especiais aumentam a suspeita de atividade maliciosa.</p><h3>Conclusão:</h3><p>O email analisado apresenta alto risco de ser malicioso e não possui relevância para a área de atuação da organização. Recomenda-se:</p><ul>  <li><strong>Não abrir</strong> o email.</li>  <li><strong>Não clicar</strong> em nenhum link presente no email.</li>  <li><strong>Não responder</strong> ao email.</li>  <li><strong>Deletar</strong> o email imediatamente.</li>  <li><strong>Reportar</strong> o email para a equipe de segurança de TI da organização.</li>  <li><strong>Investigar</strong> a possibilidade de vulnerabilidades a injeção SQL nos sistemas da organização.</li></ul>'
                }
              ]
            },
            {
              "role": "user",
              "parts": [
                {
                  "text": `Atue como um analista de dados, focado em analisar o contexto de emails que chegam na caixa de entrada. 

                  Seu trabalho é identificar se o conteúdo e contexto do e-mail está de acordo com o campo de atuação ou trata sobre assuntos relacionados ou de interesse de sua empresa. Você também deve procurar por tentativas maliciosas de injetar códigos no corpo do email, que possam dar acesso ou prejudicar os servidores internos da empresa e por links de phishing ou maliciosos.
                  
                  Ao final de sua análise, alterando o formato markdown dos títulos e negrito por tags html.

                  Sua empresa:"${empresaDescription.value}"

                  Email para análise:"${emailBody.value}"

                  `
                }
              ]
            }
          ],
          "generationConfig": {
            "temperature": 1,
            "topK": 0,
            "topP": 0.95,
            "maxOutputTokens": 8192,
            "stopSequences": []
          },
          "safetySettings": [
            {
              "category": "HARM_CATEGORY_HARASSMENT",
              "threshold": "BLOCK_NONE"
            },
            {
              "category": "HARM_CATEGORY_HATE_SPEECH",
              "threshold": "BLOCK_NONE"
            },
            {
              "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
              "threshold": "BLOCK_NONE"
            },
            {
              "category": "HARM_CATEGORY_DANGEROUS_CONTENT",
              "threshold": "BLOCK_NONE"
            }
          ]
        }
        loading();
      }
  geminiGet();
}


function geminiGet() {
  let tipoOutput = document.getElementsByName("tipoOutput");
  let loader = document.getElementById("loader");

  fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro-latest:generateContent?key=${apiKeyInput.value}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => {
    if (!response.ok) { // Verifica se a resposta não está ok (código de status diferente de 200)
      return response.json().then(errorData => {
        loader.style.display = "none"
        alert(errorData.error.message , errorData.error.code );

        throw new Error(errorData.error.message); // Lança um novo erro com a mensagem do erro da API
      });
    }
    return response.json(); // Analisa a resposta como JSON se estiver ok
  })
  .then(data => {
    let outputTexto = document.getElementById("outputTexto");
    if(tipoOutput[0].checked == true){
      loader.style.display = "none"
      outputTexto.innerHTML = `<code>${(data.candidates[0].content.parts[0].text).replace("```" , "").replace("```" , "").replace("json" , "")}</code>`;
      return
    }
    if (data.candidates) {
      loader.style.display = "none"
      outputTexto.innerHTML = (data.candidates[0].content.parts[0].text);
    }
  })
  .catch(error => {
    console.error('Erro:', error);
  });
}

  function outputExpand(){
    let outputExpandDiv = document.getElementById("outputExpandDiv") 

    if(outputExpandDiv.style.display === "none"){
        outputExpandDiv.style.display = ""
    }
    else{
        outputExpandDiv.style.display = "none"
    }
}


function inputExpand(){
    let controlsExpandDiv = document.getElementById("controlsExpandDiv") 

    if(controlsExpandDiv.style.display === "none"){
        controlsExpandDiv.style.display = ""
    }
    else{
        controlsExpandDiv.style.display = "none"
    }
}