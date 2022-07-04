import React from 'react'
import Dashboard from '../../components/Dashboard'
import { Header } from '../../components/Header'
import { Container } from './styles'

export function Home() {
    return (
        <>
            <Header />
            <Container>
                <Dashboard />
            </Container>

        </>



    )
}
