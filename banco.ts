namespace empresa{
    export class Banco{
        private _nome: string;
        private _CodBanco:number;
        private _clientes: Array<Cliente>=[];
        private _funcionarios:Array<Funcionario>=[];

        public getNome(){
            return this._nome
        }

        public setNome(nome:string){
            this._nome=nome;
        }

        public getCodBanco(){
            return this._CodBanco;
        }
        public setCodBanco(codigo:number){
              this._CodBanco = codigo;  
        }
        public getClientes(cliente:Cliente){
            this._clientes.push(cliente);
        }
        public addCliente(cliente:Cliente){
            this._clientes.push(cliente);
        }
        public getFuncionarios(){
            return this._funcionarios;
        }
        public addFuncionario(funcionario:Funcionario){
            this._funcionarios.push(funcionario);
        }
    }
}