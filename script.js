// Hamburger Menu
document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('navMenu').classList.toggle('active');
});

// Accordion
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const item = header.parentNode;
        item.classList.toggle('active');
    });
});

// Tool Buttons
document.querySelectorAll('.tool-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const tool = btn.dataset.tool;
        document.querySelector('.empty-state').style.display = 'none';
        const container = document.getElementById('tool-container');
        container.innerHTML = `<h3>${btn.textContent}</h3><p>Loading ${tool} tool... (Implement functionality here)</p>`;
        // Add tool logic here, e.g., for calc-basic: show calculator UI
    });
});

// Modals
function openModal(type) {
    const title = type === 'about' ? 'About Us' : 'Privacy Policy';
    const content = type === 'about' 
        ? '<p>ToolTreasure Hub is a collection of free online tools built with ❤️.</p>'
        : '<p>We respect your privacy. No data is stored.</p>';
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-body').innerHTML = content;
    document.getElementById('modal-overlay').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal-overlay').style.display = 'none';
}

window.onclick = (e) => {
    if (e.target.id === 'modal-overlay') closeModal();
};
