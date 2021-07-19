import { useState } from 'react';
import { Selection, Container, Buttons } from './styles';

export const Main = () => {
	const [selecionarModo, setSelecionarModo] = useState(true);

	const [totalDesejadoHoras, setTotalDesejadoHoras] = useState('8');
	const [horarioSaida, setHorarioSaida] = useState('00:00');
	const [incorrectMessage1, setIncorrectMessage1] = useState(false);

	const handleSubmit1 = (e: any) => {
		e.preventDefault();

		const inicio1 = e.target.inicio1.value;
		const intervalo1 = e.target.intervalo1.value;
		const retorno1 = e.target.retorno1.value;
		const total = e.target.total.value;

		const horas1 = {
			// get input type hh:mm and convert it to minutes
			inicio:
				Number(inicio1.split(':')[0] * 60) + Number(inicio1.split(':')[1]),
			intervalo:
				Number(intervalo1.split(':')[0] * 60) +
				Number(intervalo1.split(':')[1]),
			retorno:
				Number(retorno1.split(':')[0] * 60) + Number(retorno1.split(':')[1]),
		};

		const totalHoras = Number(total * 60);

		const horarioFinal =
			totalHoras - horas1.intervalo + horas1.inicio + horas1.retorno;

		const finalHoras = String(Math.floor(horarioFinal / 60)).padStart(2, '0');
		const finalMinutos = String(Math.floor(horarioFinal % 60)).padStart(2, '0');

		if (
			!horarioFinal ||
			horarioFinal <= 0 ||
			horas1.intervalo <= horas1.inicio ||
			horas1.retorno <= horas1.intervalo ||
			horarioFinal <= horas1.retorno
		) {
			setIncorrectMessage1(true);
			setHorarioSaida('00:00');
			setTimeout(() => {
				setIncorrectMessage1(false);
			}, 5000);
			return;
		}

		setIncorrectMessage1(false);
		setHorarioSaida(`${finalHoras}:${finalMinutos}`);
	};

	const [totalHorasTrabalhadas, setTotalHorasTrabalhadas] = useState('00:00');
	const [incorrectMessage2, setIncorrectMessage2] = useState(false);

	const handleSubmit2 = (e: any) => {
		e.preventDefault();

		const inicio2 = e.target.inicio2.value;
		const intervalo2 = e.target.intervalo2.value;
		const retorno2 = e.target.retorno2.value;
		const final2 = e.target.final2.value;

		const horas2 = {
			// get input type hh:mm and convert it to minutes
			inicio:
				Number(inicio2.split(':')[0] * 60) + Number(inicio2.split(':')[1]),
			intervalo:
				Number(intervalo2.split(':')[0] * 60) +
				Number(intervalo2.split(':')[1]),
			retorno:
				Number(retorno2.split(':')[0] * 60) + Number(retorno2.split(':')[1]),
			final: Number(final2.split(':')[0] * 60) + Number(final2.split(':')[1]),
		};

		const tempoTrabalhado =
			horas2.intervalo - horas2.inicio + (horas2.final - horas2.retorno);

		const totalHoras = String(Math.floor(tempoTrabalhado / 60)).padStart(
			2,
			'0'
		);
		const totalMinutos = String(Math.floor(tempoTrabalhado % 60)).padStart(
			2,
			'0'
		);

		if (
			!tempoTrabalhado ||
			tempoTrabalhado <= 0 ||
			horas2.intervalo <= horas2.inicio ||
			horas2.retorno <= horas2.intervalo ||
			horas2.final <= horas2.retorno
		) {
			setIncorrectMessage2(true);
			setTotalHorasTrabalhadas('00:00');
			setTimeout(() => {
				setIncorrectMessage2(false);
			}, 5000);
			return;
		}

		setIncorrectMessage2(false);
		setTotalHorasTrabalhadas(`${totalHoras}:${totalMinutos}`);
	};

	return (
		<>
			<Selection>
				<h2>Selecione o funcionamento:</h2>
				<form onChange={e => setSelecionarModo(!selecionarModo)}>
					<div>
						<input
							type='radio'
							name='funcionamento'
							value='calcFinal'
							defaultChecked
						/>
						<label>Calcular Horário de Término da Jornada</label>
					</div>
					<div>
						<input type='radio' name='funcionamento' value='calcTotal' />
						<label>Calcular Total de Horas Trabalhadas</label>
					</div>
				</form>
			</Selection>
			{selecionarModo ? (
				<Container>
					<form onSubmit={handleSubmit1}>
						<h2>Horário de Término da Jornada:</h2>
						<div className='content'>
							<div className='period'>
								<span>Manhã</span>
								<div className='inputs'>
									<div>
										<label>Início da Jornada</label>
										<input type='time' name='inicio1' required />
									</div>
									<div>
										<label>Saída para Intervalo</label>
										<input type='time' name='intervalo1' required />
									</div>
								</div>
							</div>
							<div className='period'>
								<span>Tarde</span>
								<div className='inputs'>
									<div>
										<label>Retorno do Intervalo</label>
										<input type='time' name='retorno1' required />
									</div>
								</div>
							</div>
							<div className='inputs'>
								<div>
									<label>Total desejado de horas</label>
									<input
										type='number'
										name='total'
										min={1}
										max={10}
										value={totalDesejadoHoras}
										onChange={e => setTotalDesejadoHoras(e.target.value)}
										required
									/>
								</div>
							</div>
						</div>
						<Buttons>
							<button type='submit'>Calcular</button>
						</Buttons>
						{incorrectMessage1 && (
							<span className='message'>Insira campos válidos!</span>
						)}
					</form>
					<div className='total'>
						<div className='result'>
							<h2>Horário de término:</h2>
							<span>{horarioSaida}</span>
						</div>
					</div>
				</Container>
			) : (
				<Container>
					<form onSubmit={handleSubmit2}>
						<h2>Total de Horas Trabalhadas:</h2>
						<div className='content'>
							<div className='period'>
								<span>Manhã</span>
								<div className='inputs'>
									<div>
										<label>Início da Jornada</label>
										<input type='time' name='inicio2' required />
									</div>
									<div>
										<label>Saída para Intervalo</label>
										<input type='time' name='intervalo2' required />
									</div>
								</div>
							</div>
							<div className='period'>
								<span>Tarde</span>
								<div className='inputs'>
									<div>
										<label>Retorno do Intervalo</label>
										<input type='time' name='retorno2' required />
									</div>
									<div>
										<label>Término da Jornada</label>
										<input type='time' name='final2' required />
									</div>
								</div>
							</div>
						</div>
						<Buttons>
							<button type='submit'>Calcular</button>
						</Buttons>
						{incorrectMessage2 && (
							<span className='message'>Insira campos válidos!</span>
						)}
					</form>
					<div className='total'>
						<div className='result'>
							<h2>Total de horas:</h2>
							<span>{totalHorasTrabalhadas}</span>
						</div>
					</div>
				</Container>
			)}
		</>
	);
};
