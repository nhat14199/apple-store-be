const fs = require('fs');

// Mảng chứa các đối tượng

const products = [
  {
    name: 'MacBook Air 13” and 15” with M2 chip',
    new: 'New',
    memory: [
      { quantity: '8GB unified memory', price: '0' },
      { quantity: '16GB unified memory', price: '249' },
      { quantity: '32GB unified memory', price: '549' },
    ],
    storage: [
      { quantity: '256 GB ', price: '0' },
      { quantity: '512 GB', price: '249' },
      { quantity: '1TB GB', price: '549' },
    ],
    price:
      ' From $999or $41.62/mo.per month for 24 mo.months before trade‑inFootnote*',
    image:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-macbook-air-13-15-202306?wid=1200&hei=1000&fmt=p-jpg&qlt=95&.v=1684262493564',
  },
  {
    name: 'MacBook Pro 14” and 16”',
    memory: [
      { quantity: '8GB unified memory', price: '0' },
      { quantity: '16GB unified memory', price: '249' },
      { quantity: '32GB unified memory', price: '549' },
    ],
    storage: [
      { quantity: '256 GB ', price: '0' },
      { quantity: '512 GB', price: '249' },
      { quantity: '1TB GB', price: '549' },
    ],
    new: 'New',
    price:
      ' From $1999or $413.62/mo.per month for 24 mo.months before trade‑inFootnote*',
    image:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-macbook-pro-14-16-202301?wid=1200&hei=1000&fmt=p-jpg&qlt=95&.v=1670463778272',
  },
  {
    name: 'MacBook Air 13-inch with M1 chip”',
    new: '',
    memory: [
      { quantity: '8GB unified memory', price: '0' },
      { quantity: '16GB unified memory', price: '249' },
      { quantity: '32GB unified memory', price: '549' },
    ],
    storage: [
      { quantity: '256 GB ', price: '0' },
      { quantity: '512 GB', price: '249' },
      { quantity: '1TB GB', price: '549' },
    ],
    price:
      ' From $799or $31.62/mo.per month for 24 mo.months before trade‑inFootnote*',
    image:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-macbook-air-202110?wid=1200&hei=1000&fmt=p-jpg&qlt=95&.v=1664576115052',
  },
  {
    name: 'MacBook Pro 13”',
    new: '',
    memory: [
      { quantity: '8GB unified memory', price: '0' },
      { quantity: '16GB unified memory', price: '249' },
      { quantity: '32GB unified memory', price: '549' },
    ],
    storage: [
      { quantity: '256 GB ', price: '0' },
      { quantity: '512 GB', price: '249' },
      { quantity: '1TB GB', price: '549' },
    ],
    price:
      ' From $999or $41.62/mo.per month for 24 mo.months before trade‑inFootnote*',
    image:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-macbook-pro-13-202206?wid=1200&hei=1000&fmt=p-jpg&qlt=95&.v=1665082744007',
  },
  {
    name: 'iMac 24”',
    new: 'New',
    memory: [
      { quantity: '8GB unified memory', price: '0' },
      { quantity: '16GB unified memory', price: '249' },
      { quantity: '32GB unified memory', price: '549' },
    ],
    storage: [
      { quantity: '256 GB ', price: '0' },
      { quantity: '512 GB', price: '249' },
      { quantity: '1TB GB', price: '549' },
    ],
    price:
      ' From $999or $41.62/mo.per month for 24 mo.months before trade‑inFootnote*',
    image:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-imac-24-202108?wid=980&hei=1000&fmt=jpeg&qlt=90&.v=1625868688000',
  },
  {
    name: 'Mac mini',
    new: 'New',
    memory: [
      { quantity: '8GB unified memory', price: '0' },
      { quantity: '16GB unified memory', price: '249' },
      { quantity: '32GB unified memory', price: '549' },
    ],
    storage: [
      { quantity: '256 GB ', price: '0' },
      { quantity: '512 GB', price: '249' },
      { quantity: '1TB GB', price: '549' },
    ],
    price:
      ' From $999or $41.62/mo.per month for 24 mo.months before trade‑inFootnote*',
    image:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-mac-mini-202301?wid=1200&hei=1000&fmt=p-jpg&qlt=95&.v=1670549737872',
  },
  {
    name: 'Mac Studio',
    new: 'New',
    memory: [
      { quantity: '8GB unified memory', price: '0' },
      { quantity: '16GB unified memory', price: '249' },
      { quantity: '32GB unified memory', price: '549' },
    ],
    storage: [
      { quantity: '256 GB ', price: '0' },
      { quantity: '512 GB', price: '249' },
      { quantity: '1TB GB', price: '549' },
    ],
    price:
      ' From $1999or $159.62/mo.per month for 24 mo.months before trade‑inFootnote*',
    image:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-mac-studio-202306?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1683842370512',
  },
];

// Chuyển đổi mảng thành chuỗi JSON
const jsonString = JSON.stringify(products, null, 2); // `null, 2` để làm đẹp JSON

// Ghi chuỗi JSON vào file
fs.writeFile('products.json', jsonString, (err) => {
  if (err) {
    console.error('Lỗi khi ghi file:', err);
  } else {
    console.log('File JSON đã được ghi thành công.');
  }
});
