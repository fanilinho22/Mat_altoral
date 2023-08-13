function fatorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * fatorial(n - 1);
    }
}

function permutacao(n, r) {
    return fatorial(n) / fatorial(n - r);
}

function arranjo(n, r) {
    return fatorial(n) / fatorial(n - r);
}

function combinacao(n, r) {
    return fatorial(n) / (fatorial(r) * fatorial(n - r));
}

function calcular() {
    const n = parseInt(document.getElementById("n").value);
    const r = parseInt(document.getElementById("r").value);

    const fatorialResult = fatorial(n);
    const permutacaoResult = permutacao(n, r);
    const arranjoResult = arranjo(n, r);
    const combinacaoResult = combinacao(n, r);

    document.getElementById("fatorial").textContent = `Fatorial de n: ${fatorialResult}`;
    document.getElementById("permutacao").textContent = `Permutação de n e r: ${permutacaoResult}`;
    document.getElementById("arranjo").textContent = `Arranjo de n e r: ${arranjoResult}`;
    document.getElementById("combinacao").textContent = `Combinação de n e r: ${combinacaoResult}`;
    
    // Exibe os resultados na tela
    document.getElementById("resultados").style.display = "block";
}
