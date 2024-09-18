const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('electronAPI', {
    pickFile: (payload) => ipcRenderer.sendSync('pickFile', payload),
    pickDirectory: (payload) => ipcRenderer.sendSync('pickDirectory', payload),
    launchProject: (processes) => ipcRenderer.sendSync('launchProject', processes),
    launchProcess: (process_path) => ipcRenderer.sendSync('launchProcess', process_path),
    get_language: () => ipcRenderer.sendSync('get_language'),
    set_language: (language) => ipcRenderer.sendSync('set_language', language),
    get_data: () => ipcRenderer.sendSync('get_data'),
    get_os: () => ipcRenderer.sendSync('get_os'),
    set_data: (data) => ipcRenderer.sendSync('set_data', data),
    set_theme: (data) => ipcRenderer.sendSync('set_theme', data),
    get_theme: () => ipcRenderer.sendSync('get_theme'),
    get_processes: () => ipcRenderer.sendSync('get_processes'),
    set_processes: (data) => ipcRenderer.sendSync('set_processes',data),
})