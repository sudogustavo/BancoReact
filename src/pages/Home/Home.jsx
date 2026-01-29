// TODO: resolver o dinheiro não atualiza.
import { useState, useRef } from "react";
import "./Home.css"
import banco from "../../hooks/BancoAPI/banco"

const Home = () => {
    const myBank = useRef(new banco("Gustavo", 2000));
    const [relatorios, setRelatorio] = useState([]);
    
    return (
        <>
            <div className="container">
                <h1>Bem-vindo ao banco teste.</h1>

                <h3>Você possue: {myBank.current.money}</h3>

                <section>
                    <input type="text" id="inpt" placeholder="Usuário" />
                    <label>Para quem?</label>
                </section>

                <section>
                    <input type="number" id="qnt-inpt" placeholder="Quantidade" />
                    <label>Quantidade</label>
                </section>

                <button type="button" onClick={() => myBank.current.work()}>Trabalhar</button>
                <button type="button" onClick={() => setRelatorio(myBank.current.gerarRelatorio())}>Relatório</button>
                <button type="button" onClick={() => myBank.current.fazerTransacao(document.getElementById("inpt").value, document.getElementById("qnt-inpt").value)}>Fazer Transação</button>

                <div className="table-main">
                    <h1>Transações</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>De</th>
                                <th>Para</th>
                                <th>Money</th>
                                <th>Data</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                relatorios.map((item, key) => {
                                    console.log("test");
                                    return (
                                        <tr key={key}>
                                            <td>{item.de}</td>
                                            <td>{item.para}</td>
                                            <td>{item.money}</td>
                                            <td>{item.data}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Home;