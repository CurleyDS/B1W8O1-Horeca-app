var IchirakuSpecial = 0
var IchirakuPork = 0
var IchirakuChicken = 0
var IchirakuBeef = 0
var IchirakuVeggie = 0
var IchirakuCustom = 0
var TotSnack8 = 0
var TotSnack16 = 0

const WARNING = 'LET OP: Het programma is hoofdletter-gevoelig. Schrijf daarom altijd elk woord zoals het aangegeven staat in de optielijst!'
const WARNING2 = 'LET OP: U mag elk product bestellen dat u in uw Ramen wilt. Deze bestelling kost daarom meer omdat er misschien ook producten zijn die wij niet hebben.'
const SPECIAL = 1499;
const PORK = 999; 
const CHICKEN = 999;
const BEEF = 999;
const VEGGIE = 849;
const CUSTOM = 1999;
const SNACK8 = 499;
const SNACK16 = 749;

alert(WARNING);

function Order(){
	var bestelling = prompt('Wat wilt u bestellen? Special/Pork/Chicken/Beef/Veggie/Custom/Snack/Bestelling voltooien');
	if (bestelling == 'Special') {
		var Special = prompt ('Hoeveel kommen Ichiraku Special wilt u?');
		document.write('<p>' + Special + ' kommen Ichiraku Special' + '</p>');
		IchirakuSpecial = Number(IchirakuSpecial) + Number(Special)
		Order();
	} else if (bestelling == 'Pork') {
		var Pork = prompt ('Hoeveel kommen Ichiraku Pork wilt u?');
		document.write('<p>' + Pork + ' kommen Ichiraku Pork' + '</p>');
		IchirakuPork = Number(IchirakuPork) + Number(Pork)
		Order();
	} else if (bestelling == 'Chicken') {
		var Chicken = prompt ('Hoeveel kommen Ichiraku Chicken wilt u?');
		document.write('<p>' + Chicken + ' kommen Ichiraku Chicken' + '</p>');
		IchirakuChicken = Number(IchirakuChicken) + Number(Chicken)
		Order();
	} else if (bestelling == 'Beef') {
		var Beef = prompt ('Hoeveel kommen Ichiraku Beef wilt u?');
		document.write('<p>' + Beef + ' kommen Ichiraku Beef' + '</p>');
		IchirakuBeef = Number(IchirakuBeef) + Number(Beef)
		Order();
	} else if (bestelling == 'Veggie') {
		var Veggie = prompt ('Hoeveel kommen Ichiraku Veggie wilt u?');
		document.write('<p>' + Veggie + ' kommen Ichiraku Veggie' + '</p>');
		IchirakuVeggie = Number(IchirakuVeggie) + Number(Veggie)
		Order();
	} else if (bestelling == 'Custom') {
		alert(WARNING2);
		var What = prompt('Wat wil jij in de Ramen');
		var Custom = prompt ('Hoeveel kommen Ichiraku Custom wilt u?');
		document.write('<p>' + Custom + ' kommen Ichiraku Custom (' + What + ')' + '</p>');
		IchirakuCustom = Number(IchirakuCustom) + Number(Custom)
		Order();
	} else if (bestelling == 'Snack') {
		var Snack = prompt ('Hoeveel bitterballen wilt u (8 of 16)?');
		if (Snack == '8') {
			var Snack8 = prompt ('Hoeveel bitterbalschalen van 8 wilt u?');
			document.write('<p>' + snack8 + ' bitterbalschalen; 8 stuks' + '</p>');		
			TotalSnack8 = Number(TotSnack8) + Number(Snack8)
			Order();
		}else if(Snack == '16') {
			var Snack16 = prompt ('Hoeveel bitterbalschalen van 16 wilt u?');
			document.write('<p>' + snack16 + ' bitterbalschalen; 16 stuks' + '</p>');		
			TotSnack16 = Number(TotSnack16) + Number(Snack16)
			Order();			
		} else {
			alert('Wij hebben alleen bitterbalschalen van 8 en 16 stuks.');
			Order();
		}
 	} else if (bestelling == 'Bestelling voltooien') {
		var pricesSpecial = SPECIAL * IchirakuSpecial / 100;
		var pricesPork = PORK * IchirakuPork / 100;
		var pricesChicken = CHICKEN * IchirakuChicken / 100;
		var pricesBeef = BEEF * IchirakuBeef / 100;
		var pricesVeggie = VEGGIE * IchirakuVeggie / 100;
		var pricesCustom = CUSTOM * IchirakuCustom / 100;
		var pricessnack8 = SNACK8 * TotSnack8 / 100;
		var pricessnack16 = SNACK16 * TotSnack16 / 100;
		document.body.innerHTML = '';
		document.write('<p>' + 'Bedankt voor bestellen bij Ichiraku Ramen.' + '</p>');	
	} else {
		alert('Dit product hebben wij helaas niet wij hebben wel: Ichiraku Special, Ichiraku Pork, Ichiraku Chicken, Ichiraku Beef, Ichiraku Custom en Bitterballen.');
		Order();	
	}
}
Order();

document.write("<a href='Ichiraku_Ramen_App.html'>Terug</a><br>");
document.write("<br><a href='Ichiraku_Ramen_Contact.html'>Problemen!? Klik hier!</a>");