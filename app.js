class Cliente {
     constructor(nombre, saldo){
          this.nombre = nombre;
          this.saldo = saldo;
     }

     imprimirSaldo(){
          return `Hola ${this.nombre}, tu saldo es de : ${this.saldo}`;
     }

     static bienvenida(){
          return `Bienvenido al cajero`;
     }
}

//HEREDAR
class Empresa extends Cliente {
     constructor(nombre,saldo,telefono,tipo){
           // super va al constructor padre y leer los valores y asignarlos a nombre y saldo
          super(nombre, saldo);
          // no existe en el constructor padre 
          this.telefono = telefono;
          this.tipo = tipo;
     }

     static bienvenida() {
          return `Bienvenido al cajero para empresas`;
     }
}

console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());