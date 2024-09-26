import { useState } from 'react';

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
					width: 'auto',
					height: 'auto',
					verticalAlign: "top",
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

export default KanbanBoard;