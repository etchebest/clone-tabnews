function sum(n1, n2) {
  if (typeof n1 !== 'number') return "Erro";

  return n1 + n2;
}

exports.sum = sum