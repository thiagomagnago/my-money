import React, { useState, useRef } from 'react'
import { Redirect } from 'react-router-dom'

const minAno = 2019
const maxAno = 2023

const AdicionarMes = () => {
    const refAno = useRef()
    const refMes = useRef()
    const [redir, setRedir] = useState('')

    const anos = []
    const meses = []

    for (let i = minAno; i <= maxAno; i++) { anos.push(i) }
    for (let i = 1; i <= 12; i++) { meses.push(i) }

    const zeroPad = num => { return (num < 10 ? '0' + num : num) }

    const verMes = () => {
        //console.log('Ver', refAno.current.value, refMes.current.value)
        setRedir(refAno.current.value + '-' + refMes.current.value)
    }

    if (redir !== '') {
        return <Redirect to={'movimentacoes/' + redir} />
    }

    return (
        <>
            <h2>Adicionar mês</h2>
            <select ref={refAno}>
                { anos.map(ano => <option key={ano} value={ano}>{ano}</option>) }
            </select>
            <select ref={refMes}>
                { meses.map(zeroPad).map(mes => <option key={mes} value={mes}>{mes}</option>) }
            </select>
            <button onClick={verMes}>Adicionar mês</button>
        </>
    )
}

export default AdicionarMes