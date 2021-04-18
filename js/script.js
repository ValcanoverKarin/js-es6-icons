const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];

const colors = [
    'blue',
    'orange',
    'purple'
];

// ESEMPIO TEMPLATE ICONE 
/*
<div class="icon">
    <i class="fas fa-cat"></i>
    <div class="text">
        NOME ICONA
    </div>
</div>
*/

// Milestone 1
// Partendo dalla seguente struttura dati , 
// mostriamo in pagina tutte le icone disponibili come da layout.

// Milestone 2
// Coloriamo le icone per tipo

// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone


// Milestone 1

//1b. creo oggetto jQuery che rappresenti icons-container
const iconsContainer = $('#icons-container');
//1a. per scrivere tutte le icone disponibili chiamo la funzione printIcons e gli passo icons e iconsContainer
printIcons(icons, iconsContainer);

/* FUNZIONE */
//0a. funzione che potrò richiamare piu volte. questa funzione popola un container con le icone
//0b. ho bisogno dell array di oggetti dove ogni oggetto è un icona 
//0c. ho bisogno del container dove stamparli
//0d. il container dovrà essere un oggetto jQuery che rappresenta l' elemnto in cui stampare le icone
function printIcons (iconsArray, container) {
	console.log(iconsArray);
	//1c. foreach per scrivere le icone nel container
	iconsArray.forEach((element) => {
		console.log(element);
		
		//1f. destrutturo element per leggere le informazioni
		const {name, prefix, family} = element;
		
		//1d. per stamparli mi creo prima la stringa e copio il mio template
		//1g. cambio fas con family, fa- con prefix e cat,NOME ICONA con name
		//1h. aggiungo toUppercase a name per farli maiuscoli
		const iconElementHTML = `
		<div class="icon">
            <i class="${family} ${prefix}${name}"></i>
            <div class="text">
			    ${name.toUpperCase()}
            </div>
        </div>
		`;
		//1e. popolo il container appendendo le icone
		container.append(iconElementHTML);
	});
}