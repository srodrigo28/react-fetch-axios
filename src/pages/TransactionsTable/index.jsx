import "./TransactionsTable.css"

export function TransactionsTable(){
    return(
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Web Essencial treinamento</td>
                        <td>R$ 2.000,00</td>
                        <td>Curso 1</td>
                        <td>20/09/2024</td>
                    </tr>
                    <tr>
                        <td>JavaScript treinamento</td>
                        <td>R$ 500,00</td>
                        <td>Curso 2</td>
                        <td>20/10/2024</td>
                    </tr>
                    <tr>
                        <td>ReactJS treinamento</td>
                        <td>R$ 3.500,00</td>
                        <td>Curso 3</td>
                        <td>20/11/2024</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}