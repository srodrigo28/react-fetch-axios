import "./Transaction.css"
// import formatMoeda from "./../../utils/formatMoeda"
import formatDate from "./../../utils/formatDate"
import CountUp from 'react-countup';
import { useState } from "react"
import { NewTranction } from './../NewTranction';

export function Transaction(){
    const [open, setOpen] = useState(false)
    
    return(
        <div>
            <header className="header">
                <img id="logo" src="./image/logo-new2.png" alt="Logo" />
                <button onClick={ () => setOpen(!open) } >Nova Transação</button>
            </header>

            <NewTranction isOpen={open}  setOpen={setOpen} />

            <section className="values">
                <div className="prohibited values-item">
                    <div className="div-money">
                        <h4>Entradas</h4>    <img src="./image/up.png" alt="" />
                    </div>
                    <h3 className="item-money">
                    <CountUp 
                            end={ 3500 }
                            duration={3}
                            prefix={"R$ "}
                            separator="."
                            decimal=","
                            decimals={2}
                        />
                    </h3>
                </div>

                <div className="exits values-item">
                    <div className="div-money">
                        <h4>Saídas</h4>    <img src="./image/down.png" alt="" />
                    </div>
                    <h3 className="item-money">
                         <CountUp 
                            end={ 2200 }
                            duration={2}
                            prefix={"R$ "}
                            separator="."
                            decimal=","
                            decimals={2}
                        />

                    </h3>
                </div>

                <div className="total values-item">
                    <div className="div-money">
                        <h4>Total</h4>    <img src="./image/money.png" alt="" />
                    </div>
                    <h3 className="item-money">
                        <CountUp 
                            end={ 1300 }
                            duration={6}
                            prefix={"R$ "}
                            separator="."
                            decimal=","
                            decimals={2}
                        />
                    </h3>
                </div>
            </section>

            <section className="search">
                <input type="text" placeholder="buscar" />
                <button>
                    <img src="./image/search.png" alt="" />
                    Buscar
                </button>
            </section>

            <section className="history">
                <div className="history-item credit">
                    <div> Desenvolvimento de site 1</div>
                    <div className="history-item-money"> R$ 1.200,00 </div>
                    <div> Venda </div>
                    <div> { formatDate("2024-3-9") } </div>
                </div>
            </section>

            <section className="history">
                <div className="history-item credit">
                    <div> Desenvolvimento de site 2</div>
                    <div  className="history-item-money"> R$ 1.500,00 </div>
                    <div> Venda </div>
                    <div> 23/10/2024 </div>
                </div>
            </section>

            <section className="history">
                <div className="history-item credit">
                    <div> Desenvolvimento de site 3</div>
                    <div className="history-item-money"> R$ 800,00 </div>
                    <div> Venda </div>
                    <div> 25/10/2024 </div>
                </div>
            </section>

            <section className="history">
                <div className="history-item debit">
                    <div> Aluguel e outras despesas</div>
                    <div className="history-item-money"> - R$ 2.200,00 </div>
                    <div> Despesa </div>
                    <div> 26/10/2024 </div>
                </div>
            </section>
            
            <footer>
                <div className="footer-item">
                    <button>
                        <img src="./image/right2.png" alt="" />
                    </button>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>
                        <img src="./image/left.png" alt="" />
                    </button>
                </div>
            </footer>
        </div>
    )
}