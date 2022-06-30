"use strict";
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professor"] = 0] = "Professor";
    Profissao[Profissao["Engenheiro"] = 1] = "Engenheiro";
    Profissao[Profissao["Pintor"] = 2] = "Pintor";
    Profissao[Profissao["Porteiro"] = 3] = "Porteiro";
})(Profissao || (Profissao = {}));
const gabriel = {
    name: 'Gabriel',
    idade: 26,
    casado: false,
    trabalho: Profissao.Engenheiro
};
const mario = {
    name: 'Mario',
    idade: 26,
    casado: false,
};
const jessica = {
    name: 'Jessica',
    idade: 28,
    casado: true,
    trabalho: Profissao.Pintor,
    materias: ["historia da arte", "teoria das cores"]
};
const monica = {
    name: 'Monica',
    idade: 28,
    casado: true,
    materias: ["historia da arte", "teoria das cores"]
};
function listar(lista) {
    for (const item of lista)
        console.log(item);
}
listar(monica.materias);
