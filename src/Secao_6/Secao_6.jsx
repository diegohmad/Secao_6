import React, { useEffect } from 'react';
import '../css/styles.css';n
function Secao_6 () {
	useEffect(() => {
        const detailsElements = document.querySelectorAll("details");
        
        detailsElements.forEach(details => {
            details.addEventListener("click", function() {
                detailsElements.forEach(otherDetails => {
                    if (otherDetails !== details) {
                        otherDetails.removeAttribute("open");
                    }
                });
            });
        });
    }, []);

	return (
		<section>
		<h1>Perguntas Comuns, Respostas Úteis</h1>
		<div>
		<details>
			<summary>Em que momento posso fazer terapia?</summary>
			<p>A psicoterapia é uma ferramenta valiosa que pode ser utilizada em diversos momentos da vida, tanto para tratar problemas específicos quanto para promover o autoconhecimento e o crescimento pessoal. Não é necessário esperar que os problemas se agravem para procurar ajuda; a intervenção precoce pode facilitar a resolução de questões e melhorar a qualidade de vida.</p>
		</details>
		<details>
			<summary>Não é a mesma coisa que desabafar com um amigo?</summary>
			<p>Enquanto desabafar com um amigo pode proporcionar apoio emocional e alívio temporário, a psicoterapia oferece uma abordagem mais estruturada, confidencial e profissional para lidar com questões emocionais e psicológicas. A psicoterapia é projetada para promover a cura, o autoconhecimento e o desenvolvimento pessoal de maneira mais profunda, especializada e sustentável.</p>
		</details>
		<details>
			<summary>Como falar coisas pessoais com alguém que não conheço?</summary>
			<p>Falar sobre assuntos pessoais com um psicólogo pode parecer difícil no início, mas é um passo importante para cuidar da sua saúde mental. Lembre-se de que o psicólogo está lá para ajudar, e o ambiente terapêutico é seguro e confidencial. Comece devagar, seja honesto sobre suas dificuldades e lembre-se dos benefícios a longo prazo. Com o tempo, a confiança se desenvolverá, e você se sentirá mais à vontade para compartilhar suas experiências e sentimentos.</p>		
		</details>
		<details>
			<summary>O psicólogo vai me dar a sua opinião, como ele vai me ajudar?</summary>
			<p>A função de um psicólogo vai muito além de simplesmente dar sua opinião. Eles utilizam uma variedade de técnicas baseadas em evidências científicas para ajudar você a entender e resolver seus problemas. Através de uma combinação de avaliação, intervenção terapêutica, desenvolvimento de habilidades, suporte emocional e mudança comportamental, os psicólogos ajudam a promover o bem-estar mental e emocional. Essa abordagem multifacetada permite um tratamento eficaz e personalizado, adaptado às suas necessidades individuais.</p>
		</details>
		<details>
			<summary>O psicólogo vai me passar remédio?</summary>
			<p>Psicólogos não prescrevem medicamentos, eles trabalham com as causas dos adoecimentos mentais e emocionais, que não são alcançadas e resolvidas por medicamentos. Mas, se a avaliação de um psicólogo indicar que você pode se beneficiar de medicação, ele pode encaminhá-lo a um psiquiatra ou médico geral, que têm a formação e autoridade necessárias para prescrever tratamentos farmacológicos. Essa abordagem colaborativa garante que você receba o cuidado mais apropriado e eficaz para suas necessidades individuais.</p>
		</details>
		</div>
	</section>
	);

}
export default Secao_6;