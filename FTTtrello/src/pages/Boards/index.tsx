import { useState } from 'react';

function KanbanBoard() {
	const [lists, setLists] = useState([
		{
			title: 'A fazer',
			cards: [],
			newCardTitles: [],
			inputCount: 0,
			isDescriptionModalOpen: false,
			newCardDescription: '',
			selectedCardIndex: null,
		},
	]);

	// Função para adicionar um novo card e abrir o modal automaticamente
	function handleAddCard(listIndex: number) {
		const listsCopy = [...lists];
		listsCopy[listIndex].newCardTitles.push(''); // Adiciona um novo input vazio
		listsCopy[listIndex].inputCount += 1;

		// Abre o modal para o último input adicionado
		listsCopy[listIndex].isDescriptionModalOpen = true;
		listsCopy[listIndex].selectedCardIndex = listsCopy[listIndex].inputCount - 1; // Novo card adicionado
		setLists(listsCopy);
	}

	// Função para abrir o modal ao clicar no input
	function handleOpenDescriptionModal(listIndex: number, cardIndex: number) {
		const listsCopy = [...lists];
		const cardTitle = listsCopy[listIndex].newCardTitles[cardIndex];

		// Verifica se já existe uma descrição no input
		const [titlePart, descriptionPart] = cardTitle.split(' - ', 2);

		// Abre o modal e preenche com a descrição se houver
		listsCopy[listIndex].isDescriptionModalOpen = true;
		listsCopy[listIndex].newCardDescription = descriptionPart || '';
		listsCopy[listIndex].selectedCardIndex = cardIndex;
		setLists(listsCopy);
	}

	// Função para fechar o modal
	function handleCloseDescriptionModal(listIndex: number) {
		const listsCopy = [...lists];
		listsCopy[listIndex].isDescriptionModalOpen = false;
		listsCopy[listIndex].newCardDescription = '';
		listsCopy[listIndex].selectedCardIndex = null;
		setLists(listsCopy);
	}

	// Alterar a descrição no modal
	function handleDescriptionChange(listIndex: number, event: React.ChangeEvent<HTMLTextAreaElement>) {
		const listsCopy = [...lists];
		listsCopy[listIndex].newCardDescription = event.target.value;
		setLists(listsCopy);
	}

	// Concatenar título e nova descrição e fechar o modal
	function handleSendDescription(listIndex: number) {
	const listsCopy = [...lists];
	const selectedCardIndex = listsCopy[listIndex].selectedCardIndex;

	if (selectedCardIndex !== null) {
		// Atualiza o título com a nova descrição diretamente
		const titlePart = listsCopy[listIndex].newCardTitles[selectedCardIndex].split(' - ')[0]; // Extrai apenas o título antes de " - "
		const descriptionPart = listsCopy[listIndex].newCardDescription;

		// Substitui a antiga descrição pela nova
		const titleWithDescription = descriptionPart ? `${titlePart} - ${descriptionPart}` : titlePart;

		// Atualizar o valor do input com o novo título e descrição
		listsCopy[listIndex].newCardTitles[selectedCardIndex] = titleWithDescription;

		// Limpar a descrição e fechar o modal
		listsCopy[listIndex].newCardDescription = '';
		listsCopy[listIndex].isDescriptionModalOpen = false;
		listsCopy[listIndex].selectedCardIndex = null;
		setLists(listsCopy);
		}
	}


	// Alterar o valor do input
	function handleInputChange(listIndex: number, index: number, event: React.ChangeEvent<HTMLInputElement>) {
		const listsCopy = [...lists];
		listsCopy[listIndex].newCardTitles[index] = event.target.value;
		setLists(listsCopy);
	}

	// Adicionar nova lista
	function handleAddList() {
		const newList = {
			title: `Nova lista ${lists.length + 1}`,
			cards: [],
			newCardTitles: [],
			inputCount: 0,
			isDescriptionModalOpen: false,
			newCardDescription: '',
			selectedCardIndex: null,
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
						verticalAlign: 'top',
						width: 'auto',
						height: 'auto',
					}}
				>
					<h1 style={{ marginBottom: 10 }}>{list.title}</h1>
					<ul>
						{list.cards.map((card, cardIndex) => (
							<li key={cardIndex}>
								<strong>{card.title}</strong>
								<p>{card.description}</p>
							</li>
						))}
					</ul>
					{Array(list.inputCount)
						.fill(0)
						.map((_, index) => (
							<div key={index}>
								<input
									type="text"
									value={list.newCardTitles[index]}
									style={{ marginBottom: 15, border: '1px solid', borderRadius: 10 }}
									onChange={(event) => handleInputChange(listIndex, index, event)}
									onFocus={() => handleOpenDescriptionModal(listIndex, index)}
									disabled={list.isDescriptionModalOpen}
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
									position: 'relative',
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
								<button
									onClick={() => handleCloseDescriptionModal(listIndex)}
									style={{ position: 'absolute', top: 10, right: 10, cursor: 'pointer' }}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
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
			<button
				onClick={handleAddList}
				style={{
					backgroundColor: '#F3F3F3',
					padding: 5,
					marginLeft: 10,
					borderRadius: 5,
					position: 'absolute',
					pointerEvents: lists.some((list) => list.isDescriptionModalOpen) ? 'none' : 'auto',
					opacity: lists.some((list) => list.isDescriptionModalOpen) ? 0 : 1,
				}}
			>
				+ Adicionar lista
			</button>
		</div>
	);
}

export default KanbanBoard;