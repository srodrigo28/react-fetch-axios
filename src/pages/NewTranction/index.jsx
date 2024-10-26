
import { useState } from "react";
import "./NewTranction.css";
import { useNumberFormat } from '@react-input/number-format';
import { toast } from "react-toastify";

export function NewTranction({ isOpen, setOpen }) {

    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [status, setStatus] = useState("")
    const [inputDate, setInputDate] = useState("2024-10-25")
    const [categoryEntrada, setCategoryEntrada] = useState("")
    const [categorySaidas, setCategorySaida] = useState("")

    const inputRef = useNumberFormat({
        locales: 'pt',
        format:"currency",
        currency:"BRL",
        maximumFractionDigits: 2,
      });

      const handleCategory = () => {
        if(categoryEntrada == "entrada"){
            setCategoryEntrada("active-entrada")
        }
      }

      const handleValidation = () => {
        if(!description, !price, !status, !inputDate){
            toast("Por favor preencher todos os campos!")
            return false
        }else{
            toast("Cadastrado com sucesso")
            setOpen(!isOpen)
        }
      }

    if (isOpen) {
        return (
            <div className="container">
                <div className="modal1">

                    <form>
                        <button id="fechar" onClick={() => setOpen(!isOpen)} > X </button>

                        <h3>Nova transação</h3>

                        <input type="text" placeholder="Descricao "  />
                        <input  ref={inputRef} className="input"     />
                        <div className="row1">
                            <select className="select-input" >
                                <option selected>Status</option>
                                <option value="3">A vencer</option>
                                <option value="1">Pago</option>
                                <option value="2">Vencido</option>
                            </select>
                            <input type="date"  className="input-date" value={inputDate} onChange={ e => setInputDate(e.target.value)}  />
                        </div>

                        <div className="btn-group">
                            <button 
                                className={`${categoryEntrada}  entrada`} 
                                type="button" onClick={ () => handleCategory("entrada") }
                                
                            >
                                <i className="fa-regular fa-circle-up"></i>
                                Entrada
                            </button>

                            <button 
                                className={`${categorySaidas}  saida`} 
                                type="button" onClick={ handleCategory }
                            >
                                <i className="fa-regular fa-circle-down"></i>
                                Saida
                            </button>
                        </div>
                        <button type="button" id="cadastrar" onClick={handleValidation}>Cadastrar</button>
                    </form>
                </div>
            </div>
        )
    }
    //else{ return <> </> }
}