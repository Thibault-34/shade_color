import React from 'react';
import styled from 'styled-components';

import { LightenDarkenColor } from './utils/edit_colors';

const ColorContainer = styled.div`
	width: 100px;
`;

const Color = styled.div`
	width: 100px;
	height: 100px;
	background-color: ${({ color }) => color};
`;

const Input = styled.input`
	box-sizing: border-box;
	border: grey solid 1px;
	width: 100%;
	text-align: center;
	margin: 3px 0;
`;

class App extends React.Component {
	state = {
		color: '#000000',
		degree: 0,
	};

	_onChange = (key, value) => {
		this.setState({ [key]: value });
	};

	render() {
		const { color, degree } = this.state;
		const newColor = LightenDarkenColor(color, degree);

		return (
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-around',
					width: '100vw',
					height: '100vh',
					boxSizing: 'border-box',
					padding: '20%',
				}}>
				<ColorContainer>
					<Input
						type="text"
						value={color}
						onChange={e => this._onChange('color', e.target.value)}
					/>
					<Color color={color} />
				</ColorContainer>

				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}>
					<div
						style={{
							fontSize: 13,
							textTransform: 'uppercase',
							fontWeight: 'bold',
						}}>
						Degré
					</div>
					<hr style={{ width: '100%' }} />
					<Input
						type="number"
						value={degree}
						onChange={e =>
							this._onChange('degree', +e.target.value)
						}
					/>
					<div style={{ fontSize: 12, color: 'grey' }}>
						<b>Nombre entier</b>; <b>Assombrir</b>: négatif;
						<b>Eclaircir</b>: positif;
					</div>
				</div>

				<ColorContainer>
					<Input type="text" value={newColor} />
					<Color color={newColor} />
				</ColorContainer>
			</div>
		);
	}
}

export default App;
