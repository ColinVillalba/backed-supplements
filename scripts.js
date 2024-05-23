document.addEventListener('DOMContentLoaded', () => {
    const productDetails = {
        'ashwagandha': {
            title: 'Ashwagandha',
            image: 'images/ashwagandha-raw.jpg',
            description: 'Ashwagandha is known for its ability to reduce stress and anxiety, improve mood, and enhance energy levels.',
            benefits: 'Stress reduction, energy boost, mood improvement.',
            references: '<a href="https://pubmed.ncbi.nlm.nih.gov/23480034/" target="_blank">PubMed Study on Ashwagandha</a>'
        },
        'tongkat-ali': {
            title: 'Tongkat Ali',
            image: 'images/tongkat-ali-raw.jpg',
            description: 'Tongkat Ali is renowned for boosting testosterone levels, enhancing libido, and improving overall physical performance.',
            benefits: 'Testosterone boost, libido enhancement, physical performance improvement.',
            references: '<a href="https://pubmed.ncbi.nlm.nih.gov/21671978/" target="_blank">PubMed Study on Tongkat Ali</a>'
        },
        'fadogia-agrestis': {
            title: 'Fadogia Agrestis',
            image: 'images/fadogia-agrestis-raw.jpg',
            description: 'Fadogia Agrestis is known for enhancing athletic performance and supporting muscle growth.',
            benefits: 'Athletic performance enhancement, muscle growth support.',
            references: '<a href="https://pubmed.ncbi.nlm.nih.gov/17530942/" target="_blank">PubMed Study on Fadogia Agrestis</a>'
        },
        'turkesterone': {
            title: 'Turkesterone',
            image: 'images/turkesterone-raw.jpg',
            description: 'Turkesterone is effective in promoting muscle growth, enhancing recovery, and improving strength.',
            benefits: 'Muscle growth, recovery enhancement, strength improvement.',
            references: '<a href="https://pubmed.ncbi.nlm.nih.gov/24874053/" target="_blank">PubMed Study on Turkesterone</a>'
        }
    };

    window.showPopup = (productId) => {
        const details = productDetails[productId];
        document.getElementById('popup-details').innerHTML = `
            <h2>${details.title}</h2>
            <img src="${details.image}" alt="${details.title}">
            <p>${details.description}</p>
            <p><strong>Benefits:</strong> ${details.benefits}</p>
            <p><strong>References:</strong> ${details.references}</p>
        `;
        document.getElementById('popup').style.display = 'flex';
    };

    window.closePopup = () => {
        document.getElementById('popup').style.display = 'none';
    };
});
