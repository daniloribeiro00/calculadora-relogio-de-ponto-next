import Image from 'next/image';
import logo from '../../../public/calculator.png';

import { Container } from './styles';

export const Header = () => {
	return (
		<Container>
			<Image src={logo} alt='Calculadora de Horas de Relógio de Ponto' />
			<h1>Calculadora de Horas Trabalhadas (Relógio de Ponto)</h1>
		</Container>
	);
};
