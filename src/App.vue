<template>
  <div id="app">
    <h1>Calculadora de Autonomia - Nobreak</h1>
    <form @submit="calcularAutonomia">
      <div class="form-group">
        <label for="carga-aplicada">Carga Aplicada: <span>W</span></label>
        <input v-model="dados.cargaAplicada" type="number" id="carga-aplicada" min="0">
      </div>
      <div class="form-group">
        <label for="tensao-bateria">Tensão da Bateria:<span>V</span></label>
        <input v-model="dados.tensaoBateria" type="number" id="tensao-bateria" min="0">
      </div>
      <div class="form-group">
        <label for="capacidade-bateria">Capacidade da Bateria: <span>Ah</span></label>
        <input v-model="dados.capacidadeBateria" type="number" id="capacidade-bateria" min="0">
      </div>
      <div class="form-group">
        <label for="qtd-baterias">Quantidade de Baterias</label>
        <input v-model="dados.qtdBaterias" type="number" step="1" id="qtd-baterias" min="0">
      </div>
      <div class="form-group">
        <label for="qtd-baterias">Fator de Potência: <span>(0-1)</span></label>
        <input v-model="dados.fatorPotencia" type="number" step=".01" id="fator-potencia" min="0" max="1">
      </div>

      <button type="submit">Calcular</button>
    </form>

    <div class="author">
      Desenvolvido por Herik dos Santos Lorenção
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      dados: {
        cargaAplicada: 0,
        tensaoBateria: 0,
        capacidadeBateria: 0,
        qtdBaterias: 0
      }
    }
  },
  methods: {
    calcularAutonomia(event) {
      event.preventDefault();
      const autonomiaNobreak = window.ipcRenderer.sendSync('calcularAutonomia', this.dados)
      alert(`Autonomia do Nobreak = ${autonomiaNobreak} hora(s)`)
    }
  }
}
</script>

<style scoped>
html {
  font-size: 50%;
}

* {
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  margin-top: 30px;
  margin-bottom: 30px;
  color: #333;
  font-size: 1.7rem;
}

form {
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

button {
  width: 50%;
  margin-top: 30px;
  background-color: #42b983;
  color: #fff;
  border: none;
  font-size: 1rem;
  padding: 10px 0;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #2f865f;
}

span {
  color: #333;
  font-weight: 600;
}

.form-group {
  display: flex;
  flex-direction: column;
  width: 50%;
  color: #555;
  text-align: center;
}

input {
  font-size: 1rem;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
  padding: 10px;
}

.author {
  margin-top: 30px;
  color: #555;
  font-size: 0.8rem;
}
</style>
