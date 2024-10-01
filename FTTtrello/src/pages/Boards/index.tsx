import { useState } from 'react';

function KanbanBoard() {
	const [lists, setLists] = useState([
		{
		title: 'A fazer',
		cards: [],
		newCardTitles: ['', '', '', ''],
		inputCount: 4,
		isDescriptionModalOpen: false,
		newCardDescription: '',
		},
	]);

	function handleInputChange(listIndex: number, index: number, event: React.ChangeEvent<HTMLInputElement>) {
		const listsCopy = [...lists];
		listsCopy[listIndex].newCardTitles[index] = event.target.value;
		setLists(listsCopy);
	}

	function handleAddCard(listIndex: number) {
		const listsCopy = [...lists];
		listsCopy[listIndex].newCardTitles.push('');
		listsCopy[listIndex].inputCount += 1;
		setLists(listsCopy);
	}

	function handleAddList() {
		const newList = {
		title: `Nova lista ${lists.length + 1}`,
		cards: [],
		newCardTitles: ['', '', '', ''],
		inputCount: 4,
		isDescriptionModalOpen: false,
		newCardDescription: '',
		};
		setLists([...lists, newList]);
	}

	function handleOpenDescriptionModal(listIndex: number) {
		const listsCopy = [...lists];
		listsCopy[listIndex].isDescriptionModalOpen = true;
		setLists(listsCopy);
	}

	function handleCloseDescriptionModal(listIndex: number) {
		const listsCopy = [...lists];
		listsCopy[listIndex].isDescriptionModalOpen = false;
		setLists(listsCopy);
	}

	function handleDescriptionChange(listIndex: number, event: React.ChangeEvent<HTMLTextAreaElement>) {
		const listsCopy = [...lists];
		listsCopy[listIndex].newCardDescription = event.target.value;
		setLists(listsCopy);
	}

	function handleSendDescription(listIndex: number) {
		const listsCopy = [...lists];
		const newCard = {
			title: listsCopy[listIndex].newCardTitles[0],
			description: listsCopy[listIndex].newCardDescription,
		};
		listsCopy[listIndex].cards.push(newCard);
		listsCopy[listIndex].newCardTitles.shift();
		listsCopy[listIndex].newCardDescription = '';
		listsCopy[listIndex].isDescriptionModalOpen = false;
		setLists(listsCopy);
	}

	return (
		<div className="kanban-board" style={{ backgroundColor: 'white', padding: 20, height: '100%', width: '100%' }}>
		{lists.map((list, listIndex) => (
			<div
			key={list.title}
			className="list"
			style={{
				padding: 10,
				borderRadius: 10,
				backgroundColor: '#FFFAE6',
				display: 'inline-block',
				verticalAlign: "top",
				width: 'auto',
				height: 'auto',
			}}
			>
			<h1 style={{ marginBottom: 10 }}>{list.title}</h1>
			<ul>
				{list.cards.map((card) => (
				<li key={card.title}>{card.title}</li>
				))}
			</ul>
			{Array(list.inputCount).fill(0).map((_, index) => (
				<div key={index}>
				<input
					type="text"
					value={list.newCardTitles[index]}
					style={{ marginBottom: 15, border: "1px solid", borderRadius: 10 }}
					onChange={(event) => handleInputChange(listIndex, index, event)}
					onFocus={() => handleOpenDescriptionModal(listIndex)}
				/>
				</div>
			))}
			<button onClick={() => handleAddCard(listIndex)}>+ Adicione um card</button>
			{list.isDescriptionModalOpen && (
				<div
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%',
					backgroundColor: 'rgba(0, 0, 0, 0.5)',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
				>
				<div
					style={{
					backgroundColor: 'white',
					padding: 20,
					borderRadius: 10,
					width: '50%',
					position: "relative"
					}}
				>
					<h2>Descrição</h2>
					<textarea
					style={{ width: '100%', height: 100, padding: 10 }}
					value={list.newCardDescription}
					onChange={(event) => handleDescriptionChange(listIndex, event)}
					placeholder="Adicione uma descrição..."
					/>
								<button onClick={() => handleSendDescription(listIndex)}>Enviar</button>
					<button onClick={() => handleCloseDescriptionModal(listIndex)}
					style={{ position: "absolute", top: 10, right: 10, cursor: "pointer" }}
					>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<line x1="18" y1="6" x2="6" y2="18" />
						<line x1="6" y1="6" x2="18" y2="18" />
					</svg>
					</button>
				</div>
				</div>
			)}
			</div>
		))}
		<button onClick={handleAddList} style={{
			backgroundColor: "#F3F3F3",
			padding: 5,
			marginLeft: 10,
			borderRadius: 5,
			position: "absolute",
			pointerEvents: lists.some((list) => list.isDescriptionModalOpen) ? 'none' : 'auto',
			opacity: lists.some((list) => list.isDescriptionModalOpen) ? 0 : 1
		}}>+ Adicionar lista</button>
		</div>
	);
}

export default KanbanBoard;

/*import { useState } from 'react';

function KanbanBoard() {
	const [lists, setLists] = useState([
		{
		title: 'A fazer',
		cards: [],
		newCardTitles: ['', '', '', ''],
		inputCount: 4,
		isDescriptionModalOpen: false,
		},
	]);

	function handleInputChange(listIndex: number, index: number, event: React.ChangeEvent<HTMLInputElement>) {
		const listsCopy = [...lists];
		listsCopy[listIndex].newCardTitles[index] = event.target.value;
		setLists(listsCopy);
	}

	function handleAddCard(listIndex: number) {
		const listsCopy = [...lists];
		listsCopy[listIndex].newCardTitles.push('');
		listsCopy[listIndex].inputCount += 1;
		setLists(listsCopy);
	}

	function handleAddList() {
		const newList = {
		title: `Nova lista ${lists.length + 1}`,
		cards: [],
		newCardTitles: ['', '', '', ''],
		inputCount: 4,
		isDescriptionModalOpen: false,
		};
		setLists([...lists, newList]);
	}

	function handleOpenDescriptionModal(listIndex: number) {
		const listsCopy = [...lists];
		listsCopy[listIndex].isDescriptionModalOpen = true;
		setLists(listsCopy);
	}

	function handleCloseDescriptionModal(listIndex: number) {
		const listsCopy = [...lists];
		listsCopy[listIndex].isDescriptionModalOpen = false;
		setLists(listsCopy);
	}

	return (
		<div className="kanban-board" style={{ backgroundColor: 'white', padding: 20, height: '100%', width: '100%' }}>
		{lists.map((list, listIndex) => (
			<div
			key={list.title}
			className="list"
			style={{
				padding: 10,
				borderRadius: 10,
				backgroundColor: '#FFFAE6',
				display: 'inline-block',
				verticalAlign: "top",
				width: 'auto',
				height: 'auto',
			}}
			>
			<h1 style={{ marginBottom: 10 }}>{list.title}</h1>
			<ul>
				{list.cards.map((card) => (
				<li key={card.title}>{card.title}</li>
				))}
			</ul>
			{Array(list.inputCount).fill(0).map((_, index) => (
				<div key={index}>
				<input
					type="text"
					value={list.newCardTitles[index]}
					style={{ marginBottom: 15, border: "1px solid", borderRadius: 10 }}
					onChange={(event) => handleInputChange(listIndex, index, event)}
					onFocus={() => handleOpenDescriptionModal(listIndex)}
				/>
				</div>
			))}
			<button onClick={() => handleAddCard(listIndex)}>+ Adicione um card</button>
			{list.isDescriptionModalOpen && (
				<div
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%',
					backgroundColor: 'rgba(0, 0, 0, 0.5)',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
				>
				<div
					style={{
					backgroundColor: 'white',
					padding: 20,
					borderRadius: 10,
					width: '50%',
					position: "relative"
					}}
				>
					<h2>Descrição</h2>
					<textarea
					style={{ width: '100%', height: 100, padding: 10 }}
					placeholder="Adicione uma descrição..."
					/>
					<button onClick={() => handleCloseDescriptionModal(listIndex)}
						style={{ position: "absolute", top: 10, right: 10, cursor: "pointer"
						}}>
							<svg
							xmlns= "http://www.w3.org/2000/svg"
							width= "24"
							height= "24"
							viewBox= "0 0 24 24"
							stroke= "currentColor"
							stroke-width= "2"
							strokeLinecap= "round"
							strokeLinejoin= "round">
								<line x1="18" y1="6" x2="6" y2="18" />
								<line x1="6" y1="6" x2="18" y2="18" />
							</svg>
					</button>
				</div>
				</div>
			)}
			</div>
		))}
		<button onClick={handleAddList} style={{ backgroundColor: "#F3F3F3", padding: 5,
			marginLeft: 10, borderRadius: 5, position: "absolute",
			pointerEvents: lists.some((list) => list.isDescriptionModalOpen) ? 'none' : 'auto',
			opacity: lists.some((list) => list.isDescriptionModalOpen) ? 0 : 1}}>+ Adicionar lista</button>
		</div>
	);
}

export default KanbanBoard;*/

/*import { useState } from 'react';

function KanbanBoard() {
	const [lists, setLists] = useState([
		{
			title: 'A fazer',
			cards: [],
			newCardTitles: ['', '', '', ''],
			inputCount: 4,
		},
	]);

	function handleInputChange(listIndex: number, index: number, event: React.ChangeEvent<HTMLInputElement>) {
		const listsCopy = [...lists];
		listsCopy[listIndex].newCardTitles[index] = event.target.value;
		setLists(listsCopy);
	}

	function handleAddCard(listIndex: number) {
		const listsCopy = [...lists];
		listsCopy[listIndex].newCardTitles.push('');
		listsCopy[listIndex].inputCount += 1;
		setLists(listsCopy);
	}

	function handleAddList() {
		const newList = {
			title: `Nova lista ${lists.length + 1}`,
			cards: [],
			newCardTitles: ['', '', '', ''],
			inputCount: 4,
		};
		setLists([...lists, newList]);
	}

	return (
		<div className="kanban-board" style={{ backgroundColor: 'white', padding: 20, height: '100%', width: '100%' }}>
			{lists.map((list, listIndex) => (
				<div
				key={list.title}
				className="list"
				style={{
					padding: 10,
					borderRadius: 10,
					backgroundColor: '#FFFAE6',
					display: 'inline-block',
					verticalAlign: "top",
					width: 'auto',
					height: 'auto',
				}}
				>
				<h1 style={{ marginBottom: 10 }}>{list.title}</h1>
				<ul>
					{list.cards.map((card) => (
					<li key={card.title}>{card.title}</li>
					))}
				</ul>
				{Array(list.inputCount).fill(0).map((_, index) => (
					<div key={index}>
						<input
							type="text"
							value={list.newCardTitles[index]}
							style={{ marginBottom: 15, border: "1px solid", borderRadius: 10 }}
							onChange={(event) => handleInputChange(listIndex, index, event)}
						/>
					</div>
				))}
				<button onClick={() => handleAddCard(listIndex)}>+ Adicione um card</button>
				</div>
			))}
			<button onClick={handleAddList} style={{ backgroundColor: "#F3F3F3",
				padding: 5, marginLeft: 10, borderRadius: 5, position: "absolute"}}>+ Adicionar lista</button>
		</div>
	);
}

export default KanbanBoard;*/