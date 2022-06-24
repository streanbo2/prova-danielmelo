import './App.css'

function App() {
    return (
        <div className='principal'>    
        <div className="group1">           
                <div className="bloco1">
                    <button className="b1">Processos</button>
                    <br />
                    <br />
                    <p class="legend">
                    Processos relacionados ao combate do COVID-19
                    </p>
                
            </div>
            <div className="bloco2">
            <button className="b1">Contratos</button>
                <br />
                <br />
                <p class="text-justify">
          Contratos relacionados ao combate do COVID-19
            </p>
            </div>
        </div>  
        <div className='group2'>
        <div className="bloco3">
            <button className="b2">Licitações e Compras Diretas(Dispensas)</button>
                <br />
                <br />
                <p class="text-justify">
                Compras destinadas ao enfrentamento e combate a COVID-19
            </p>
            </div>

        </div>
        <div className="group3">           
                <div className="bloco4">
                    <button className="b3">Receitas Federais</button>
                    <br />
                    <br />
                    <p class="legend">
                    
                        Receitas federais destinadas ao enfrentamento e combate a COVID-19
                    Arrecadada: 73.082,40
                    </p>
                
            </div>
            <div className="bloco5">
            <button className="b3">Receitas estaduais</button>
                <br />
                <br />
                <p class="text-justify">
                Receitas estaduais destinadas ao enfrentamento e combate a COVID-19
                Arrecadada: 0,00
            </p>
            </div>
        </div> 
        <div className='group4'>
        <div className="bloco6">
            <button className="b4">Empenhos</button>
                <br />
                <br />
                <p class="text-justify">
                Despesas empenhadas destinadas ao enfrentamento e combate a COVID-19

                 Valor Atualizado: 0,00
                Restos: 32.338,04
            </p>
            </div>
            <div className="bloco7">
            <button className="b4">Liquidações</button>
                <br />
                <br />
                <p class="text-justify">
                Despesas liquidadas destinadas ao enfrentamento e combate a COVID-19

                Valor Atualizado: 20.137,02
            </p>
            </div>
            <div className="bloco8">
            <button className="b4">Pagamentos</button>
                <br />
                <br />
                <p class="text-justify">
                Despesas pagas destinadas ao enfrentamento e combate a COVID-19

                Valor Atualizado: 20.137,02
            </p>
            </div>

        </div> 
        </div>
        
    )
}

export default App
