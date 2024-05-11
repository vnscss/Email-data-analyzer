# Email data analyzer

## Descrição

Este projeto consiste em um website que analisa dados de emails utilizando o modelo de linguagem avançado Gemini 1.5 Pro. O sistema foi treinado para identificar spans, phishing e tentativas de injeção de código malicioso em emails.

## Funcionalidades

* **Análise de contexto:** Interpreta o contexto do email para identificar potenciais ameaças.
* **Identificação de spans:** Detecta emails de spam com base em conteúdo e metadados.
* **Detecção de phishing:** Identifica tentativas de phishing por meio da análise de links e conteúdo suspeito.
* **Verificação de código malicioso:** Analisa o email em busca de código malicioso que possa comprometer a segurança do usuário.
* **Saída em JSON:** Permite a integração com sistemas backend, fornecendo resultados estruturados em formato JSON.
* **Saída em texto descritivo:** Oferece uma análise textual detalhada para fácil compreensão.
* **Personalização da análise:** Permite ao usuário fornecer informações sobre a empresa para uma análise mais precisa.

## Tecnologias utilizadas

* **HTML:** Estrutura do website.
* **CSS:** Estilização do website.
* **JavaScript:** Funcionalidades do website e interação com o modelo Gemini 1.5 Pro.
* **Gemini 1.5 Pro:** Modelo de linguagem avançado para análise de texto.

## Como utilizar

1. Acesse o website.
2. Insira a sua API-key do Gemini.
3. Forneça uma breve descrição da sua empresa, incluindo contexto de atuação, nacionalidade e missão institucional.
4. Cole o corpo do email que deseja analisar, incluindo metadados relevantes, como endereço IP e horário de envio do remetente.
5. Selecione o tipo de saída desejado (JSON ou texto descritivo).
6. Clique em "Analisar".

