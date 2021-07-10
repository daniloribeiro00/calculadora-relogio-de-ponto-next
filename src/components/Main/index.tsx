import { useState } from 'react';
import { Buttons, Container } from './styles';

export const Main = () => {
    const [totalHorasTrabalhadas, setTotalHorasTrabalhadas] = useState('00:00');
    const [incorrectMessage, setIncorrectMessage] = useState(false);

	const handleSubmit = (e: any) => {
		e.preventDefault();

		const e1 = e.target.entrada1.value;
		const s1 = e.target.saida1.value;
		const e2 = e.target.entrada2.value;
		const s2 = e.target.saida2.value;

		const horas = {
            // get input type hh:mm and convert it to minutes
			entrada1: Number(e1.split(':')[0] * 60) + Number(e1.split(':')[1]),
			saida1: Number(s1.split(':')[0] * 60) + Number(s1.split(':')[1]),
			entrada2: Number(e2.split(':')[0] * 60) + Number(e2.split(':')[1]),
			saida2: Number(s2.split(':')[0] * 60) + Number(s2.split(':')[1]),
		};

        const tempoTrabalhado = (horas.saida1 - horas.entrada1) + (horas.saida2 - horas.entrada2);

        const totalHoras = (String(Math.floor(tempoTrabalhado / 60))).padStart(2, '0');
        const totalMinutos = (String(Math.floor(tempoTrabalhado % 60))).padStart(2, '0');
        
        if (!tempoTrabalhado) {
            setIncorrectMessage(true);
            setTimeout(() => {
                setIncorrectMessage(false);
            }, 5000);
            return;
        }

        setIncorrectMessage(false);
        setTotalHorasTrabalhadas(`${totalHoras}:${totalMinutos}`);
        
	};

	return (
		<Container>
			<form onSubmit={handleSubmit}>
				<h2>Insira os horários abaixo:</h2>
				<div className='content'>
					<div className='period'>
						<span>Manhã</span>
						<div className='inputs'>
							<div>
								<label>Entrada 1</label>
								<input type='time' name='entrada1' required />
							</div>
							<div>
								<label>Saída 1</label>
								<input type='time' name='saida1' required />
							</div>
						</div>
					</div>
					<div className='period'>
						<span>Tarde</span>
						<div className='inputs'>
							<div>
								<label>Entrada 2</label>
								<input type='time' name='entrada2' required />
							</div>
							<div>
								<label>Saída 2</label>
								<input type='time' name='saida2' required />
							</div>
						</div>
					</div>
				</div>
				<Buttons>
					<button type='submit'>Calcular</button>
				</Buttons>
                {(incorrectMessage) && (
                    <span className='message'>Insira todos os campos!</span>
                )}
			</form>
			<div className='total'>
				<div className='result'>
					<h2>Total de horas trabalhadas:</h2>
					<span>{totalHorasTrabalhadas}</span>
				</div>
			</div>
		</Container>
	);
};
