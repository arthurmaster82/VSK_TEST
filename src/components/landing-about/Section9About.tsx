import * as React from 'react';

interface ISectio9AboutProps {}

const Sectio9About: React.FunctionComponent<ISectio9AboutProps> = props => {
	const {} = props;
	return (
		<section className="max-w-6xl mx-auto px-4 md:py-28 py-16">
			<div className="md:w-2/4 mb-8 md:mb-16">
				<h4 className="text-lg mb-4 w-full text-start font-light">
					VSK MAIS CRIPTO
				</h4>
				<h2 className="text-3xl font-bold mb-6">
					Revolucione o modo de investir!
				</h2>

				<h3 className="text-3xl">
					As criptomoedas tornam a realização de transações com
					pessoas no outro lado do planeta tão simples quanto pagar
					com dinheiro em um negócio local.
				</h3>
			</div>

			<div className="md:w-2/4 ml-auto mb-16">
				<p className="font-light text-sm">
					As criptomoedas mais populares por capitalização de mercado
					são bitcoin, ethereum, bitcoin cash e litecoin. Outras
					criptomoedas bem conhecidas incluem tezos, EOS e zcash.
					Algumas são similares ao bitcoin. Outras são baseadas em
					diferentes tecnologias ou têm novos recursos que permitem a
					elas fazer mais do que transferir valores. As criptomoedas
					tornam possível transferir valores on-line sem a necessidade
					de intermediários como um banco ou processador de pagamento,
					permitindo que os valores sejam transferidos globalmente,
					quase de forma instantânea, 24 horas por dia e com taxas
					baixas. As criptomoedas normalmente não são emitidas ou
					controladas por nenhum governo ou outra autoridade central.
					Elas são gerenciadas por redes “peer-to-peer” de
					computadores que executam software livre e de código aberto.
					Em geral, qualquer pessoa que quiser pode participar. Como é
					possível a criptomoeda ser segura se não há envolvimento de
					um banco ou governo? É segura porque todas as transações são
					autorizadas por uma tecnologia chamada blockchain. Uma
					blockchain de criptomoeda é similar ao balanço ou Livro
					Razão de um banco. Cada moeda tem sua própria blockchain,
					que é um registro contínuo e constantemente verificado de
					cada transação feita usando a moeda. Ao contrário de um
					Livro Razão, uma blockchain de criptomoeda está distribuída
					entre todos os participantes da rede daquela moeda digital
					Nenhuma empresa, país ou terceiro exerce controle sobre ela,
					e qualquer pessoa pode participar. A blockchain é uma
					tecnologia revolucionária que só foi possível devido a
					décadas de inovações na ciência da computação e na
					matemática.
				</p>
			</div>

			<div>
				<h2 className="text-center md:text-4xl text-3xl font-bold mb-12">
					Por que as criptomoedas são o futuro das finanças?
				</h2>

				<p className="font-light text-center mb-16">
					As criptomoedas são a principal alternativa ao sistema
					bancário tradicional e apresentam grandes vantagens em
					relação a formas de pagamento anteriores e classes de ativos
					tradicionais. Pense nelas como o Dinheiro 2.0. Ou seja, um
					novo tipo de dinheiro que é nativo da internet, com o
					potencial de ser a maneira mais rápida, simples, barata,
					segura e universal de trocar valores que o mundo já viu.
					Podem ser usadas para adquirir produtos ou serviços ou
					mantidas como parte de uma estratégia de investimento, mas
					não podem ser manipuladas por nenhuma autoridade central,
					simplesmente porque não há uma. Não importa o que aconteça
					com qualquer governo, sua criptomoeda permanecerá segura.
				</p>

				<p className="font-bold text-center">
					Moedas digitais proporcionam igualdade de oportunidades, não
					importando onde você nasceu ou onde vive, criando
					oportunidades únicas para expandir a liberdade econômica das
					pessoas em todo o mundo.
				</p>
			</div>
		</section>
	);
};

export default Sectio9About;
