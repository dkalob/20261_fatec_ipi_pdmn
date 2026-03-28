import { Component } from "react";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

export default class Busca extends Component {

    //* o state é o que o usuário digita no campo de busca
    state = {
        termoDeBusca: ''
    }
  
   onTermoAlterado = (e) => {
        //console.log(e.target.value) // o que o usuário digita no campo de busca
        this.setState({ 
            termoDeBusca: e.target.value
        })
   }

   onFormSubmit = (e) => {
    e.preventDefault() // para evitar que a página seja recarregada ao enviar o formulário
    this.props.onBuscaRealizada(this.state.termoDeBusca) // para enviar o termo de busca para o componente pai (App.jsx)
}
    
  render() {
    return (
        <form onSubmit={this.onFormSubmit}>
            <div className="flex flex-column">
                <IconField iconPosition="left">
                    <InputIcon className="pi pi-search" 
                    />
                    <InputText
                     className="w-full"
                     value={this.state.termoDeBusca}
                     placeholder="O que deseja ver..?"
                     onChange={this.onTermoAlterado}
                    />
                </IconField>
                <Button
                 label="Buscar"
                 className="p-button-outlined mt-2"
                />
            </div>
        </form> 
    )
  }
}