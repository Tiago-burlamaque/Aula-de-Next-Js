'use client'

import { useState } from "react"

export function Button(){
    const [nome, setNome] = useState("Sujeito Programador")

    function handleChangeNome(){
        setNome("Tiago Burlamaque")
    }
    return(
        <div>
            <button onClick={handleChangeNome}>
                Alterar nome
            </button><br />
            <h3>
                Nome: {nome}
            </h3>
        </div>
    )
}