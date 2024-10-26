import "./Transaction.css"

export function Transaction(){
    return(
        <div>
            <header class="header">
                <img id="logo" src="./image/logo-new2.png" alt="Logo" />
                <button>Nova Transação</button>
            </header>

            <section class="values">
                <div class="prohibited">
                    <div class="div-money">
                        <h4>Entradas</h4>    <img src="./image/up.png" alt="" />
                    </div>
                    <h3 class="item-money">3.500,00</h3>
                </div>

                <div class="exits">
                    <div class="div-money">
                        <h4>Saídas</h4>    <img src="./image/down.png" alt="" />
                    </div>
                    <h3 class="item-money">2.200,00</h3>
                </div>

                <div class="total">
                    <div class="div-money">
                        <h4>Total</h4>    <img src="./image/money.png" alt="" />
                    </div>
                    <h3 class="item-money">1.300,00</h3>
                </div>
            </section>

            <section class="search">
                <input type="text" placeholder="buscar" />
                <button>
                    <img src="./image/search.png" alt="" />
                    Buscar
                </button>
            </section>

            <section class="history">
                <div class="history-item credit">
                    <div> Desenvolvimento de site 1</div>
                    <div class="history-item-money"> R$ 1.200,00 </div>
                    <div> Venda </div>
                    <div> 20/10/2024 </div>
                </div>
            </section>

            <section class="history">
                <div class="history-item credit">
                    <div> Desenvolvimento de site 2</div>
                    <div  class="history-item-money"> R$ 1.500,00 </div>
                    <div> Venda </div>
                    <div> 23/10/2024 </div>
                </div>
            </section>

            <section class="history">
                <div class="history-item credit">
                    <div> Desenvolvimento de site 3</div>
                    <div class="history-item-money"> R$ 800,00 </div>
                    <div> Venda </div>
                    <div> 25/10/2024 </div>
                </div>
            </section>

            <section class="history">
                <div class="history-item debit">
                    <div> Aluguel e outras despesas</div>
                    <div class="history-item-money"> - R$ 2.200,00 </div>
                    <div> Venda </div>
                    <div> 26/10/2024 </div>
                </div>
            </section>
            
            <footer>
                <div class="footer-item">
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