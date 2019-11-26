namespace empresa{
   export class Funcionario extends Pessoa{
       private _codFuncionario:number;
       private _setor:string;
       private _banco:Banco;

       public getcodFuncionario(){
           return this._codFuncionario;
       }
       public setcodFuncionario(codigo:number){
           this._codFuncionario = codigo;
       }

       public getSetor(){
           return this._setor;
       }
       public setSetor(setor:string){
           this._setor=setor;
       }
       public getBanco(){
           return this._banco;
       }

       public setBanco(banco:Banco){
           this._banco=banco;
       }
    }

   

}