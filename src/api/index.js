import { ipcMain } from 'electron'

ipcMain.on('calcularAutonomia', (event, values) => {
    const cargaTotal = values.tensaoBateria * values.capacidadeBateria * values.fatorPotencia * values.qtdBaterias;
    const duracaoSegundos = cargaTotal / values.cargaAplicada;
    event.returnValue = duracaoSegundos / 3600;
})