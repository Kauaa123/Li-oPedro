import Cabecalho from '../components/cabecalho';
import './index.scss';
import '../colors.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function App() {
    const [cards, setCards] = useState([])

    async function listar() {
        const resp = await axios.get('http://localhost:3002/cards')
        setCards(resp.data.obj)
    }

    useEffect(() =>{
        listar()
    }, [cards])

    return (
        <div className='app-container'>
            <Cabecalho />

            <button id='botaoAtualizar' onClick={listar}>Atualizar</button>
                {
                    cards.map(card => 
                      <Card      
                        titulo={card.titulo}
                        subtitulo={card.subtitulo}
                        data={card.data}
                        trabalho= {card.trabalho}
                        status={card.status}
                        FimBimestre={card.FimBimestre}
                        />
                    )
                }   
        </div>
    );
}

function Card({titulo, subtitulo, data, status, trabalho, FimBimestre}) {
    let corPrimaria = ''
    let corSegundaria = ''

    switch (status) {
        case 'Completo':
            corPrimaria = '#A3E5BA'
            corSegundaria = '#EFFBE2'
            break

            case 'Em andamento':
            corPrimaria = '#DCA3E5'
            corSegundaria = '#EDE2FB'
            break

            case 'Criado':
            corPrimaria = '#C3C3C3'
            corSegundaria = '#F2F2F2'
            break

            case 'Evento':
            corPrimaria = '#F6E448'
            corSegundaria = '#FAF4C1'
            break

        default:
            break
    }

    switch (FimBimestre) {
        case true:
            corPrimaria= '#F2F2F2'
            
            break
    
        default:
            break
    }


    return(
        <div className='app-container'>

            {FimBimestre ? 
            <div className="cardBranco" style={{ backgroundColor: corPrimaria }}>
                <div className="cardBranco-Conteudo">
                    <pre>
                        <h1>Fim do </h1>
                        <h1>terceiro bimestre</h1>
                    </pre>
                    
                </div>
            </div>
            : 
                <div className='cards'>
                <div className='card' style={{ backgroundColor: corSegundaria }}>
                    <div className='card-cabecalho' style={{ backgroundColor: corPrimaria }}>
                        <h2>{titulo}</h2>
                    </div>
                    <div className='card-conteudo'>
                        <h3>Assuntos</h3>
                        <pre>
                            {subtitulo}<br />
                        </pre>
                    </div>

                    <p className='tag'>{data}</p>

                    {trabalho ? 
                    <p className='tag'>Entrega Trab.</p> : ''}
                </div>
            </div>
            
            }
            
        </div>
    )
}


