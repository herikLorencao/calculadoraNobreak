import { ipcMain } from 'electron'

ipcMain.on('calcularAutonomia', (event, args) => {
    event.returnValue = 50;
})