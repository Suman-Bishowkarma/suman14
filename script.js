document.addEventListener('DOMContentLoaded', () => {
	const studentForm = document.getElementById('student-form');
	const studentTable = document.getElementById('student-table');

	  
	studentForm.addEventListener('submit', (e) => {
		e.preventDefault();
		const name = studentForm.name.value;
		const email = studentForm.email.value;
		const material = studentForm.material.value;
		const quantity = studentForm.quantity.value;

		const row = studentTable.insertRow();
		const nameCell = row.insertCell();
		const emailCell = row.insertCell();
		const materialCell = row.insertCell();
		const quantityCell = row.insertCell();

		nameCell.textContent = name;
		emailCell.textContent = email;
		materialCell.textContent = material;
		quantityCell.textContent = quantity;
		const form = document.getElementById("student-form");
		form.reset();
	});
});

