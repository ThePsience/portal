let cards = [
  {
    title: 'Apple',
    link: 'https://www.apple.com/store?afid=p238%7CseIEs444j-dc_mtid_1870765e38482_pcrid_719173783893_pgrid_13945964887_pntwk_g_pchan__pexid__ptid_kwd-10778630_&cid=aos-us-kwgo-brand-apple--slid---product-',
  },
  {
    title: 'Microsoft',
    link: 'https://www.microsoft.com/en-us/',
  },
  {
    title: 'Nintendo',
    link: 'https://www.nintendo.com/us/',
  },
];

// look up what an object in JavaScript is, when you find the syntax for an object, include a title and a url link
// Look up how to push an object to an array
let cardsList = document.querySelector('div.cards');

for (let i = 0; i < cards.length; i++) {
  let card = document.createElement('div');
  card.classList.add('card');
  cardsList.appendChild(card);

  let inner_text = document.createElement('div');
  inner_text.classList.add('card-inner');
  card.appendChild(inner_text);

  let card_front = document.createElement('div');
  card_front.classList.add('card-front');
  inner_text.appendChild(card_front);

  let front_text = document.createElement('h2');
  front_text.textContent = cards[i].title;
  card_front.appendChild(front_text);

  let card_back = document.createElement('div');
  card_back.classList.add('card-back');
  inner_text.appendChild(card_back);

  let back_text = document.createElement('a');
  back_text.href = cards[i].link;
  back_text.text = 'Link to ' + cards[i].title;
  card_back.appendChild(back_text);

  document.querySelector('div.cards').appendChild(card);
}
