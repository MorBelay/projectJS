let contacts = [
  { name: "Mor Belayew", phone: "054-5632634", email: "mor1@gmail.com" },
  { name: "Yossi Cohen", phone: "054-9124642", email: "yossi@gmail.com" },
  { name: "Noa Levi", phone: "054-341367134", email: "noa@gmail.com" }
];

function renderContacts() {
  const listContainer = document.getElementById('contactList');
  listContainer.innerHTML = '';
  contacts.forEach((contact, index) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <p><strong>Name:</strong> ${contact.name}</p>
      <p><strong>Phone:</strong> ${contact.phone}</p>
      <p><strong>Email:</strong> ${contact.email}</p>
      <button onclick="editContact(${index})">Edit</button>
      <button onclick="deleteContact(${index})">Delete</button>
    `;
    listContainer.appendChild(card);
  });
}

function deleteContact(index) {
  contacts.splice(index, 1);
  renderContacts();
}

function editContact(index) {
  const contact = contacts[index];
  const newName = prompt("Edit name:", contact.name);
  const newPhone = prompt("Edit phone:", contact.phone);
  const newEmail = prompt("Edit email:", contact.email);
  if (newName && newPhone && newEmail) {
    contacts[index] = { name: newName, phone: newPhone, email: newEmail };
    renderContacts();
  }
}

window.onload = () => {
  renderContacts();
};
