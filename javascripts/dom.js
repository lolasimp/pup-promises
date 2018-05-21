const outputDiv = $('#pupz');

const domString = (pups) => {
  let domString = '';
  pups.forEach((pup) => {
    domString += `<div class="col-xs-6 col-sm-4">`;
    domString +=  `<div class="thumbnail">`;
    domString +=   `<div class="caption">`;
    domString +=  `<h3>${pup.name}</h3>`;
    domString += `<p>${pup.bio}</p>`;
    domString += `</div>`;
    domString += `</div>`;
    domString += `</div>`;
  });
  printToDom(domString);
};

const printToDom = (pupz) => {
  outputDiv.append(pupz);
};

module.exports = domString;
