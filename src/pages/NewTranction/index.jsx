
import { useState } from "react";
import "./NewTranction.css";
import { useNumberFormat } from '@react-input/number-format';
import { toast } from "react-toastify";

export function NewTranction( { isOpen, setOpen } ) {
    const url = "http://localhost:3000/transaction"
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [status, setStatus] = useState("")
    const [inputDate, setInputDate] = useState("2024-10-25")

    const [category, setCategory] = useState("")

    const inputRef = useNumberFormat({
        locales: 'pt',
        format:"currency",
        currency:"BRL",
        maximumFractionDigits: 2,
    });

    const handleValidation = () => {
        if( description =="" || price == "" || status == "" || inputDate == ""){
            toast("Por favor preencher todos os campos!")
            // console.log( '\n' + description + '\n', price  + '\n', status  + '\n', inputDate  + '\n', category )
            return false
        }else{
            console.log( '\n', description + '\n', price  + '\n', status  + '\n', inputDate  + '\n', category )
            handleInserir()
            setOpen(!isOpen)
        }
    }

    const handleInserir = () => {
        fetch( url, {
            method : "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                description: description,
                price: price,
                data: inputDate,
                status: status,
                category: category
              })
            })
            toast('Salvo com sucesso')
    }

    if (isOpen) {
        return (
            <div className="container">
                <div className="modal1">

                    <form>
                        <button id="fechar" onClick={() => setOpen(!isOpen)} > X </button>

                        <h3>Nova transação</h3>

                        <input type="text" placeholder="Descricao " value={description} onChange={ e => setDescription( e.target.value )}  />
                        <input  ref={inputRef} className="input" value={price} onChange={ e => setPrice(e.target.value ) }    />
                        <div className="row1">
                            <select className="select-input" value={status} onChange={ e => setStatus( e.target.value )}>
                                <option value="vencer">A vencer</option>
                                <option value="pago">Pago</option>
                                <option value="vencido">Vencido</option>
                                <option value="receber">Receber</option>
                                <option value="receber">Recebido</option>
                            </select>
                            <input type="date"  className="input-date" value={inputDate} onChange={ e => setInputDate(e.target.value)}  />
                        </div>

                        <div className="btn-group">
                            <button 
                                className={` ${ category === "entrada" ? "active-entrada" : "" }  entrada `} 
                                type="button" onClick={ () => setCategory("entrada") }                                
                            >
                                <i className="fa-regular fa-circle-up"></i>
                                Entrada
                            </button>

                            <button 
                                className={` ${ category === "saida" ? "active-saida" : ""  }  saida `} 
                                type="button" onClick={ () => setCategory("saida") }
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